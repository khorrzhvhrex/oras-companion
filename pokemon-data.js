// =========================================================
// ORAS / GENERATION VI TYPE DATA
// =========================================================

const ALL_TYPES = [
  "Normal","Fire","Water","Electric","Grass","Ice",
  "Fighting","Poison","Ground","Flying","Psychic","Bug",
  "Rock","Ghost","Dragon","Dark","Steel","Fairy"
];

/*
  Generation VI type chart.

  Only non-neutral matchups are stored.
  Any missing matchup = 1x damage.

  Structure:
  TYPE_CHART[attackingType][defendingType] = multiplier
*/
const TYPE_CHART = {
  Normal:{
    Rock:0.5,Ghost:0,Steel:0.5
  },

  Fire:{
    Fire:0.5,Water:0.5,Grass:2,Ice:2,
    Bug:2,Rock:0.5,Dragon:0.5,Steel:2
  },

  Water:{
    Fire:2,Water:0.5,Grass:0.5,
    Ground:2,Rock:2,Dragon:0.5
  },

  Electric:{
    Water:2,Electric:0.5,Grass:0.5,
    Ground:0,Flying:2,Dragon:0.5
  },

  Grass:{
    Fire:0.5,Water:2,Grass:0.5,Poison:0.5,
    Ground:2,Flying:0.5,Bug:0.5,Rock:2,
    Dragon:0.5,Steel:0.5
  },

  Ice:{
    Fire:0.5,Water:0.5,Grass:2,Ice:0.5,
    Ground:2,Flying:2,Dragon:2,Steel:0.5
  },

  Fighting:{
    Normal:2,Ice:2,Poison:0.5,Flying:0.5,
    Psychic:0.5,Bug:0.5,Rock:2,Ghost:0,
    Dark:2,Steel:2,Fairy:0.5
  },

  Poison:{
    Grass:2,Poison:0.5,Ground:0.5,
    Rock:0.5,Ghost:0.5,Steel:0,Fairy:2
  },

  Ground:{
    Fire:2,Electric:2,Grass:0.5,
    Poison:2,Flying:0,Bug:0.5,
    Rock:2,Steel:2
  },

  Flying:{
    Electric:0.5,Grass:2,Fighting:2,
    Bug:2,Rock:0.5,Steel:0.5
  },

  Psychic:{
    Fighting:2,Poison:2,Psychic:0.5,
    Dark:0,Steel:0.5
  },

  Bug:{
    Fire:0.5,Grass:2,Fighting:0.5,Poison:0.5,
    Flying:0.5,Psychic:2,Ghost:0.5,
    Dark:2,Steel:0.5,Fairy:0.5
  },

  Rock:{
    Fire:2,Ice:2,Fighting:0.5,
    Ground:0.5,Flying:2,Bug:2,Steel:0.5
  },

  Ghost:{
    Normal:0,Psychic:2,Ghost:2,Dark:0.5
  },

  Dragon:{
    Dragon:2,Steel:0.5,Fairy:0
  },

  Dark:{
    Fighting:0.5,Psychic:2,Ghost:2,
    Dark:0.5,Fairy:0.5
  },

  Steel:{
    Fire:0.5,Water:0.5,Electric:0.5,
    Ice:2,Rock:2,Steel:0.5,Fairy:2
  },

  Fairy:{
    Fire:0.5,Fighting:2,Poison:0.5,
    Dragon:2,Dark:2,Steel:0.5
  }
};


// =========================================================
// POKÉMON TYPE DATA
// =========================================================

const POKEMON_TYPES = {};

const POKEMON_TYPES_CACHE_KEY = "orasPokemonTypesGen6V1";

const POKEMON_TYPES_SOURCE =
  "https://raw.githubusercontent.com/lgreski/pokemonData/master/Pokemon.csv";


function parseCsvLine(line) {
  const values = [];
  let value = "";
  let quoted = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (quoted && line[i + 1] === '"') {
        value += '"';
        i++;
      } else {
        quoted = !quoted;
      }

      continue;
    }

    if (char === "," && !quoted) {
      values.push(value);
      value = "";
      continue;
    }

    value += char;
  }

  values.push(value);

  return values.map(v => v.trim());
}


function restoreCachedPokemonTypes() {
  try {
    const raw = localStorage.getItem(POKEMON_TYPES_CACHE_KEY);

    if (!raw) return false;

    const cached = JSON.parse(raw);

    if (!cached || typeof cached !== "object") return false;

    const names = Object.keys(cached);

    if (names.length !== 721) return false;

    Object.assign(POKEMON_TYPES, cached);

    return true;

  } catch {
    return false;
  }
}


async function loadPokemonTypes(speciesList) {
  if (restoreCachedPokemonTypes()) {
    return POKEMON_TYPES;
  }

  try {
    const response = await fetch(POKEMON_TYPES_SOURCE);

    if (!response.ok) {
      throw new Error(`Pokémon type request failed: ${response.status}`);
    }

    const csv = await response.text();
    const lines = csv.split(/\r?\n/);

    const seenIds = new Set();

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;

      const fields = parseCsvLine(lines[i]);

      const id = Number(fields[0]);

      if (!Number.isInteger(id)) continue;
      if (id < 1 || id > 721) continue;

      /*
        The source includes alternate forms.

        We want the first record for each National Dex number,
        which represents the normal/default species form.
      */
      if (seenIds.has(id)) continue;

      const canonicalName = speciesList[id - 1];

      if (!canonicalName) continue;

      const type1 = fields[3]?.trim();
      const type2 = fields[4]?.trim();

      if (!type1) continue;

      POKEMON_TYPES[canonicalName] =
        type2
          ? [type1, type2]
          : [type1];

      seenIds.add(id);
    }

    if (Object.keys(POKEMON_TYPES).length !== 721) {
      throw new Error(
        `Expected 721 Pokémon typings; loaded ${Object.keys(POKEMON_TYPES).length}.`
      );
    }

    localStorage.setItem(
      POKEMON_TYPES_CACHE_KEY,
      JSON.stringify(POKEMON_TYPES)
    );

    return POKEMON_TYPES;

  } catch (error) {
    console.error("Could not load Pokémon type data:", error);

    return POKEMON_TYPES;
  }
}


// =========================================================
// TYPE EFFECTIVENESS HELPERS
// =========================================================

function typeEffectiveness(attackingType, defendingType) {
  return TYPE_CHART[attackingType]?.[defendingType] ?? 1;
}


function defensiveMultiplier(attackingType, defendingTypes) {
  return defendingTypes.reduce(
    (multiplier, defendingType) =>
      multiplier * typeEffectiveness(attackingType, defendingType),
    1
  );
}


function offensiveTypeCovers(attackingType, defendingType) {
  return typeEffectiveness(attackingType, defendingType) > 1;
}
