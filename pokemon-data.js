// =========================================================
// ORAS / GENERATION VI TYPE DATA
// =========================================================

const ALL_TYPES = [
  "Normal","Fire","Water","Electric","Grass","Ice",
  "Fighting","Poison","Ground","Flying","Psychic","Bug",
  "Rock","Ghost","Dragon","Dark","Steel","Fairy"
];

// =========================================================
// ORAS / POKEMON LIST
// =========================================================

const POKEMON_721 = [
  "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew",
  "Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi",
  "Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys",
  "Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos","Shieldon","Bastiodon","Burmy","Wormadam","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","Mime Jr.","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion","Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus",
  "Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin","Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn","Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect",
  "Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","Flabébé","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","Meowstic","Honedge","Doublade","Aegislash","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","Pumpkaboo","Gourgeist","Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion"
];

const POKEMON_LOOKUP = new Map(
  POKEMON_721.map(name => [name.toLowerCase(), name])
);

const ORAS_EVOLUTIONS = {
  Treecko:"Grovyle — Lv. 16",
  Grovyle:"Sceptile — Lv. 36",
  Sceptile:"Final form",

  Torchic:"Combusken — Lv. 16",
  Combusken:"Blaziken — Lv. 36",
  Blaziken:"Final form",

  Mudkip:"Marshtomp — Lv. 16",
  Marshtomp:"Swampert — Lv. 36",
  Swampert:"Final form",

  Poochyena:"Mightyena — Lv. 18",
  Mightyena:"Final form",

  Zigzagoon:"Linoone — Lv. 20",
  Linoone:"Final form",

  Wurmple:"Silcoon or Cascoon — Lv. 7",
  Silcoon:"Beautifly — Lv. 10",
  Beautifly:"Final form",
  Cascoon:"Dustox — Lv. 10",
  Dustox:"Final form",

  Lotad:"Lombre — Lv. 14",
  Lombre:"Ludicolo — Water Stone",
  Ludicolo:"Final form",

  Seedot:"Nuzleaf — Lv. 14",
  Nuzleaf:"Shiftry — Leaf Stone",
  Shiftry:"Final form",

  Taillow:"Swellow — Lv. 22",
  Swellow:"Final form",

  Wingull:"Pelipper — Lv. 25",
  Pelipper:"Final form",

  Ralts:"Kirlia — Lv. 20",
  Kirlia:"Gardevoir — Lv. 30; or Gallade — Dawn Stone if male",
  Gardevoir:"Final form",
  Gallade:"Final form",

  Surskit:"Masquerain — Lv. 22",
  Masquerain:"Final form",

  Shroomish:"Breloom — Lv. 23",
  Breloom:"Final form",

  Slakoth:"Vigoroth — Lv. 18",
  Vigoroth:"Slaking — Lv. 36",
  Slaking:"Final form",

  Nincada:"Ninjask — Lv. 20; Shedinja also appears with empty party slot + spare Poké Ball",
  Ninjask:"Final form",
  Shedinja:"Final form",

  Whismur:"Loudred — Lv. 20",
  Loudred:"Exploud — Lv. 40",
  Exploud:"Final form",

  Makuhita:"Hariyama — Lv. 24",
  Hariyama:"Final form",

  Azurill:"Marill — high friendship",
  Marill:"Azumarill — Lv. 18",
  Azumarill:"Final form",

  Skitty:"Delcatty — Moon Stone",
  Delcatty:"Final form",

  Aron:"Lairon — Lv. 32",
  Lairon:"Aggron — Lv. 42",
  Aggron:"Final form",

  Meditite:"Medicham — Lv. 37",
  Medicham:"Final form",

  Electrike:"Manectric — Lv. 26",
  Manectric:"Final form",

  Gulpin:"Swalot — Lv. 26",
  Swalot:"Final form",

  Carvanha:"Sharpedo — Lv. 30",
  Sharpedo:"Final form",

  Wailmer:"Wailord — Lv. 40",
  Wailord:"Final form",

  Numel:"Camerupt — Lv. 33",
  Camerupt:"Final form",

  Spoink:"Grumpig — Lv. 32",
  Grumpig:"Final form",

  Trapinch:"Vibrava — Lv. 35",
  Vibrava:"Flygon — Lv. 45",
  Flygon:"Final form",

  Cacnea:"Cacturne — Lv. 32",
  Cacturne:"Final form",

  Swablu:"Altaria — Lv. 35",
  Altaria:"Final form",

  Barboach:"Whiscash — Lv. 30",
  Whiscash:"Final form",

  Corphish:"Crawdaunt — Lv. 30",
  Crawdaunt:"Final form",

  Baltoy:"Claydol — Lv. 36",
  Claydol:"Final form",

  Lileep:"Cradily — Lv. 40",
  Cradily:"Final form",

  Anorith:"Armaldo — Lv. 40",
  Armaldo:"Final form",

  Feebas:"Milotic — high Beauty + level, or trade holding Prism Scale",
  Milotic:"Final form",

  Shuppet:"Banette — Lv. 37",
  Banette:"Final form",

  Duskull:"Dusclops — Lv. 37",
  Dusclops:"Dusknoir — trade holding Reaper Cloth",
  Dusknoir:"Final form",

  Snorunt:"Glalie — Lv. 42; or Froslass — Dawn Stone if female",
  Glalie:"Final form",
  Froslass:"Final form",

  Spheal:"Sealeo — Lv. 32",
  Sealeo:"Walrein — Lv. 44",
  Walrein:"Final form",

  Clamperl:"Huntail — trade holding Deep Sea Tooth; or Gorebyss — trade holding Deep Sea Scale",
  Huntail:"Final form",
  Gorebyss:"Final form",

  Bagon:"Shelgon — Lv. 30",
  Shelgon:"Salamence — Lv. 50",
  Salamence:"Final form",

  Beldum:"Metang — Lv. 20",
  Metang:"Metagross — Lv. 45",
  Metagross:"Final form",

  Golbat:"Crobat — high friendship",
  Crobat:"Final form",

  Magneton:"Magnezone — level up in New Mauville",
  Magnezone:"Final form",

  Nosepass:"Probopass — level up in New Mauville",
  Probopass:"Final form",

  Eevee:"Vaporeon — Water Stone; Jolteon — Thunder Stone; Flareon — Fire Stone; Espeon — friendship/day; Umbreon — friendship/night; Leafeon — Moss Rock; Glaceon — Ice Rock; Sylveon — Fairy move + 2 Pokémon-Amie affection hearts",
  Vaporeon:"Final form",
  Jolteon:"Final form",
  Flareon:"Final form",
  Espeon:"Final form",
  Umbreon:"Final form",
  Leafeon:"Final form",
  Glaceon:"Final form",
  Sylveon:"Final form",

  Inkay:"Malamar — Lv. 30+ while system is upside down",
  Malamar:"Final form",

  Pancham:"Pangoro — Lv. 32+ with Dark-type Pokémon in party",
  Pangoro:"Final form",

  Sliggoo:"Goodra — Lv. 50+ while raining",
  Goodra:"Final form",

  Tyrunt:"Tyrantrum — Lv. 39+ during daytime",
  Tyrantrum:"Final form",

  Amaura:"Aurorus — Lv. 39+ at night",
  Aurorus:"Final form"
};

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

function pokemonTypes(name) {
  return POKEMON_TYPES[name] || [];
}

function pokemonEvolutionText(name) {
  return ORAS_EVOLUTIONS[name] || "Final form / no ORAS evolution listed";
}

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


async function loadPokemonTypes() {
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

      const canonicalName = POKEMON_721[id - 1];

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

const POKEMON_TYPES_READY = loadPokemonTypes();
