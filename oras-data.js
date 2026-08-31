
// =========================================================
// ALPHA SAPPHIRE / ORAS GAME DATA
// =========================================================

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

// =========================================================
// ORAS POKEDEX
// =========================================================

const HOENN_DEX = [
  "Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena",
  "Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre",
  "Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia",
  "Gardevoir","Gallade","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Abra",
  "Kadabra","Alakazam","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama",
  "Goldeen","Seaking","Magikarp","Gyarados","Azurill","Marill","Azumarill","Geodude","Graveler","Golem",
  "Nosepass","Probopass","Skitty","Delcatty","Zubat","Golbat","Crobat","Tentacool","Tentacruel","Sableye",
  "Mawile","Aron","Lairon","Aggron","Machop","Machoke","Machamp","Meditite","Medicham","Electrike",
  "Manectric","Plusle","Minun","Magnemite","Magneton","Magnezone","Voltorb","Electrode","Volbeat","Illumise",
  "Oddish","Gloom","Vileplume","Bellossom","Doduo","Dodrio","Budew","Roselia","Roserade","Gulpin",
  "Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Slugma","Magcargo","Torkoal",
  "Grimer","Muk","Koffing","Weezing","Spoink","Grumpig","Sandshrew","Sandslash","Spinda","Skarmory",
  "Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone",
  "Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith",
  "Armaldo","Igglybuff","Jigglypuff","Wigglytuff","Feebas","Milotic","Castform","Staryu","Starmie","Kecleon",
  "Shuppet","Banette","Duskull","Dusclops","Dusknoir","Tropius","Chingling","Chimecho","Absol","Vulpix",
  "Ninetales","Pichu","Pikachu","Raichu","Psyduck","Golduck","Wynaut","Wobbuffet","Natu","Xatu",
  "Girafarig","Phanpy","Donphan","Pinsir","Heracross","Rhyhorn","Rhydon","Rhyperior","Snorunt","Glalie",
  "Froslass","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Corsola","Chinchou",
  "Lanturn","Luvdisc","Horsea","Seadra","Kingdra","Bagon","Shelgon","Salamence","Beldum","Metang",
  "Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys"
];

const HOENN_DEX_REQUIRED = HOENN_DEX.filter(name =>
  !["Rayquaza","Jirachi","Deoxys"].includes(name)
);

const NATIONAL_DEX_NOT_REQUIRED = [
  "Mew","Celebi","Jirachi","Phione","Manaphy",
  "Darkrai","Shaymin","Arceus","Victini","Keldeo",
  "Meloetta","Genesect","Diancie","Hoopa","Volcanion"
];

const NATIONAL_DEX_REQUIRED = POKEMON_721.filter(name =>
  !NATIONAL_DEX_NOT_REQUIRED.includes(name)
);

// =========================================================
// AUTO-COMPLETE CATCH OBJECTIVES
// =========================================================

const CATCH_OBJECTIVES = [
  {benchmark:0, objective:1, areas:["r101"]},
  {benchmark:0, objective:2, areas:["r102"]},
  {benchmark:0, objective:3, areas:["r103"]},

  {benchmark:1, objective:0, areas:["r104"]},
  {benchmark:1, objective:1, areas:["petalburg-woods"]},

  {benchmark:2, objective:1, areas:["r116"]},

  {benchmark:3, objective:2, areas:["granite-cave"]},

  {benchmark:5, objective:0, areas:["r110"]},

  {benchmark:11, objective:1, areas:["r111d"]},

  {benchmark:14, objective:1, areas:["r118"]},

  {benchmark:15, objective:1, areas:["r119"]},

  {
    benchmark:21,
    objective:2,
    areas:["r107","r124","r126","r127","r128"]
  },

  {
    benchmark:26,
    objective:2,
    areas:["r129","r130","r131","r132","r133","r134"]
  }
];

const METHOD_LABELS = {
  walk:"Walking",horde:"Horde",surf:"Surf",rock:"Rock Smash",dive:"Dive",waterfall:"Waterfall",
  old:"Old Rod",good:"Good Rod",super:"Super Rod",postdex:"Expanded DexNav",static:"Static",
  bike:"Bike Area",mach:"Mach Bike",acro:"Acro Bike",lowtide:"Low Tide",soar:"Soaring",mirage:"Mirage Spot"
};

