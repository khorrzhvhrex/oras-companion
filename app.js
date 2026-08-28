const APP_KEY = "alphaSapphireCompanionV1";
const BACKUP_KEY = "alphaSapphireCompanionPreImport";
const APP_VERSION = 2;

const BENCHMARKS = [{"title": "Welcome to Hoenn", "summary": "Littleroot, Oldale, Routes 101, 102 and 103, then reach Petalburg. Establish your catch-everything rhythm and learn DexNav.", "objectives": ["Explore Littleroot and Oldale", "Clear current catches on Route 101", "Clear current catches on Route 102", "Clear current catches on Route 103", "Reach Petalburg City"]}, {"title": "Stone Badge", "summary": "Explore Route 104 and Petalburg Woods, reach Rustboro, then defeat Roxanne.", "objectives": ["Clear current catches on Route 104", "Clear current catches in Petalburg Woods", "Explore Rustboro City", "Defeat Roxanne", "Note Cut-accessible revisits"]}, {"title": "Devon Rescue", "summary": "Handle the Devon trouble on Route 116 and at Rusturf Tunnel before heading south.", "objectives": ["Explore Route 116", "Clear current catches on Route 116", "Visit Rusturf Tunnel", "Complete Devon rescue story"]}, {"title": "Knuckle Badge", "summary": "Travel to Dewford, explore Granite Cave, and defeat Brawly.", "objectives": ["Explore Dewford Town", "Explore Route 106", "Clear current catches in Granite Cave", "Defeat Brawly", "Flag Granite Cave bike revisit"]}, {"title": "Slateport Arrival", "summary": "Make landfall on Route 109, explore Slateport and complete the Oceanic Museum story.", "objectives": ["Explore Route 109", "Explore Slateport City", "Complete Oceanic Museum story", "Try a Contest Spectacular if desired"]}, {"title": "Road to Mauville", "summary": "Push through Route 110, sample the Trick House and reach Mauville.", "objectives": ["Clear current catches on Route 110", "Complete current Trick House challenge", "Reach Mauville City", "Handle rival battle"]}, {"title": "Dynamo Badge", "summary": "Explore Mauville, choose a bike and defeat Wattson.", "objectives": ["Explore Mauville City", "Choose a bicycle", "Defeat Wattson", "Note Rock Smash revisits", "Note Cycling Road access"]}, {"title": "Rusturf Reopened", "summary": "Explore Route 117 and Verdanturf, then use new field access to finish old business.", "objectives": ["Explore Route 117", "Explore Verdanturf Town", "Revisit Route 116", "Revisit Rusturf Tunnel"]}, {"title": "Northern Hoenn", "summary": "Climb north through Routes 111–113 and Fiery Path toward Fallarbor.", "objectives": ["Explore Route 111", "Explore Route 112", "Explore Fiery Path", "Explore Route 113", "Flag desert for later"]}, {"title": "Meteor Trouble", "summary": "Explore Fallarbor, Route 114 and Meteor Falls as Team Aqua's plan unfolds.", "objectives": ["Explore Fallarbor Town", "Explore Route 114", "Explore Meteor Falls", "Flag deeper Meteor Falls for later"]}, {"title": "Heat Badge", "summary": "Resolve Mt. Chimney, descend Jagged Pass and defeat Flannery in Lavaridge.", "objectives": ["Complete Mt. Chimney story", "Explore Jagged Pass", "Explore Lavaridge Town", "Defeat Flannery", "Note Strength revisits"]}, {"title": "Desert Expedition", "summary": "Use your new access to sweep Route 111's desert and claim a fossil.", "objectives": ["Explore Route 111 Desert", "Clear current desert catches", "Choose a fossil"]}, {"title": "Balance Badge", "summary": "Return to Petalburg and defeat Norman. Surf changes the entire map afterward.", "objectives": ["Return to Petalburg Gym", "Defeat Norman", "Obtain Surf access", "Open Surf revisit queue"]}, {"title": "Surf Cleanup I", "summary": "Optional cleanup pass through earlier routes and water before pushing east.", "objectives": ["Review unlocked Surf revisits", "Catch newly available water species", "Collect worthwhile Surf-access items", "Continue when satisfied"]}, {"title": "Southern Island", "summary": "Cross Route 118 and complete the Southern Island story milestone.", "objectives": ["Explore Route 118", "Clear current catches on Route 118", "Complete Southern Island story", "Register Mega Evolution milestone"]}, {"title": "Weather Crisis", "summary": "Climb Route 119, explore the Weather Institute and keep moving toward Fortree.", "objectives": ["Explore Route 119", "Clear current catches on Route 119", "Complete Weather Institute story"]}, {"title": "Feather Badge", "summary": "Explore Fortree and defeat Winona. Fly makes backtracking painless.", "objectives": ["Explore Fortree City", "Defeat Winona", "Unlock Fly convenience", "Review pending revisits"]}, {"title": "Eastern Hoenn", "summary": "Explore Routes 120–123, Safari Zone and Mt. Pyre.", "objectives": ["Explore Route 120", "Explore Route 121", "Visit Safari Zone", "Explore Mt. Pyre", "Explore Route 123"]}, {"title": "Lilycove Crisis", "summary": "Handle Lilycove, the Slateport Harbor event and Team Aqua Hideout.", "objectives": ["Explore Lilycove City", "Complete Slateport Harbor story", "Clear Team Aqua Hideout", "Finish any desired hideout pickups"]}, {"title": "Mind Badge", "summary": "Cross Route 124, explore Mossdeep and defeat Tate & Liza.", "objectives": ["Explore Route 124", "Explore Mossdeep City", "Defeat Tate & Liza", "Unlock Dive access"]}, {"title": "Shoal & Sea", "summary": "Explore Route 125, Shoal Cave and the waters around Routes 126–127.", "objectives": ["Explore Route 125", "Explore Shoal Cave", "Explore Route 126", "Explore Route 127", "Flag tide-dependent Shoal cleanup"]}, {"title": "Beneath Hoenn", "summary": "Use Dive, explore underwater routes and descend into Seafloor Cavern.", "objectives": ["Explore underwater routes", "Explore Route 128", "Clear current underwater catches", "Complete Seafloor Cavern story"]}, {"title": "Primal Kyogre", "summary": "Reach Sootopolis, enter the Cave of Origin and resolve the primal crisis.", "objectives": ["Explore Sootopolis City", "Enter Cave of Origin", "Resolve Kyogre encounter", "Unlock Soaring", "Flag expanded Dex encounters"]}, {"title": "Rain Badge", "summary": "Challenge Wallace and unlock Waterfall for essentially full field mobility.", "objectives": ["Defeat Wallace", "Unlock Waterfall access", "Review final field-move revisits"]}, {"title": "Expanded Hoenn Cleanup", "summary": "Old routes can now contain expanded DexNav encounters. Treat this as bonus completion, not erased progress.", "objectives": ["Review expanded encounter flags", "Catch desired new DexNav species", "Preserve original route-clear status"]}, {"title": "Mauville Secrets", "summary": "Clear late optional content around Mauville and New Mauville.", "objectives": ["Explore Mauville Hills", "Explore New Mauville", "Clear any related optional objectives"]}, {"title": "Western Sea", "summary": "Explore Routes 129–134 and Pacifidlog, including the current-heavy western waters.", "objectives": ["Explore Routes 129–134", "Explore Pacifidlog Town", "Clear current catches", "Note puzzle/legendary requirements"]}, {"title": "Regi Expedition", "summary": "Tackle the Sealed Chamber setup and the Hoenn Regi trio when you're ready.", "objectives": ["Complete Sealed Chamber setup", "Encounter Regirock", "Encounter Regice", "Encounter Registeel"]}, {"title": "Hoenn Sidequest Sweep", "summary": "Sea Mauville, Scorched Slab and unfinished optional areas before the League.", "objectives": ["Explore Sea Mauville", "Explore Scorched Slab", "Clear remaining optional routes/caves", "Review outstanding revisits"]}, {"title": "Victory Road", "summary": "Reach Ever Grande and clear Victory Road.", "objectives": ["Reach Ever Grande City", "Clear Victory Road", "Finish desired pre-League cleanup"]}, {"title": "Champion of Hoenn", "summary": "Take on the Elite Four and become Champion.", "objectives": ["Defeat Elite Four", "Defeat Champion", "Enter Hall of Fame"]}, {"title": "Delta Episode I", "summary": "Begin the postgame story and follow the trail across Hoenn.", "objectives": ["Begin Delta Episode", "Complete early Delta story beats", "Track required revisits"]}, {"title": "Delta Episode II", "summary": "Push through the Space Center, Aqua Hideout and final lead-up to Sky Pillar.", "objectives": ["Complete Space Center events", "Complete Aqua Hideout revisit", "Reach Sky Pillar"]}, {"title": "Delta Finale", "summary": "Finish the Delta Episode with Rayquaza and Deoxys.", "objectives": ["Complete Sky Pillar", "Resolve Rayquaza encounter", "Resolve Deoxys encounter", "Finish Delta Episode"]}, {"title": "Battle Resort", "summary": "Visit the Battle Resort and unlock the dedicated endgame training loop.", "objectives": ["Travel by S.S. Tidal", "Explore Battle Resort", "Register Battle Maison", "Register second Day Care"]}, {"title": "Elite Four Round 2", "summary": "Optional upgraded League rematch.", "objectives": ["Prepare postgame team", "Complete upgraded Elite Four rematch"]}, {"title": "Legendary Hunt", "summary": "Round up remaining static, soaring and Mirage Spot legendaries.", "objectives": ["Track desired legendary targets", "Complete available legendary encounters", "Leave time-gated Mirage targets as ongoing"]}, {"title": "Hoenn Dex", "summary": "Complete the regional Pokédex as a major collection milestone.", "objectives": ["Complete Hoenn Dex", "Claim regional completion reward"]}, {"title": "National Dex", "summary": "Finish the required National Dex entries and earn the Shiny Charm.", "objectives": ["Complete required National Dex entries", "Earn Shiny Charm", "Verify Mythicals separately if desired"]}, {"title": "Endgame Mastery", "summary": "Open-ended victory lap: Contests, Maison, breeding, shiny hunts, Secret Bases and anything else you enjoy.", "objectives": ["Choose personal endgame goals", "Track optional mastery projects", "Declare the save complete when it feels complete"]}];
const BENCHMARK_AREAS = {
  0:["Littleroot Town","Route 101","Oldale Town","Route 103","Route 102","Petalburg City"],
  1:["Route 104 — South","Petalburg Woods","Route 104 — North","Rustboro City","Rustboro Gym"],
  2:["Route 116","Rusturf Tunnel","Devon Corporation"],
  3:["Route 105","Dewford Town","Route 106","Granite Cave","Dewford Gym"],
  4:["Route 107","Route 108","Route 109","Slateport City","Oceanic Museum","Contest Hall"],
  5:["Route 110","Trick House","Mauville City"],
  6:["Mauville Gym","Cycling Road"],
  7:["Route 117","Verdanturf Town","Rusturf Tunnel — Rock Smash","Route 116 — East"],
  8:["Route 111 — South","Route 112","Fiery Path","Route 111 — North","Route 113"],
  9:["Fallarbor Town","Route 114","Meteor Falls"],
  10:["Mt. Chimney","Jagged Pass","Lavaridge Town","Lavaridge Gym"],
  11:["Route 111 Desert"],
  12:["Petalburg City","Petalburg Gym"],
  13:["Route 103 — Surf","Route 104 — Surf","Route 105","Route 106","Route 107","Route 108","Route 109","Route 115","Sea Mauville"],
  14:["Route 118","Southern Island"],
  15:["Route 119","Weather Institute"],
  16:["Fortree City","Fortree Gym"],
  17:["Route 120","Route 121","Safari Zone","Route 122","Mt. Pyre","Route 123"],
  18:["Lilycove City","Slateport Harbor","Team Aqua Hideout"],
  19:["Route 124","Mossdeep City","Mossdeep Space Center","Mossdeep Gym"],
  20:["Route 125","Shoal Cave","Route 126","Route 127"],
  21:["Underwater Hoenn","Route 128","Seafloor Cavern"],
  22:["Sootopolis City","Cave of Origin"],
  23:["Sootopolis Gym"],
  24:["Expanded DexNav — Hoenn-wide"],
  25:["Mauville Hills","New Mauville"],
  26:["Route 129","Route 130","Route 131","Pacifidlog Town","Route 132","Route 133","Route 134"],
  27:["Sealed Chamber","Desert Ruins","Island Cave","Ancient Tomb"],
  28:["Sea Mauville","Scorched Slab","Shoal Cave — Low Tide","Meteor Falls — Waterfall"],
  29:["Ever Grande City","Victory Road"],
  30:["Pokémon League"],
  31:["Littleroot Town","Petalburg City","Granite Cave","Mossdeep City","Meteor Falls","Rustboro City"],
  32:["Mossdeep Space Center","Team Aqua Hideout","Sootopolis City","Sky Pillar"],
  33:["Sky Pillar","Space"],
  34:["S.S. Tidal","Battle Resort"],
  35:["Pokémon League"],
  36:["Soaring in the Sky","Mirage Island","Mirage Forest","Mirage Cave","Mirage Mountain","Crescent Isle","Nameless Cavern","Pathless Plain","Trackless Forest","Fabled Cave","Gnarled Den"],
  37:["Hoenn Region"],
  38:["National Pokédex"],
  39:["Battle Resort","Battle Maison","Contest Spectaculars","Super Secret Bases","Mirage Spots"]
};
const REVISITS = [{"title": "Petalburg Woods / Route 104", "unlock": 1, "trigger": "Cut access", "note": "Check previously blocked Cut paths.", "status": "locked"}, {"title": "Granite Cave", "unlock": 6, "trigger": "Bicycle", "note": "Return for bike-accessible sections.", "status": "locked"}, {"title": "Rusturf Tunnel", "unlock": 6, "trigger": "Rock Smash", "note": "Finish previously blocked tunnel access.", "status": "locked"}, {"title": "Fiery Path / earlier Strength blocks", "unlock": 10, "trigger": "Strength", "note": "Review Strength-accessible side paths.", "status": "locked"}, {"title": "Early-route Surf sweep", "unlock": 12, "trigger": "Surf", "note": "Water encounters, items and optional areas open broadly.", "status": "locked"}, {"title": "Route 115 / western Surf access", "unlock": 12, "trigger": "Surf", "note": "Reach previously inaccessible northern/water sections.", "status": "locked"}, {"title": "Fly convenience sweep", "unlock": 16, "trigger": "Fly", "note": "Optional cleanup is now much faster.", "status": "locked"}, {"title": "Underwater Hoenn", "unlock": 19, "trigger": "Dive", "note": "Dive spots across eastern/southern Hoenn become explorable.", "status": "locked"}, {"title": "Expanded DexNav encounters", "unlock": 22, "trigger": "Primal crisis resolved", "note": "Old routes gain additional non-Hoenn DexNav encounters.", "status": "locked"}, {"title": "Waterfall cleanup", "unlock": 23, "trigger": "Waterfall", "note": "Final field-move gated areas become accessible.", "status": "locked"}];
const ROUTES = [{"id": "r101", "name": "Route 101", "unlock": 0, "encounters": {"walk": ["Zigzagoon", "Wurmple", "Poochyena"], "postdex": ["Lillipup", "Zorua", "Sewaddle"]}}, {"id": "r102", "name": "Route 102", "unlock": 0, "encounters": {"walk": ["Zigzagoon", "Wurmple", "Poochyena", "Lotad", "Ralts", "Surskit"], "surf": ["Marill", "Azumarill", "Surskit", "Masquerain"], "old": ["Magikarp", "Goldeen"], "good": ["Magikarp", "Goldeen", "Corphish"], "super": ["Corphish"], "postdex": ["Lillipup", "Tympole", "Gothita"]}}, {"id": "r103", "name": "Route 103", "unlock": 0, "encounters": {"walk": ["Poochyena", "Zigzagoon", "Wingull"], "surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "postdex": ["Shellos", "Chatot", "Lillipup"]}}, {"id": "r104", "name": "Route 104", "unlock": 1, "encounters": {"walk": ["Zigzagoon", "Wurmple", "Wingull", "Taillow"], "surf": ["Wingull", "Pelipper"], "old": ["Magikarp"], "good": ["Magikarp"], "super": ["Magikarp"], "postdex": ["Chatot", "Pidove", "Sewaddle"]}}, {"id": "r105", "name": "Route 105", "unlock": 13, "encounters": {"surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "postdex": ["Krabby", "Frillish", "Clauncher"]}}, {"id": "r106", "name": "Route 106", "unlock": 3, "encounters": {"surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "postdex": ["Krabby", "Frillish", "Clauncher"]}}, {"id": "r107", "name": "Route 107", "unlock": 13, "encounters": {"surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "dive": ["Chinchou", "Clamperl", "Lanturn", "Relicanth"], "postdex": ["Krabby", "Frillish", "Clauncher"]}}, {"id": "r108", "name": "Route 108", "unlock": 13, "encounters": {"surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "postdex": ["Krabby", "Frillish", "Clauncher"]}}, {"id": "r109", "name": "Route 109", "unlock": 4, "encounters": {"surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "postdex": ["Krabby", "Frillish", "Clauncher"]}}, {"id": "r110", "name": "Route 110", "unlock": 5, "encounters": {"walk": ["Electrike", "Plusle", "Oddish", "Zigzagoon", "Wingull", "Gulpin", "Voltorb"], "horde": ["Minun", "Magnemite", "Plusle"], "surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "postdex": ["Shellos", "Chatot", "Trubbish"]}}, {"id": "r111", "name": "Route 111", "unlock": 8, "encounters": {"surf": ["Marill", "Azumarill", "Surskit", "Masquerain"], "old": ["Magikarp", "Goldeen"], "good": ["Magikarp", "Goldeen", "Barboach"], "super": ["Barboach"]}}, {"id": "r111d", "name": "Route 111 Desert", "unlock": 11, "requires": "goggles", "encounters": {"walk": ["Sandshrew", "Trapinch", "Cacnea", "Baltoy"], "postdex": ["Gible", "Sandile", "Dwebble"]}}, {"id": "r112", "name": "Route 112", "unlock": 8, "encounters": {"walk": ["Numel", "Machop"]}}, {"id": "r113", "name": "Route 113", "unlock": 8, "encounters": {"walk": ["Spinda", "Sandshrew", "Skarmory"], "postdex": ["Scraggy", "Bouffalant", "Klefki"]}}, {"id": "r114", "name": "Route 114", "unlock": 9, "encounters": {"walk": ["Lombre", "Swablu", "Seviper", "Surskit"], "horde": ["Lotad"], "rock": ["Geodude"], "surf": ["Marill", "Azumarill", "Surskit", "Masquerain"], "old": ["Magikarp", "Goldeen"], "good": ["Magikarp", "Goldeen", "Barboach"], "super": ["Barboach"], "postdex": ["Misdreavus", "Skorupi", "Tympole"]}}, {"id": "r115", "name": "Route 115", "unlock": 9, "requires": "surf", "encounters": {"walk": ["Taillow", "Swablu", "Jigglypuff", "Wingull"], "surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "postdex": ["Clefairy", "Misdreavus", "Pidove"]}}, {"id": "r116", "name": "Route 116", "unlock": 2, "encounters": {"walk": ["Zigzagoon", "Whismur", "Nincada", "Taillow", "Skitty"], "postdex": ["Eevee", "Pidove", "Joltik"]}}, {"id": "r117", "name": "Route 117", "unlock": 7, "encounters": {"walk": ["Zigzagoon", "Volbeat", "Roselia", "Marill", "Oddish", "Illumise", "Surskit"], "surf": ["Marill", "Azumarill", "Surskit", "Masquerain"], "old": ["Magikarp", "Goldeen"], "good": ["Magikarp", "Goldeen", "Corphish"], "super": ["Corphish", "Crawdaunt"], "postdex": ["Rattata", "Tympole", "Deerling"]}}, {"id": "r118", "name": "Route 118", "unlock": 14, "requires": "surf", "encounters": {"walk": ["Linoone", "Electrike", "Wingull", "Pelipper", "Kecleon"], "surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Carvanha"], "super": ["Carvanha", "Sharpedo"], "postdex": ["Raticate", "Aipom", "Luxio"]}}, {"id": "r119", "name": "Route 119", "unlock": 15, "encounters": {"walk": ["Gloom", "Linoone", "Tropius", "Kecleon"], "horde": ["Oddish"], "surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool", "Feebas"], "good": ["Magikarp", "Carvanha", "Feebas"], "super": ["Carvanha", "Sharpedo", "Feebas"]}}, {"id": "r120", "name": "Route 120", "unlock": 17, "encounters": {"walk": ["Gloom", "Linoone", "Tropius", "Kecleon", "Absol"], "horde": ["Oddish", "Marill"], "surf": ["Azumarill", "Surskit", "Masquerain"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Barboach"], "super": ["Barboach"]}}, {"id": "r121", "name": "Route 121", "unlock": 17, "encounters": {"walk": ["Gloom", "Linoone", "Shuppet", "Pelipper", "Kecleon"], "horde": ["Wingull"], "postdex": ["Hypno", "Aipom", "Elgyem"]}}, {"id": "r122", "name": "Route 122", "unlock": 17, "requires": "surf", "encounters": {"surf": ["Tentacool", "Wingull", "Pelipper"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}, {"id": "r123", "name": "Route 123", "unlock": 17, "encounters": {"walk": ["Gloom", "Linoone", "Shuppet", "Pelipper", "Kecleon"], "horde": ["Wingull"], "surf": ["Marill", "Surskit", "Azumarill", "Masquerain"], "old": ["Magikarp", "Goldeen"], "good": ["Magikarp", "Goldeen", "Corphish"], "super": ["Corphish", "Crawdaunt"]}}, {"id": "r124", "name": "Route 124", "unlock": 19, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "dive": ["Chinchou", "Clamperl", "Lanturn", "Relicanth"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}, {"id": "r125", "name": "Route 125", "unlock": 20, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "postdex": ["Seel", "Finneon", "Frillish"]}}, {"id": "r126", "name": "Route 126", "unlock": 21, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "dive": ["Chinchou", "Clamperl", "Lanturn", "Relicanth"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}, {"id": "r127", "name": "Route 127", "unlock": 21, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "dive": ["Chinchou", "Clamperl", "Lanturn", "Relicanth"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}, {"id": "r128", "name": "Route 128", "unlock": 21, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Luvdisc", "Wailmer"], "super": ["Luvdisc", "Wailmer", "Corsola"], "dive": ["Chinchou", "Clamperl", "Lanturn", "Corsola", "Relicanth"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}, {"id": "r129", "name": "Route 129", "unlock": 26, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "dive": ["Chinchou", "Clamperl", "Lanturn", "Relicanth"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}, {"id": "r130", "name": "Route 130", "unlock": 26, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer"], "dive": ["Chinchou", "Clamperl", "Lanturn", "Relicanth"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}, {"id": "r131", "name": "Route 131", "unlock": 26, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer", "Horsea", "Seadra"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}, {"id": "r132", "name": "Route 132", "unlock": 26, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer", "Horsea", "Seadra"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}, {"id": "r133", "name": "Route 133", "unlock": 26, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer", "Horsea", "Seadra"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}, {"id": "r134", "name": "Route 134", "unlock": 26, "requires": "surf", "encounters": {"surf": ["Tentacool", "Pelipper", "Tentacruel"], "old": ["Magikarp", "Tentacool"], "good": ["Magikarp", "Tentacool", "Wailmer"], "super": ["Wailmer", "Horsea", "Seadra"], "postdex": ["Finneon", "Frillish", "Alomomola"]}}];
const EXTRA_AREAS = [
  // EARLY HOENN
  {id:"petalburg-woods",name:"Petalburg Woods",unlock:1,encounters:{walk:["Zigzagoon","Wurmple","Silcoon","Cascoon","Shroomish","Taillow","Slakoth"],horde:["Wurmple","Zigzagoon","Shroomish"],postdex:["Paras","Cottonee","Phantump"]}},
  {id:"rusturf-tunnel",name:"Rusturf Tunnel",unlock:2,encounters:{walk:["Whismur"],horde:["Whismur"]}},
  {id:"granite-cave",name:"Granite Cave",unlock:3,encounters:{walk:["Zubat","Aron","Abra","Makuhita"],bike:["Sableye"],rock:["Geodude","Nosepass"],postdex:["Onix","Timburr","Axew"]}},

  // CENTRAL / NORTHERN HOENN
  {id:"fiery-path",name:"Fiery Path",unlock:8,encounters:{walk:["Numel","Grimer","Slugma","Torkoal","Machop","Koffing"],horde:["Numel","Grimer","Slugma"],postdex:["Diglett","Tyrogue","Roggenrola"]}},
  {id:"meteor-falls",name:"Meteor Falls",unlock:9,encounters:{walk:["Zubat","Lunatone"],horde:["Zubat"],surf:["Zubat","Golbat","Lunatone"],old:["Magikarp","Goldeen"],good:["Magikarp","Goldeen","Barboach"],super:["Barboach","Whiscash"],waterfall:["Bagon"],postdex:["Clefairy","Druddigon","Deino"]}},
  {id:"jagged-pass",name:"Jagged Pass",unlock:10,encounters:{walk:["Machop","Numel","Spoink"],postdex:["Mankey","Ponyta","Tyrogue"]}},

  // EASTERN HOENN
  {id:"safari-zone",name:"Safari Zone",unlock:17,encounters:{walk:["Gloom","Doduo","Psyduck","Pikachu"],acro:["Xatu","Wobbuffet"],mach:["Girafarig"],horde:["Doduo","Oddish","Psyduck"],surf:["Psyduck"],old:["Magikarp","Goldeen"],good:["Magikarp","Goldeen"],super:["Seaking"],postdex:["Kakuna","Pidgeotto","Buneary"]}},
  {id:"mt-pyre",name:"Mt. Pyre",unlock:17,encounters:{walk:["Shuppet","Duskull","Meditite","Vulpix","Wingull","Chimecho"],horde:["Shuppet","Meditite","Vulpix"],postdex:["Growlithe","Bronzor","Elgyem"]}},
  {id:"team-aqua-hideout",name:"Team Aqua Hideout",unlock:18,encounters:{static:["Electrode"]}},
  {id:"new-mauville",name:"New Mauville",unlock:25,encounters:{walk:["Magnemite","Voltorb"],horde:["Magnemite","Voltorb"],static:["Electrode"]}},

  // SHOAL / OCEAN / UNDERWATER
  {id:"shoal-cave",name:"Shoal Cave",unlock:20,encounters:{walk:["Golbat","Spheal"],horde:["Zubat","Spheal"],lowtide:["Sealeo","Snorunt"],rock:["Geodude","Graveler"],postdex:["Dewgong","Delibird","Cubchoo"]}},
  {id:"seafloor-cavern",name:"Seafloor Cavern",unlock:21,requires:"dive",encounters:{walk:["Golbat"],horde:["Zubat"],surf:["Tentacruel","Golbat"],old:["Magikarp","Tentacool"],good:["Magikarp","Tentacool","Wailmer"],super:["Wailmer"]}},

  // SOOTOPOLIS / STORY CLIMAX
  {id:"sootopolis-city",name:"Sootopolis City",unlock:22,requires:"dive",encounters:{surf:["Magikarp"],old:["Magikarp"],good:["Magikarp"],super:["Magikarp","Gyarados"]}},
  {id:"cave-of-origin",name:"Cave of Origin",unlock:22,encounters:{walk:["Golbat","Sableye"],horde:["Zubat"],static:["Kyogre"]}},

  // OPTIONAL LATE-GAME AREAS
  {id:"sea-mauville",name:"Sea Mauville",unlock:13,requires:"surf",encounters:{surf:["Tentacool","Wingull","Pelipper"],old:["Magikarp","Tentacool"],good:["Magikarp","Tentacool","Wailmer"],super:["Wailmer"]}},
  {id:"sea-mauville-deep",name:"Sea Mauville — Deep Interior",unlock:28,requires:"dive",encounters:{static:["Spiritomb","Lugia"]}},
  {id:"scorched-slab",name:"Scorched Slab",unlock:28,requires:"surf",encounters:{walk:["Golbat"],horde:["Zubat"],surf:["Zubat","Golbat"],static:["Heatran"]}},

  // REGI QUEST
  {id:"desert-ruins",name:"Desert Ruins",unlock:27,encounters:{static:["Regirock"]}},
  {id:"island-cave",name:"Island Cave",unlock:27,requires:"surf",encounters:{static:["Regice"]}},
  {id:"ancient-tomb",name:"Ancient Tomb",unlock:27,encounters:{static:["Registeel"]}},
  {id:"island-cave-regigigas",name:"Island Cave — Regigigas",unlock:36,encounters:{static:["Regigigas"]}},

  // VICTORY ROAD / LEAGUE
  {id:"ever-grande-city",name:"Ever Grande City",unlock:29,requires:"waterfall",encounters:{surf:["Tentacool","Pelipper","Tentacruel"],old:["Magikarp","Tentacool"],good:["Magikarp","Luvdisc","Wailmer"],super:["Luvdisc","Wailmer"]}},
  {id:"victory-road",name:"Victory Road",unlock:29,requires:"waterfall",encounters:{walk:["Golbat","Hariyama","Sableye","Lairon","Loudred","Medicham"],horde:["Zubat","Aron","Loudred"],surf:["Tentacool","Tentacruel","Golbat"],old:["Magikarp","Tentacool"],good:["Magikarp","Luvdisc","Wailmer"],super:["Luvdisc","Wailmer"]}},

  // DELTA EPISODE
  {id:"sky-pillar",name:"Sky Pillar",unlock:32,encounters:{walk:["Golbat","Ariados","Claydol","Sableye"],horde:["Golbat","Ariados","Swablu"]}},
  {id:"sky-pillar-summit",name:"Sky Pillar — Summit",unlock:33,encounters:{static:["Rayquaza","Deoxys"]}},

  // POSTGAME
  {id:"battle-resort",name:"Battle Resort",unlock:34,encounters:{surf:["Tentacool","Pelipper","Tentacruel"],old:["Magikarp","Tentacool"],good:["Magikarp","Tentacool","Wailmer"],super:["Wailmer"]}},

  // SOARING
  {id:"soaring-sky",name:"Soaring in the Sky",unlock:22,encounters:{soar:["Murkrow","Taillow","Wingull","Pelipper","Swablu","Drifloon","Braviary"]}},

  // DAILY MIRAGE SPOTS
  {id:"mirage-island",name:"Mirage Island — Daily Pool",unlock:22,requires:"soar",encounters:{mirage:["Tangela","Xatu","Zebstrika","Venomoth","Darmanitan","Larvesta","Persian","Munna","Ditto","Maractus","Audino","Purugly","Porygon"],rock:["Graveler","Binacle"]}},
  {id:"mirage-cave",name:"Mirage Cave — Daily Pool",unlock:22,requires:"soar",encounters:{mirage:["Tynamo","Cofagrigus","Slowpoke","Ditto","Excadrill","Klink","Onix","Unown"],rock:["Graveler","Boldore"]}},
  {id:"mirage-forest",name:"Mirage Forest — Daily Pool",unlock:22,requires:"soar",encounters:{mirage:["Tangela","Sunkern","Purugly","Cherrim","Petilil","Audino","Vulpix","Kricketune","Larvesta"]}},
  {id:"mirage-mountain",name:"Mirage Mountain — Daily Pool",unlock:22,requires:"soar",encounters:{mirage:["Audino","Happiny","Tangela","Darmanitan","Magby","Forretress","Donphan","Kricketune","Rufflet","Zebstrika","Elekid"]}},

  // CONDITIONAL LEGENDARY MIRAGE SPOTS
  {id:"crescent-isle",name:"Crescent Isle",unlock:36,requires:"soar",encounters:{static:["Cresselia"]}},
  {id:"nameless-cavern",name:"Nameless Cavern",unlock:36,requires:"soar",encounters:{static:["Uxie","Mesprit","Azelf"]}},
  {id:"pathless-plain",name:"Pathless Plain",unlock:36,requires:"soar",encounters:{static:["Cobalion","Terrakion","Virizion"]}},
  {id:"trackless-forest",name:"Trackless Forest",unlock:36,requires:"soar",encounters:{static:["Raikou","Entei","Suicune"]}},
  {id:"fabled-cave",name:"Fabled Cave",unlock:36,requires:"soar",encounters:{static:["Zekrom"]}},
  {id:"gnarled-den",name:"Gnarled Den",unlock:36,requires:"soar",encounters:{static:["Kyurem"]}},
  {id:"soaring-rifts",name:"Soaring — Dimensional Rifts / Storm Clouds",unlock:36,requires:"soar",encounters:{static:["Dialga","Giratina","Thundurus","Landorus"]}}
];

ROUTES.push(...EXTRA_AREAS);
const ACHIEVEMENTS = ["First DexNav Egg Move", "First DexNav Hidden Ability", "First Trainer Rematch", "First Contest Win", "Create a Super Secret Base", "First Mega Evolution", "First Shiny", "Catch a Legendary", "Complete a Mirage Spot", "Catch the Regi Trio", "Become Champion", "Finish the Delta Episode", "Complete the Hoenn Dex", "Earn the Shiny Charm"];
const POKEMON_721 = [
  "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew",
  "Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi",
  "Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys",
  "Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos","Shieldon","Bastiodon","Burmy","Wormadam","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","Mime Jr.","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion","Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus",
  "Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin","Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn","Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect",
  "Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","Flabébé","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","Meowstic","Honedge","Doublade","Aegislash","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","Pumpkaboo","Gourgeist","Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion"
];
const POKEMON_LOOKUP = new Map(POKEMON_721.map(name => [name.toLowerCase(), name]));
const POKEMON_TYPES_READY = loadPokemonTypes(POKEMON_721);

const defaultState = () => ({
  version: APP_VERSION,
  currentBenchmark: 0,
  completedBenchmarks: [],
  objectives: {},
  revisits: {},
  access:{oldRod:false,goodRod:false,superRod:false,machBike:false,acroBike:false,shoalLowTide:false},
  caughtSpecies: {},
  achievements: {},
  party: Array(6).fill(""),
  completedAt: {}
});

let state = loadState();
let pendingImport = null;
let editingAreaId = null;

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];

function safeId() {
  return (crypto.randomUUID && crypto.randomUUID()) || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadState() {
  try {
    const raw = localStorage.getItem(APP_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return migrate(parsed);
  } catch {
    return defaultState();
  }
}

function migrate(data) {
  const base = defaultState();
  if (!data || typeof data !== "object") return base;
  const migratedCaught = {};

  Object.entries(data.caughtSpecies || {}).forEach(([key, caught]) => {
    if (!caught) return;
  
    const species = key.includes(":")
      ? key.slice(key.indexOf(":") + 1)
      : key;
  
    migratedCaught[species] = true;
  });
  return {
    ...base,
    ...data,
    version: APP_VERSION,
    completedBenchmarks: Array.isArray(data.completedBenchmarks) ? data.completedBenchmarks : [],
    objectives: data.objectives || {},
    revisits: data.revisits || {},
    access: {...base.access, ...(data.access || {})},
    caughtSpecies: migratedCaught,
    achievements: data.achievements || {},
    party: Array.isArray(data.party) ? data.party.slice(0,6).concat(Array(6).fill("")).slice(0,6) : base.party,
    completedAt: data.completedAt || {}
  };
}

function saveState(message="Saved") {
  localStorage.setItem(APP_KEY, JSON.stringify(state));
  $("#saveStatus").textContent = message;
  render();
}

function currentObjectiveKey(bIndex, oIndex) {
  return `${bIndex}:${oIndex}`;
}

function benchmarkComplete(index) {
  return state.completedBenchmarks.includes(index);
}

function setBenchmarkComplete(index, complete) {
  if (complete && !benchmarkComplete(index)) {
    state.completedBenchmarks.push(index);
    state.completedBenchmarks.sort((a,b)=>a-b);
    state.completedAt[index] = new Date().toISOString();
  } else if (!complete) {
    state.completedBenchmarks = state.completedBenchmarks.filter(v => v !== index);
    delete state.completedAt[index];
  }
}

function render() {
  renderProgress();
  renderJourney();
  renderRevisits();
  renderRoutes();
  renderParty();
  renderTeamAnalysis();
  renderAchievements();
}

function renderProgress() {
  const done = state.completedBenchmarks.length;
  const pct = Math.round(done / BENCHMARKS.length * 100);
  $("#progressPct").textContent = `${pct}%`;
  $("#progressBar").style.width = `${pct}%`;
  $("#progressText").textContent = `${done} of ${BENCHMARKS.length} benchmarks complete`;
  $("#trainerLevel").textContent = String(1 + Math.floor(done / 4));
}

function renderJourney() {
  const i = Math.max(0, Math.min(BENCHMARKS.length-1, state.currentBenchmark));
  const b = BENCHMARKS[i];
  $("#currentTitle").textContent = b.title;
  $("#currentNumber").textContent = String(i+1).padStart(2,"0");
  $("#currentSummary").textContent = b.summary;

  const areaWrap = $("#benchmarkAreas");
  areaWrap.innerHTML = "";
  
  (BENCHMARK_AREAS[i] || []).forEach(name => {
    const chip = document.createElement("span");
    chip.className = "benchmark-area-chip";
    chip.textContent = name;
    areaWrap.appendChild(chip);
  });
  
  const list = $("#objectiveList");
  list.innerHTML = "";
  b.objectives.forEach((text, oi) => {
    const key = currentObjectiveKey(i, oi);
    const label = document.createElement("label");
    label.className = "check-item";
    label.innerHTML = `<input type="checkbox" ${state.objectives[key] ? "checked" : ""}><span></span>`;
    label.querySelector("span").textContent = text;
    label.querySelector("input").addEventListener("change", e => {
      state.objectives[key] = e.target.checked;
      saveState();
    });
    list.appendChild(label);
  });

  const complete = benchmarkComplete(i);
  $("#completeBenchmarkBtn").textContent = complete ? "Mark Incomplete" : "Complete Benchmark";
  $("#completeBenchmarkBtn").className = complete ? "secondary-btn" : "primary-btn";
  $("#prevBenchmarkBtn").disabled = i === 0;
  $("#nextBenchmarkBtn").disabled = i === BENCHMARKS.length - 1;

  const next = BENCHMARKS[i+1];
  $("#nextTitle").textContent = next ? next.title : "Journey Complete";
  $("#nextSummary").textContent = next ? next.summary : "You've reached the open-ended endgame.";
  $("#nextStatus").textContent = next ? (benchmarkComplete(i) ? "Ready" : "Up Next") : "Complete";

  const history = $("#historyList");
  const completed = [...state.completedBenchmarks].sort((a,b)=>b-a).slice(0,5);
  history.innerHTML = completed.length ? "" : `<div class="empty">No completed benchmarks yet.</div>`;
  completed.forEach(idx => {
    const row = document.createElement("div");
    row.className = "history-item";
    const date = state.completedAt[idx] ? new Date(state.completedAt[idx]).toLocaleDateString() : "";
    row.innerHTML = `<div><strong>${idx+1}. ${BENCHMARKS[idx].title}</strong><div class="small muted">${date}</div></div><span class="mini-pill done">+100 XP</span>`;
    history.appendChild(row);
  });
}

function revisitState(index) {
  const manual = state.revisits[index];
  if (manual === "done") return "done";
  if (state.completedBenchmarks.some(v => v >= REVISITS[index].unlock)) return "available";
  return "locked";
}

function renderRevisits() {
  const list = $("#revisitList");
  list.innerHTML = "";
  let available = 0;
  REVISITS.forEach((r, i) => {
    const s = revisitState(i);
    if (s === "available") available++;
    const card = document.createElement("div");
    card.className = "revisit-card";
    card.innerHTML = `
      <div class="stack-row">
        <div>
          <h3>${r.title}</h3>
          <p class="small muted">${r.trigger} · ${r.note}</p>
        </div>
        <button type="button" class="mini-pill ${s}">${s === "available" ? "Available" : s === "done" ? "Done" : "Locked"}</button>
      </div>`;
    const btn = card.querySelector("button");
    btn.disabled = s === "locked";
    btn.addEventListener("click", () => {
      state.revisits[i] = s === "done" ? "available" : "done";
      saveState();
    });
    list.appendChild(card);
  });
  $("#revisitBadge").textContent = available;
}

function hasStoryUnlock(key) {
  const completed = new Set(state.completedBenchmarks);

  if (key === "surf")
    return completed.has(12) || state.currentBenchmark > 12;

  if (key === "rock")
    return completed.has(6) || state.currentBenchmark > 6;

  if (key === "dive")
    return completed.has(19) || state.currentBenchmark > 19;

  if (key === "goggles")
    return completed.has(10) || state.currentBenchmark > 10;

  if (key === "waterfall")
    return completed.has(23) || state.currentBenchmark > 23;

  if (key === "soar")
    return completed.has(22) || state.currentBenchmark > 22;

  if (key === "postdex")
    return completed.has(22) || state.currentBenchmark > 22;

  if (key === "postdelta")
    return completed.has(33) || state.currentBenchmark > 33;

  return true;
}

function routeReached(route) {
  return state.currentBenchmark >= route.unlock || state.completedBenchmarks.some(i => i >= route.unlock);
}

function routeRequirementMet(route) {
  if (!route.requires) return true;

  const requirements = Array.isArray(route.requires)
    ? route.requires
    : [route.requires];

  return requirements.every(req => {
    if (req === "mach") return !!state.access.machBike;
    if (req === "acro") return !!state.access.acroBike;
    if (req === "lowtide") return !!state.access.shoalLowTide;

    return hasStoryUnlock(req);
  });
}

function methodUnlocked(method) {

  if (
    method === "walk" ||
    method === "horde" ||
    method === "static"
  ) {
    return true;
  }

  if (method === "surf")
    return hasStoryUnlock("surf");

  if (method === "rock")
    return hasStoryUnlock("rock");

  if (method === "dive")
    return hasStoryUnlock("dive");

  if (method === "waterfall")
    return hasStoryUnlock("waterfall");

  if (method === "postdex")
    return hasStoryUnlock("postdex");

  if (method === "soar")
    return hasStoryUnlock("soar");

  if (method === "mirage")
    return hasStoryUnlock("soar");

  if (method === "bike")
    return state.access.machBike || state.access.acroBike;

  if (method === "mach")
    return !!state.access.machBike;

  if (method === "acro")
    return !!state.access.acroBike;

  if (method === "lowtide")
    return !!state.access.shoalLowTide;

  if (method === "old")
    return !!state.access.oldRod;

  if (method === "good")
    return !!state.access.goodRod;

  if (method === "super")
    return !!state.access.superRod;

  return false;
}

const METHOD_LABELS = {
  walk:"Walking",horde:"Horde",surf:"Surf",rock:"Rock Smash",dive:"Dive",waterfall:"Waterfall",
  old:"Old Rod",good:"Good Rod",super:"Super Rod",postdex:"Expanded DexNav",static:"Static",
  bike:"Bike Area",mach:"Mach Bike",acro:"Acro Bike",lowtide:"Low Tide",soar:"Soaring",mirage:"Mirage Spot"
};

function isSpeciesCaught(name) {
  return !!state.caughtSpecies[name];
}

function setSpeciesCaught(name, caught) {
  state.caughtSpecies[name] = caught;
}

function autoCompleteCatchObjective(route) {
  const species = visibleRouteSpecies(route);
  if (!species.length || !species.every(s => isSpeciesCaught(s.name))) return;

  const areaName = route.name.toLowerCase();

  BENCHMARKS.forEach((benchmark, bi) => {
    benchmark.objectives.forEach((text, oi) => {
      const objective = text.toLowerCase();

      if (
        objective.includes("clear current catches") &&
        objective.includes(areaName)
      ) {
        state.objectives[currentObjectiveKey(bi, oi)] = true;
      }
    });
  });
}

function visibleRouteSpecies(route) {
  const map = new Map();
  Object.entries(route.encounters).forEach(([method, species]) => {
    if (!methodUnlocked(method)) return;
    species.forEach(name => {
      if (!map.has(name)) map.set(name, new Set());
      map.get(name).add(method);
    });
  });
  return [...map.entries()].map(([name, methods]) => ({name, methods:[...methods]}));
}

function renderRoutes() {
  $("#oldRodToggle").checked = !!state.access.oldRod;
  $("#goodRodToggle").checked = !!state.access.goodRod;
  $("#superRodToggle").checked = !!state.access.superRod;
  $("#machBikeToggle").checked = !!state.access.machBike;
  $("#acroBikeToggle").checked = !!state.access.acroBike;
  $("#shoalLowTideToggle").checked = !!state.access.shoalLowTide;

  const chips = [
    ["Rock Smash", hasStoryUnlock("rock"), "Dynamo Badge"],
    ["Surf", hasStoryUnlock("surf"), "Balance Badge"],
    ["Dive", hasStoryUnlock("dive"), "Mind Badge"],
    ["Waterfall", hasStoryUnlock("waterfall"), "Rain Badge"],
    ["Soaring", hasStoryUnlock("soar"), "Primal Kyogre"],
    ["Expanded DexNav", hasStoryUnlock("postdex"), "Primal Kyogre"]
  ];
  
  $("#fieldAccessSummary").innerHTML = chips.map(([label,on,source]) =>
    `<span class="access-chip ${on ? "on" : ""}">
      ${on ? `${label}: ON` : `${label}: locked until ${source}`}
    </span>`
  ).join("");

  const list = $("#routeList");
  list.innerHTML = "";
  const reached = ROUTES.filter(r => routeReached(r) && routeRequirementMet(r));
  let renderedAreas = 0;
  reached.forEach(route => {
    const species = visibleRouteSpecies(route);
    if (!species.length) return;

    const caught = species.filter(s => isSpeciesCaught(s.name)).length;
    const complete = caught === species.length && species.length > 0;
    const methods = [...new Set(species.flatMap(s => s.methods))];

    const card = document.createElement("article");
    card.className = `route-card ${complete ? "complete" : ""}`;
    card.innerHTML = `
      <div class="route-title-row">
        <div>
          <h3>${escapeHtml(route.name)}</h3>
          <div class="route-methods">${methods.map(m => `<span class="method-chip">${METHOD_LABELS[m]}</span>`).join("")}</div>
        </div>
        <div class="route-progress">${caught} / ${species.length}</div>
      </div>
      <div class="species-grid"></div>`;

    const grid = card.querySelector(".species-grid");
    species.forEach(s => {
      const checked = isSpeciesCaught(s.name);
      const label = document.createElement("label");
      label.className = `species-check ${checked ? "caught" : ""}`;
      label.title = s.methods.map(m => METHOD_LABELS[m]).join(", ");
      label.innerHTML = `<input type="checkbox" ${checked ? "checked" : ""}><span></span>`;
      label.querySelector("span").textContent = s.name;
      label.querySelector("input").addEventListener("change", e => {
        setSpeciesCaught(s.name, e.target.checked);
      
        ROUTES.forEach(area => {
          if (routeReached(area) && routeRequirementMet(area)) {
            autoCompleteCatchObjective(area);
          }
        });
      
        saveState();
      });
      grid.appendChild(label);
    });
    renderedAreas++;
    list.appendChild(card);
  });

  if (!renderedAreas) {
    list.innerHTML = `<div class="empty">No encounter areas currently available.</div>`;
  }
}

function pokemonTypes(name) {
  return POKEMON_TYPES[name] || [];
}


function representedTeamTypes() {
  const represented = new Set();

  state.party.forEach(name => {
    pokemonTypes(name).forEach(type => represented.add(type));
  });

  return [...represented];
}


function teamPokemonData() {
  return state.party
    .filter(Boolean)
    .map(name => ({
      name,
      types: pokemonTypes(name)
    }))
    .filter(pokemon => pokemon.types.length);
}


function analyzeTeam() {
  const team = teamPokemonData();

  if (!team.length) {
    return {
      grade:"—",
      covered:[],
      lacking:[],
      weak:[],
      weakCounts:{},
      coverageCount:0
    };
  }

  const attackingTypes = representedTeamTypes();

  const covered = ALL_TYPES.filter(defendingType =>
    attackingTypes.some(attackingType =>
      offensiveTypeCovers(attackingType, defendingType)
    )
  );

  const uncovered = ALL_TYPES.filter(
    type => !covered.includes(type)
  );

  const weakCounts = {};

  ALL_TYPES.forEach(attackingType => {
    weakCounts[attackingType] = team.filter(pokemon =>
      defensiveMultiplier(
        attackingType,
        pokemon.types
      ) > 1
    ).length;
  });

  /*
    Major weakness:
    - team has NO offensive typing that covers the type
    - 3 or more current party Pokémon are weak to that type
  */
  const weak = uncovered.filter(
    type => weakCounts[type] >= 3
  );

  /*
    Lacking:
    - team has no super-effective typing against the type
    - but fewer than 3 party members are vulnerable to it

    This makes sure every uncovered type appears somewhere:
    either Lacking or Weak.
  */
  const lacking = uncovered.filter(
    type => weakCounts[type] < 3
  );

  const coverageCount = covered.length;

  let grade;

  if (coverageCount >= 15) {
    grade = "Excellent";
  } else if (coverageCount >= 12) {
    grade = "Great";
  } else if (coverageCount >= 8) {
    grade = "Good";
  } else {
    grade = "Poor";
  }

  return {
    grade,
    covered,
    lacking,
    weak,
    weakCounts,
    coverageCount
  };
}


function typeListHtml(types) {
  if (!types.length) {
    return `<span class="muted">None</span>`;
  }

  return types
    .map(type =>
      `<span class="team-type-chip type-${type.toLowerCase()}">${type}</span>`
    )
    .join("");
}


function pokemonTypeHtml(name) {
  const types = pokemonTypes(name);

  if (!name) return "";

  if (!types.length) {
    return `<span class="small muted">Loading type data…</span>`;
  }

  return types
    .map(type =>
      `<span class="pokemon-type-pill type-${type.toLowerCase()}">${type}</span>`
    )
    .join("");
}


function renderTeamAnalysis() {
  const analysis = analyzeTeam();

  $("#teamCoverageGrade").textContent = analysis.grade;

  const partyCount = state.party.filter(Boolean).length;

  if (!partyCount) {
    $("#coverageAgainst").innerHTML =
      `<span class="muted">Add Pokémon to your party.</span>`;

    $("#lackingAgainst").innerHTML = "—";
    $("#weakAgainst").innerHTML = "—";

    return;
  }

  if (!Object.keys(POKEMON_TYPES).length) {
    $("#coverageAgainst").innerHTML =
      `<span class="muted">Loading Pokémon type data…</span>`;

    $("#lackingAgainst").innerHTML = "—";
    $("#weakAgainst").innerHTML = "—";

    return;
  }

  $("#coverageAgainst").innerHTML =
    typeListHtml(analysis.covered);

  $("#lackingAgainst").innerHTML =
    typeListHtml(analysis.lacking);

  $("#weakAgainst").innerHTML =
    typeListHtml(analysis.weak);
}

function renderParty() {
  let datalist = $("#pokemonSpeciesList");

  if (!datalist) {
    datalist = document.createElement("datalist");
    datalist.id = "pokemonSpeciesList";

    datalist.innerHTML = POKEMON_721
      .map(name =>
        `<option value="${escapeAttr(name)}"></option>`
      )
      .join("");

    document.body.appendChild(datalist);
  }

  const grid = $("#partyGrid");
  grid.innerHTML = "";

  state.party.forEach((name, i) => {
    const slot = document.createElement("div");

    slot.className = "party-slot";

    slot.innerHTML = `
      <label>Slot ${i + 1}</label>

      <input
        class="pokemon-party-input"
        list="pokemonSpeciesList"
        autocomplete="off"
        value="${escapeAttr(name)}"
        placeholder="Choose Pokémon"
      >

      <div class="party-types">
        ${pokemonTypeHtml(name)}
      </div>
    `;

    const input = slot.querySelector("input");
    const typeDisplay = slot.querySelector(".party-types");

    input.addEventListener("input", e => {
      const typed = e.target.value.trim();

      if (!typed) {
        state.party[i] = "";

        localStorage.setItem(
          APP_KEY,
          JSON.stringify(state)
        );

        typeDisplay.innerHTML = "";
        renderTeamAnalysis();

        return;
      }

      const exact = POKEMON_LOOKUP.get(
        typed.toLowerCase()
      );

      /*
        Only save recognized Pokémon.
        Partial text like "Tor" is not stored.
      */
      if (!exact) return;

      state.party[i] = exact;

      localStorage.setItem(
        APP_KEY,
        JSON.stringify(state)
      );

      typeDisplay.innerHTML =
        pokemonTypeHtml(exact);

      renderTeamAnalysis();
    });

    input.addEventListener("change", e => {
      const typed = e.target.value.trim();

      if (!typed) {
        state.party[i] = "";
        e.target.value = "";

        localStorage.setItem(
          APP_KEY,
          JSON.stringify(state)
        );

        renderParty();
        renderTeamAnalysis();

        return;
      }

      const exact = POKEMON_LOOKUP.get(
        typed.toLowerCase()
      );

      if (exact) {
        state.party[i] = exact;
        e.target.value = exact;
      } else {
        /*
          Reject garbage / partial names.
          Restore the last valid Pokémon.
        */
        e.target.value = state.party[i] || "";
      }

      localStorage.setItem(
        APP_KEY,
        JSON.stringify(state)
      );

      renderParty();
      renderTeamAnalysis();
    });

    grid.appendChild(slot);
  });
}
function renderAchievements() {
  const list = $("#achievementList");
  list.innerHTML = "";
  ACHIEVEMENTS.forEach((text, i) => {
    const done = !!state.achievements[i];
    const label = document.createElement("label");
    label.className = `achievement ${done ? "done" : ""}`;
    label.innerHTML = `<input type="checkbox" ${done ? "checked" : ""}><span></span>`;
    label.querySelector("span").textContent = text;
    label.querySelector("input").addEventListener("change", e => {
      state.achievements[i] = e.target.checked;
      saveState();
    });
    list.appendChild(label);
  });
}

function escapeHtml(v) {
  return String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
function escapeAttr(v) { return escapeHtml(v); }

function exportSave() {
  const payload = {
    app:"Alpha Sapphire Companion",
    version:APP_VERSION,
    exportedAt:new Date().toISOString(),
    progress:state
  };
  const blob = new Blob([JSON.stringify(payload,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0,10);
  a.href = url;
  a.download = `alpha-sapphire-companion-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  $("#saveStatus").textContent = "Backup exported.";
}

function previewImport(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const imported = parsed.progress || parsed;
      pendingImport = migrate(imported);
      const done = pendingImport.completedBenchmarks.length;
      const current = BENCHMARKS[pendingImport.currentBenchmark]?.title || "Unknown";
      $("#importPreview").innerHTML = `
        <strong>Current benchmark:</strong> ${escapeHtml(current)}<br>
        <strong>Benchmarks complete:</strong> ${done} / ${BENCHMARKS.length}<br>
        <strong>Area catches:</strong> ${Object.values(pendingImport.caughtSpecies || {}).filter(Boolean).length}<br>
        <strong>Champion:</strong> ${pendingImport.completedBenchmarks.includes(30) ? "Yes" : "No"}
      `;
      $("#importDialog").showModal();
    } catch {
      $("#saveStatus").textContent = "Import failed: invalid JSON file.";
    }
  };
  reader.readAsText(file);
}


$$(".tab").forEach(btn => btn.addEventListener("click", () => {
  $$(".tab").forEach(b => b.classList.toggle("active", b === btn));
  $$(".tab-panel").forEach(p => p.classList.toggle("active", p.id === btn.dataset.tab));
}));

$("#completeBenchmarkBtn").addEventListener("click", () => {
  const i = state.currentBenchmark;
  const willComplete = !benchmarkComplete(i);
  setBenchmarkComplete(i, willComplete);
  if (willComplete && i < BENCHMARKS.length-1) state.currentBenchmark = i+1;
  saveState(willComplete ? "+100 XP — benchmark complete!" : "Benchmark reopened.");
});

$("#prevBenchmarkBtn").addEventListener("click", () => {
  state.currentBenchmark = Math.max(0, state.currentBenchmark-1);
  saveState();
});
$("#nextBenchmarkBtn").addEventListener("click", () => {
  state.currentBenchmark = Math.min(BENCHMARKS.length-1, state.currentBenchmark+1);
  saveState();
});

$("#menuBtn").addEventListener("click", () => $("#toolsDialog").showModal());
$("#exportBtn").addEventListener("click", exportSave);
$("#importInput").addEventListener("change", e => {
  const file = e.target.files?.[0];
  if (file) previewImport(file);
  e.target.value = "";
});
$("#confirmImportBtn").addEventListener("click", () => {
  if (!pendingImport) return;
  localStorage.setItem(BACKUP_KEY, JSON.stringify(state));
  state = pendingImport;
  pendingImport = null;
  localStorage.setItem(APP_KEY, JSON.stringify(state));
  $("#importDialog").close();
  $("#toolsDialog").close();
  render();
});
$("#restoreBackupBtn").addEventListener("click", () => {
  const raw = localStorage.getItem(BACKUP_KEY);
  if (!raw) {
    $("#saveStatus").textContent = "No pre-import backup exists yet.";
    return;
  }
  if (!confirm("Restore the pre-import backup and replace current progress?")) return;
  state = migrate(JSON.parse(raw));
  saveState("Pre-import backup restored.");
});
$("#resetBtn").addEventListener("click", () => {
  if (!confirm("Reset this entire Alpha Sapphire run? Export first if you want a backup.")) return;
  state = defaultState();
  localStorage.setItem(APP_KEY, JSON.stringify(state));
  $("#toolsDialog").close();
  render();
});


$("#oldRodToggle").addEventListener("change", e => { state.access.oldRod = e.target.checked; saveState(); });
$("#goodRodToggle").addEventListener("change", e => { state.access.goodRod = e.target.checked; saveState(); });
$("#superRodToggle").addEventListener("change", e => { state.access.superRod = e.target.checked; saveState(); });
$("#machBikeToggle").addEventListener("change", e => {
  state.access.machBike = e.target.checked;
  saveState();
});

$("#acroBikeToggle").addEventListener("change", e => {
  state.access.acroBike = e.target.checked;
  saveState();
});

$("#shoalLowTideToggle").addEventListener("change", e => {
  state.access.shoalLowTide = e.target.checked;
  saveState();
});

render();

POKEMON_TYPES_READY.then(() => {
  renderParty();
  renderTeamAnalysis();
});
