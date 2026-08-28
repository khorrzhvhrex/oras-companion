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
