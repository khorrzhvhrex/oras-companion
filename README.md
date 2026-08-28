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
