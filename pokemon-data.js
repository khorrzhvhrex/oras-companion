// =========================================================
// ORAS / GENERATION VI TYPE DATA
// =========================================================

const ALL_TYPES = [
  "Normal","Fire","Water","Electric","Grass","Ice",
  "Fighting","Poison","Ground","Flying","Psychic","Bug",
  "Rock","Ghost","Dragon","Dark","Steel","Fairy"
];

const TYPE_COLORS = {
  Normal:"#A8A77A",
  Fire:"#EE8130",
  Water:"#6390F0",
  Electric:"#F7D02C",
  Grass:"#7AC74C",
  Ice:"#96D9D6",
  Fighting:"#C22E28",
  Poison:"#A33EA1",
  Ground:"#E2BF65",
  Flying:"#A98FF3",
  Psychic:"#F95587",
  Bug:"#A6B91A",
  Rock:"#B6A136",
  Ghost:"#735797",
  Dragon:"#6F35FC",
  Dark:"#705746",
  Steel:"#B7B7CE",
  Fairy:"#D685AD"
};


const TYPE_TEXT_COLORS = {
  Normal:"#17131d",
  Fire:"#ffffff",
  Water:"#ffffff",
  Electric:"#17131d",
  Grass:"#17131d",
  Ice:"#17131d",
  Fighting:"#ffffff",
  Poison:"#ffffff",
  Ground:"#17131d",
  Flying:"#17131d",
  Psychic:"#ffffff",
  Bug:"#17131d",
  Rock:"#17131d",
  Ghost:"#ffffff",
  Dragon:"#ffffff",
  Dark:"#ffffff",
  Steel:"#17131d",
  Fairy:"#17131d"
};

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

// =========================================================
// ORAS / GENERATION VI EVOLUTION DATA
// Every Pokémon #001–721 that can evolve under Gen VI rules.
// Later evolutions introduced in Gen VII+ are intentionally
// excluded because they do not exist in Alpha Sapphire.
// =========================================================

const ORAS_EVOLUTIONS = {

  // =======================================================
  // GENERATION I / KANTO SPECIES
  // =======================================================

  Bulbasaur:"Ivysaur — Lv. 16",
  Ivysaur:"Venusaur — Lv. 32",

  Charmander:"Charmeleon — Lv. 16",
  Charmeleon:"Charizard — Lv. 36",

  Squirtle:"Wartortle — Lv. 16",
  Wartortle:"Blastoise — Lv. 36",

  Caterpie:"Metapod — Lv. 7",
  Metapod:"Butterfree — Lv. 10",

  Weedle:"Kakuna — Lv. 7",
  Kakuna:"Beedrill — Lv. 10",

  Pidgey:"Pidgeotto — Lv. 18",
  Pidgeotto:"Pidgeot — Lv. 36",

  Rattata:"Raticate — Lv. 20",
  Spearow:"Fearow — Lv. 20",
  Ekans:"Arbok — Lv. 22",

  Pikachu:"Raichu — Thunder Stone",

  Sandshrew:"Sandslash — Lv. 22",

  "Nidoran♀":"Nidorina — Lv. 16",
  Nidorina:"Nidoqueen — Moon Stone",

  "Nidoran♂":"Nidorino — Lv. 16",
  Nidorino:"Nidoking — Moon Stone",

  Clefairy:"Clefable — Moon Stone",
  Vulpix:"Ninetales — Fire Stone",
  Jigglypuff:"Wigglytuff — Moon Stone",

  Zubat:"Golbat — Lv. 22",
  Golbat:"Crobat — high friendship",

  Oddish:"Gloom — Lv. 21",
  Gloom:"Vileplume — Leaf Stone; or Bellossom — Sun Stone",

  Paras:"Parasect — Lv. 24",
  Venonat:"Venomoth — Lv. 31",
  Diglett:"Dugtrio — Lv. 26",
  Meowth:"Persian — Lv. 28",
  Psyduck:"Golduck — Lv. 33",
  Mankey:"Primeape — Lv. 28",

  Growlithe:"Arcanine — Fire Stone",

  Poliwag:"Poliwhirl — Lv. 25",
  Poliwhirl:"Poliwrath — Water Stone; or Politoed — trade holding King's Rock",

  Abra:"Kadabra — Lv. 16",
  Kadabra:"Alakazam — trade",

  Machop:"Machoke — Lv. 28",
  Machoke:"Machamp — trade",

  Bellsprout:"Weepinbell — Lv. 21",
  Weepinbell:"Victreebel — Leaf Stone",

  Tentacool:"Tentacruel — Lv. 30",

  Geodude:"Graveler — Lv. 25",
  Graveler:"Golem — trade",

  Ponyta:"Rapidash — Lv. 40",

  Slowpoke:"Slowbro — Lv. 37; or Slowking — trade holding King's Rock",

  Magnemite:"Magneton — Lv. 30",
  Magneton:"Magnezone — level up in New Mauville",

  Doduo:"Dodrio — Lv. 31",
  Seel:"Dewgong — Lv. 34",
  Grimer:"Muk — Lv. 38",
  Shellder:"Cloyster — Water Stone",

  Gastly:"Haunter — Lv. 25",
  Haunter:"Gengar — trade",

  Onix:"Steelix — trade holding Metal Coat",

  Drowzee:"Hypno — Lv. 26",
  Krabby:"Kingler — Lv. 28",
  Voltorb:"Electrode — Lv. 30",
  Exeggcute:"Exeggutor — Leaf Stone",
  Cubone:"Marowak — Lv. 28",

  Lickitung:"Lickilicky — level up knowing Rollout",

  Koffing:"Weezing — Lv. 35",

  Rhyhorn:"Rhydon — Lv. 42",
  Rhydon:"Rhyperior — trade holding Protector",

  Chansey:"Blissey — high friendship",

  Tangela:"Tangrowth — level up knowing Ancient Power",

  Horsea:"Seadra — Lv. 32",
  Seadra:"Kingdra — trade holding Dragon Scale",

  Goldeen:"Seaking — Lv. 33",
  Staryu:"Starmie — Water Stone",

  Scyther:"Scizor — trade holding Metal Coat",

  Electabuzz:"Electivire — trade holding Electirizer",
  Magmar:"Magmortar — trade holding Magmarizer",

  Magikarp:"Gyarados — Lv. 20",

  Eevee:"Vaporeon — Water Stone; Jolteon — Thunder Stone; Flareon — Fire Stone; Espeon — high friendship during day; Umbreon — high friendship at night; Leafeon — level near Moss Rock in Petalburg Woods; Glaceon — level near Ice Rock in Shoal Cave; Sylveon — level knowing a Fairy-type move with at least 2 Pokémon-Amie affection hearts",

  Porygon:"Porygon2 — trade holding Upgrade",
  Porygon2:"Porygon-Z — trade holding Dubious Disc",

  Omanyte:"Omastar — Lv. 40",
  Kabuto:"Kabutops — Lv. 40",

  Dratini:"Dragonair — Lv. 30",
  Dragonair:"Dragonite — Lv. 55",


  // =======================================================
  // GENERATION II / JOHTO SPECIES
  // =======================================================

  Chikorita:"Bayleef — Lv. 16",
  Bayleef:"Meganium — Lv. 32",

  Cyndaquil:"Quilava — Lv. 14",
  Quilava:"Typhlosion — Lv. 36",

  Totodile:"Croconaw — Lv. 18",
  Croconaw:"Feraligatr — Lv. 30",

  Sentret:"Furret — Lv. 15",
  Hoothoot:"Noctowl — Lv. 20",
  Ledyba:"Ledian — Lv. 18",
  Spinarak:"Ariados — Lv. 22",

  Chinchou:"Lanturn — Lv. 27",

  Pichu:"Pikachu — high friendship",
  Cleffa:"Clefairy — high friendship",
  Igglybuff:"Jigglypuff — high friendship",

  Togepi:"Togetic — high friendship",
  Togetic:"Togekiss — Shiny Stone",

  Natu:"Xatu — Lv. 25",

  Mareep:"Flaaffy — Lv. 15",
  Flaaffy:"Ampharos — Lv. 30",

  Marill:"Azumarill — Lv. 18",

  Hoppip:"Skiploom — Lv. 18",
  Skiploom:"Jumpluff — Lv. 27",

  Aipom:"Ambipom — level up knowing Double Hit",

  Sunkern:"Sunflora — Sun Stone",

  Yanma:"Yanmega — level up knowing Ancient Power",

  Wooper:"Quagsire — Lv. 20",

  Murkrow:"Honchkrow — Dusk Stone",
  Misdreavus:"Mismagius — Dusk Stone",

  Pineco:"Forretress — Lv. 31",

  Gligar:"Gliscor — level up holding Razor Fang at night",

  Snubbull:"Granbull — Lv. 23",

  Sneasel:"Weavile — level up holding Razor Claw at night",

  Teddiursa:"Ursaring — Lv. 30",

  Slugma:"Magcargo — Lv. 38",

  Swinub:"Piloswine — Lv. 33",
  Piloswine:"Mamoswine — level up knowing Ancient Power",

  Remoraid:"Octillery — Lv. 25",

  Houndour:"Houndoom — Lv. 24",

  Phanpy:"Donphan — Lv. 25",

  Tyrogue:"Hitmonlee — Lv. 20 if Attack > Defense; Hitmonchan — Lv. 20 if Attack < Defense; Hitmontop — Lv. 20 if Attack = Defense",

  Smoochum:"Jynx — Lv. 30",
  Elekid:"Electabuzz — Lv. 30",
  Magby:"Magmar — Lv. 30",

  Larvitar:"Pupitar — Lv. 30",
  Pupitar:"Tyranitar — Lv. 55",


  // =======================================================
  // GENERATION III / HOENN SPECIES
  // =======================================================

  Treecko:"Grovyle — Lv. 16",
  Grovyle:"Sceptile — Lv. 36",

  Torchic:"Combusken — Lv. 16",
  Combusken:"Blaziken — Lv. 36",

  Mudkip:"Marshtomp — Lv. 16",
  Marshtomp:"Swampert — Lv. 36",

  Poochyena:"Mightyena — Lv. 18",
  Zigzagoon:"Linoone — Lv. 20",

  Wurmple:"Silcoon or Cascoon — Lv. 7; result is determined by Wurmple's hidden personality value",
  Silcoon:"Beautifly — Lv. 10",
  Cascoon:"Dustox — Lv. 10",

  Lotad:"Lombre — Lv. 14",
  Lombre:"Ludicolo — Water Stone",

  Seedot:"Nuzleaf — Lv. 14",
  Nuzleaf:"Shiftry — Leaf Stone",

  Taillow:"Swellow — Lv. 22",
  Wingull:"Pelipper — Lv. 25",

  Ralts:"Kirlia — Lv. 20",
  Kirlia:"Gardevoir — Lv. 30; or Gallade — Dawn Stone if male",

  Surskit:"Masquerain — Lv. 22",

  Shroomish:"Breloom — Lv. 23",

  Slakoth:"Vigoroth — Lv. 18",
  Vigoroth:"Slaking — Lv. 36",

  Nincada:"Ninjask — Lv. 20; Shedinja also appears if the party has an empty slot and you have a spare Poké Ball",

  Whismur:"Loudred — Lv. 20",
  Loudred:"Exploud — Lv. 40",

  Makuhita:"Hariyama — Lv. 24",

  Azurill:"Marill — high friendship",

  Nosepass:"Probopass — level up in New Mauville",

  Skitty:"Delcatty — Moon Stone",

  Aron:"Lairon — Lv. 32",
  Lairon:"Aggron — Lv. 42",

  Meditite:"Medicham — Lv. 37",

  Electrike:"Manectric — Lv. 26",

  Roselia:"Roserade — Shiny Stone",

  Gulpin:"Swalot — Lv. 26",

  Carvanha:"Sharpedo — Lv. 30",

  Wailmer:"Wailord — Lv. 40",

  Numel:"Camerupt — Lv. 33",

  Spoink:"Grumpig — Lv. 32",

  Trapinch:"Vibrava — Lv. 35",
  Vibrava:"Flygon — Lv. 45",

  Cacnea:"Cacturne — Lv. 32",

  Swablu:"Altaria — Lv. 35",

  Barboach:"Whiscash — Lv. 30",

  Corphish:"Crawdaunt — Lv. 30",

  Baltoy:"Claydol — Lv. 36",

  Lileep:"Cradily — Lv. 40",
  Anorith:"Armaldo — Lv. 40",

  Feebas:"Milotic — level up with Beauty at 170+; or trade holding Prism Scale",

  Shuppet:"Banette — Lv. 37",

  Duskull:"Dusclops — Lv. 37",
  Dusclops:"Dusknoir — trade holding Reaper Cloth",

  Wynaut:"Wobbuffet — Lv. 15",

  Snorunt:"Glalie — Lv. 42; or Froslass — Dawn Stone if female",

  Spheal:"Sealeo — Lv. 32",
  Sealeo:"Walrein — Lv. 44",

  Clamperl:"Huntail — trade holding Deep Sea Tooth; or Gorebyss — trade holding Deep Sea Scale",

  Bagon:"Shelgon — Lv. 30",
  Shelgon:"Salamence — Lv. 50",

  Beldum:"Metang — Lv. 20",
  Metang:"Metagross — Lv. 45",


  // =======================================================
  // GENERATION IV / SINNOH SPECIES
  // =======================================================

  Turtwig:"Grotle — Lv. 18",
  Grotle:"Torterra — Lv. 32",

  Chimchar:"Monferno — Lv. 14",
  Monferno:"Infernape — Lv. 36",

  Piplup:"Prinplup — Lv. 16",
  Prinplup:"Empoleon — Lv. 36",

  Starly:"Staravia — Lv. 14",
  Staravia:"Staraptor — Lv. 34",

  Bidoof:"Bibarel — Lv. 15",

  Kricketot:"Kricketune — Lv. 10",

  Shinx:"Luxio — Lv. 15",
  Luxio:"Luxray — Lv. 30",

  Budew:"Roselia — high friendship during day",

  Cranidos:"Rampardos — Lv. 30",
  Shieldon:"Bastiodon — Lv. 30",

  Burmy:"Wormadam — Lv. 20 if female; or Mothim — Lv. 20 if male",

  Combee:"Vespiquen — Lv. 21 if female",

  Buizel:"Floatzel — Lv. 26",

  Cherubi:"Cherrim — Lv. 25",

  Shellos:"Gastrodon — Lv. 30",

  Drifloon:"Drifblim — Lv. 28",

  Buneary:"Lopunny — high friendship",

  Glameow:"Purugly — Lv. 38",

  Chingling:"Chimecho — high friendship at night",

  Stunky:"Skuntank — Lv. 34",

  Bronzor:"Bronzong — Lv. 33",

  Bonsly:"Sudowoodo — level up knowing Mimic",

  "Mime Jr.":"Mr. Mime — level up knowing Mimic",

  Happiny:"Chansey — level up holding Oval Stone during day",

  Gible:"Gabite — Lv. 24",
  Gabite:"Garchomp — Lv. 48",

  Munchlax:"Snorlax — high friendship",

  Riolu:"Lucario — high friendship during day",

  Hippopotas:"Hippowdon — Lv. 34",

  Skorupi:"Drapion — Lv. 40",

  Croagunk:"Toxicroak — Lv. 37",

  Finneon:"Lumineon — Lv. 31",

  Mantyke:"Mantine — level up with Remoraid in party",

  Snover:"Abomasnow — Lv. 40",


  // =======================================================
  // GENERATION V / UNOVA SPECIES
  // =======================================================

  Snivy:"Servine — Lv. 17",
  Servine:"Serperior — Lv. 36",

  Tepig:"Pignite — Lv. 17",
  Pignite:"Emboar — Lv. 36",

  Oshawott:"Dewott — Lv. 17",
  Dewott:"Samurott — Lv. 36",

  Patrat:"Watchog — Lv. 20",

  Lillipup:"Herdier — Lv. 16",
  Herdier:"Stoutland — Lv. 32",

  Purrloin:"Liepard — Lv. 20",

  Pansage:"Simisage — Leaf Stone",
  Pansear:"Simisear — Fire Stone",
  Panpour:"Simipour — Water Stone",

  Munna:"Musharna — Moon Stone",

  Pidove:"Tranquill — Lv. 21",
  Tranquill:"Unfezant — Lv. 32",

  Blitzle:"Zebstrika — Lv. 27",

  Roggenrola:"Boldore — Lv. 25",
  Boldore:"Gigalith — trade",

  Woobat:"Swoobat — high friendship",

  Drilbur:"Excadrill — Lv. 31",

  Timburr:"Gurdurr — Lv. 25",
  Gurdurr:"Conkeldurr — trade",

  Tympole:"Palpitoad — Lv. 25",
  Palpitoad:"Seismitoad — Lv. 36",

  Sewaddle:"Swadloon — Lv. 20",
  Swadloon:"Leavanny — high friendship",

  Venipede:"Whirlipede — Lv. 22",
  Whirlipede:"Scolipede — Lv. 30",

  Cottonee:"Whimsicott — Sun Stone",
  Petilil:"Lilligant — Sun Stone",

  Sandile:"Krokorok — Lv. 29",
  Krokorok:"Krookodile — Lv. 40",

  Darumaka:"Darmanitan — Lv. 35",

  Dwebble:"Crustle — Lv. 34",

  Scraggy:"Scrafty — Lv. 39",

  Yamask:"Cofagrigus — Lv. 34",

  Tirtouga:"Carracosta — Lv. 37",
  Archen:"Archeops — Lv. 37",

  Trubbish:"Garbodor — Lv. 36",

  Zorua:"Zoroark — Lv. 30",

  Minccino:"Cinccino — Shiny Stone",

  Gothita:"Gothorita — Lv. 32",
  Gothorita:"Gothitelle — Lv. 41",

  Solosis:"Duosion — Lv. 32",
  Duosion:"Reuniclus — Lv. 41",

  Ducklett:"Swanna — Lv. 35",

  Vanillite:"Vanillish — Lv. 35",
  Vanillish:"Vanilluxe — Lv. 47",

  Deerling:"Sawsbuck — Lv. 34",

  Karrablast:"Escavalier — trade specifically for Shelmet",

  Foongus:"Amoonguss — Lv. 39",

  Frillish:"Jellicent — Lv. 40",

  Joltik:"Galvantula — Lv. 36",

  Ferroseed:"Ferrothorn — Lv. 40",

  Klink:"Klang — Lv. 38",
  Klang:"Klinklang — Lv. 49",

  Tynamo:"Eelektrik — Lv. 39",
  Eelektrik:"Eelektross — Thunder Stone",

  Elgyem:"Beheeyem — Lv. 42",

  Litwick:"Lampent — Lv. 41",
  Lampent:"Chandelure — Dusk Stone",

  Axew:"Fraxure — Lv. 38",
  Fraxure:"Haxorus — Lv. 48",

  Cubchoo:"Beartic — Lv. 37",

  Shelmet:"Accelgor — trade specifically for Karrablast",

  Mienfoo:"Mienshao — Lv. 50",

  Golett:"Golurk — Lv. 43",

  Pawniard:"Bisharp — Lv. 52",

  Rufflet:"Braviary — Lv. 54",
  Vullaby:"Mandibuzz — Lv. 54",

  Deino:"Zweilous — Lv. 50",
  Zweilous:"Hydreigon — Lv. 64",

  Larvesta:"Volcarona — Lv. 59",


  // =======================================================
  // GENERATION VI / KALOS SPECIES
  // =======================================================

  Chespin:"Quilladin — Lv. 16",
  Quilladin:"Chesnaught — Lv. 36",

  Fennekin:"Braixen — Lv. 16",
  Braixen:"Delphox — Lv. 36",

  Froakie:"Frogadier — Lv. 16",
  Frogadier:"Greninja — Lv. 36",

  Bunnelby:"Diggersby — Lv. 20",

  Fletchling:"Fletchinder — Lv. 17",
  Fletchinder:"Talonflame — Lv. 35",

  Scatterbug:"Spewpa — Lv. 9",
  Spewpa:"Vivillon — Lv. 12",

  Litleo:"Pyroar — Lv. 35",

  "Flabébé":"Floette — Lv. 19",
  Floette:"Florges — Shiny Stone",

  Skiddo:"Gogoat — Lv. 32",

  Pancham:"Pangoro — Lv. 32+ with a Dark-type Pokémon in party",

  Espurr:"Meowstic — Lv. 25",

  Honedge:"Doublade — Lv. 35",
  Doublade:"Aegislash — Dusk Stone",

  Spritzee:"Aromatisse — trade holding Sachet",

  Swirlix:"Slurpuff — trade holding Whipped Dream",

  Inkay:"Malamar — Lv. 30+ while the Nintendo 3DS is held upside down",

  Binacle:"Barbaracle — Lv. 39",

  Skrelp:"Dragalge — Lv. 48",

  Clauncher:"Clawitzer — Lv. 37",

  Helioptile:"Heliolisk — Sun Stone",

  Tyrunt:"Tyrantrum — Lv. 39+ during day",

  Amaura:"Aurorus — Lv. 39+ at night",

  Goomy:"Sliggoo — Lv. 40",
  Sliggoo:"Goodra — Lv. 50+ while it is raining in the overworld",

  Phantump:"Trevenant — trade",

  Pumpkaboo:"Gourgeist — trade",

  Bergmite:"Avalugg — Lv. 37",

  Noibat:"Noivern — Lv. 48"
};

// =========================================================
// ORAS / EVOLUTION FAMILY GRAPH
// =========================================================

function extractEvolutionTargets(description) {
  if (!description) return [];

  const targets = [];

  description.split(";").forEach(rawClause => {
    const clause = rawClause.trim();

    if (!clause.includes("—")) return;

    const targetText = clause
      .split("—")[0]
      .trim()
      .replace(/^or\s+/i, "");

    targetText
      .split(/\s+or\s+/i)
      .map(name => name.trim())
      .forEach(name => {
        const canonical =
          POKEMON_LOOKUP.get(name.toLowerCase());

        if (canonical) {
          targets.push(canonical);
        }
      });
  });

  return [...new Set(targets)];
}


function buildEvolutionGraph() {
  const graph = new Map();

  POKEMON_721.forEach(name => {
    graph.set(name, new Set());
  });

  Object.entries(ORAS_EVOLUTIONS)
    .forEach(([source, description]) => {
      if (!graph.has(source)) return;

      const targets =
        extractEvolutionTargets(description);

      targets.forEach(target => {
        if (!graph.has(target)) return;

        graph.get(source).add(target);
        graph.get(target).add(source);
      });
    });

  /*
    Shedinja is a special branch from Nincada and
    isn't cleanly represented by the human-readable
    evolution text.
  */
  graph.get("Nincada")?.add("Shedinja");
  graph.get("Shedinja")?.add("Nincada");

  return graph;
}


const ORAS_EVOLUTION_GRAPH =
  buildEvolutionGraph();


function pokemonEvolutionFamily(name) {
  const canonical =
    POKEMON_LOOKUP.get(
      String(name || "").toLowerCase()
    );

  if (!canonical) return [];

  const family = new Set();
  const queue = [canonical];

  while (queue.length) {
    const current = queue.shift();

    if (family.has(current)) continue;

    family.add(current);

    const relatives =
      ORAS_EVOLUTION_GRAPH.get(current)
      || new Set();

    relatives.forEach(relative => {
      if (!family.has(relative)) {
        queue.push(relative);
      }
    });
  }

  return POKEMON_721.filter(species =>
    family.has(species)
  );
}

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

function pokemonEvolutionOptions(name) {
  const description =
    ORAS_EVOLUTIONS[name];

  if (!description) return [];

  const options = [];

  description
    .split(";")
    .forEach(rawClause => {
      const clause =
        rawClause.trim();

      if (!clause) return;

      /*
        Normal branch:
        "Gardevoir — Lv. 30"
        "or Gallade — Dawn Stone if male"
      */
      if (clause.includes("—")) {
        const parts =
          clause.split("—");

        const targetText =
          parts.shift()
            .trim()
            .replace(/^or\s+/i, "");

        const condition =
          parts.join("—").trim();

        targetText
          .split(/\s+or\s+/i)
          .map(value => value.trim())
          .forEach(target => {
            const canonical =
              POKEMON_LOOKUP.get(
                target.toLowerCase()
              );

            if (!canonical) return;

            options.push({
              species:canonical,
              condition
            });
          });

        return;
      }


      /*
        Nincada's Shedinja branch is written as
        descriptive text instead of Target — Condition.
      */
      if (
        name === "Nincada" &&
        clause.toLowerCase()
          .startsWith("shedinja also appears")
      ) {
        options.push({
          species:"Shedinja",
          condition:
            "Evolve Nincada at Lv. 20 with an empty party slot and a spare Poké Ball"
        });
      }
    });

  return options;
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
