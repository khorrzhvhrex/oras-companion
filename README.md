# Alpha Sapphire Companion v1

A lightweight, phone-first companion for a slow, completion-minded Pokémon Alpha Sapphire playthrough.

## Included
- 40-benchmark full-playthrough spine
- current quest + objective checklist
- revisit queue that unlocks with story progress
- lightweight manual area catch counters
- six-slot party tracker
- optional achievements
- local autosave
- JSON export/import
- pre-import safety backup
- reset run

## Run it
Put `index.html`, `style.css`, and `app.js` in the same folder and open `index.html` in a browser.

For easiest phone use, host the folder on GitHub Pages or another static host. No backend is required.

## Data
Progress is stored in browser `localStorage`.

Use **••• → Export Save** periodically to download a portable JSON backup.
Importing a save first creates a local pre-import backup that can be restored from the same menu.

## v1 philosophy
The app intentionally does not track every item, trainer, berry, IV, move, or species by default. Area catch tracking is manual so the app stays quick instead of becoming another giant project.

# Alpha Sapphire Companion v2

Mobile-first local companion for a completion-minded Pokémon Alpha Sapphire playthrough.

## v2
- Route 101–134 encounter checklists
- Only currently obtainable Pokémon are displayed
- Surf, Rock Smash, Dive and expanded post-primal DexNav encounters unlock from benchmark progress
- Old Rod, Good Rod and Super Rod are manual toggles so the app never assumes you picked them up
- One checkbox per unique species per route, even when the species is available through multiple methods
- Existing v1 benchmark/party/achievement saves migrate automatically
- Local autosave + JSON export/import remain unchanged

Encounter lists are based primarily on the ORAS Pokéarth encounter tables on Serebii.

## Notes
This pass covers numbered routes. Caves, forests, cities, Safari Zone, Shoal Cave, Mt. Pyre, etc. remain benchmark objectives rather than species checklists for now.
