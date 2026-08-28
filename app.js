const APP_KEY = "alphaSapphireCompanionV1";
const BACKUP_KEY = "alphaSapphireCompanionPreImport";
const APP_VERSION = 1;

const BENCHMARKS = [{"title": "Welcome to Hoenn", "summary": "Littleroot, Oldale, Routes 101, 102 and 103, then reach Petalburg. Establish your catch-everything rhythm and learn DexNav.", "objectives": ["Explore Littleroot and Oldale", "Clear current catches on Route 101", "Clear current catches on Route 102", "Clear current catches on Route 103", "Reach Petalburg City"]}, {"title": "Stone Badge", "summary": "Explore Route 104 and Petalburg Woods, reach Rustboro, then defeat Roxanne.", "objectives": ["Clear current catches on Route 104", "Clear current catches in Petalburg Woods", "Explore Rustboro City", "Defeat Roxanne", "Note Cut-accessible revisits"]}, {"title": "Devon Rescue", "summary": "Handle the Devon trouble on Route 116 and at Rusturf Tunnel before heading south.", "objectives": ["Explore Route 116", "Clear current catches on Route 116", "Visit Rusturf Tunnel", "Complete Devon rescue story"]}, {"title": "Knuckle Badge", "summary": "Travel to Dewford, explore Granite Cave, and defeat Brawly.", "objectives": ["Explore Dewford Town", "Explore Route 106", "Clear current catches in Granite Cave", "Defeat Brawly", "Flag Granite Cave bike revisit"]}, {"title": "Slateport Arrival", "summary": "Make landfall on Route 109, explore Slateport and complete the Oceanic Museum story.", "objectives": ["Explore Route 109", "Explore Slateport City", "Complete Oceanic Museum story", "Try a Contest Spectacular if desired"]}, {"title": "Road to Mauville", "summary": "Push through Route 110, sample the Trick House and reach Mauville.", "objectives": ["Clear current catches on Route 110", "Complete current Trick House challenge", "Reach Mauville City", "Handle rival battle"]}, {"title": "Dynamo Badge", "summary": "Explore Mauville, choose a bike and defeat Wattson.", "objectives": ["Explore Mauville City", "Choose a bicycle", "Defeat Wattson", "Note Rock Smash revisits", "Note Cycling Road access"]}, {"title": "Rusturf Reopened", "summary": "Explore Route 117 and Verdanturf, then use new field access to finish old business.", "objectives": ["Explore Route 117", "Explore Verdanturf Town", "Revisit Route 116", "Revisit Rusturf Tunnel"]}, {"title": "Northern Hoenn", "summary": "Climb north through Routes 111–113 and Fiery Path toward Fallarbor.", "objectives": ["Explore Route 111", "Explore Route 112", "Explore Fiery Path", "Explore Route 113", "Flag desert for later"]}, {"title": "Meteor Trouble", "summary": "Explore Fallarbor, Route 114 and Meteor Falls as Team Aqua's plan unfolds.", "objectives": ["Explore Fallarbor Town", "Explore Route 114", "Explore Meteor Falls", "Flag deeper Meteor Falls for later"]}, {"title": "Heat Badge", "summary": "Resolve Mt. Chimney, descend Jagged Pass and defeat Flannery in Lavaridge.", "objectives": ["Complete Mt. Chimney story", "Explore Jagged Pass", "Explore Lavaridge Town", "Defeat Flannery", "Note Strength revisits"]}, {"title": "Desert Expedition", "summary": "Use your new access to sweep Route 111's desert and claim a fossil.", "objectives": ["Explore Route 111 Desert", "Clear current desert catches", "Choose a fossil"]}, {"title": "Balance Badge", "summary": "Return to Petalburg and defeat Norman. Surf changes the entire map afterward.", "objectives": ["Return to Petalburg Gym", "Defeat Norman", "Obtain Surf access", "Open Surf revisit queue"]}, {"title": "Surf Cleanup I", "summary": "Optional cleanup pass through earlier routes and water before pushing east.", "objectives": ["Review unlocked Surf revisits", "Catch newly available water species", "Collect worthwhile Surf-access items", "Continue when satisfied"]}, {"title": "Southern Island", "summary": "Cross Route 118 and complete the Southern Island story milestone.", "objectives": ["Explore Route 118", "Clear current catches on Route 118", "Complete Southern Island story", "Register Mega Evolution milestone"]}, {"title": "Weather Crisis", "summary": "Climb Route 119, explore the Weather Institute and keep moving toward Fortree.", "objectives": ["Explore Route 119", "Clear current catches on Route 119", "Complete Weather Institute story"]}, {"title": "Feather Badge", "summary": "Explore Fortree and defeat Winona. Fly makes backtracking painless.", "objectives": ["Explore Fortree City", "Defeat Winona", "Unlock Fly convenience", "Review pending revisits"]}, {"title": "Eastern Hoenn", "summary": "Explore Routes 120–123, Safari Zone and Mt. Pyre.", "objectives": ["Explore Route 120", "Explore Route 121", "Visit Safari Zone", "Explore Mt. Pyre", "Explore Route 123"]}, {"title": "Lilycove Crisis", "summary": "Handle Lilycove, the Slateport Harbor event and Team Aqua Hideout.", "objectives": ["Explore Lilycove City", "Complete Slateport Harbor story", "Clear Team Aqua Hideout", "Finish any desired hideout pickups"]}, {"title": "Mind Badge", "summary": "Cross Route 124, explore Mossdeep and defeat Tate & Liza.", "objectives": ["Explore Route 124", "Explore Mossdeep City", "Defeat Tate & Liza", "Unlock Dive access"]}, {"title": "Shoal & Sea", "summary": "Explore Route 125, Shoal Cave and the waters around Routes 126–127.", "objectives": ["Explore Route 125", "Explore Shoal Cave", "Explore Route 126", "Explore Route 127", "Flag tide-dependent Shoal cleanup"]}, {"title": "Beneath Hoenn", "summary": "Use Dive, explore underwater routes and descend into Seafloor Cavern.", "objectives": ["Explore underwater routes", "Explore Route 128", "Clear current underwater catches", "Complete Seafloor Cavern story"]}, {"title": "Primal Kyogre", "summary": "Reach Sootopolis, enter the Cave of Origin and resolve the primal crisis.", "objectives": ["Explore Sootopolis City", "Enter Cave of Origin", "Resolve Kyogre encounter", "Unlock Soaring", "Flag expanded Dex encounters"]}, {"title": "Rain Badge", "summary": "Challenge Wallace and unlock Waterfall for essentially full field mobility.", "objectives": ["Defeat Wallace", "Unlock Waterfall access", "Review final field-move revisits"]}, {"title": "Expanded Hoenn Cleanup", "summary": "Old routes can now contain expanded DexNav encounters. Treat this as bonus completion, not erased progress.", "objectives": ["Review expanded encounter flags", "Catch desired new DexNav species", "Preserve original route-clear status"]}, {"title": "Mauville Secrets", "summary": "Clear late optional content around Mauville and New Mauville.", "objectives": ["Explore Mauville Hills", "Explore New Mauville", "Clear any related optional objectives"]}, {"title": "Western Sea", "summary": "Explore Routes 129–134 and Pacifidlog, including the current-heavy western waters.", "objectives": ["Explore Routes 129–134", "Explore Pacifidlog Town", "Clear current catches", "Note puzzle/legendary requirements"]}, {"title": "Regi Expedition", "summary": "Tackle the Sealed Chamber setup and the Hoenn Regi trio when you're ready.", "objectives": ["Complete Sealed Chamber setup", "Encounter Regirock", "Encounter Regice", "Encounter Registeel"]}, {"title": "Hoenn Sidequest Sweep", "summary": "Sea Mauville, Scorched Slab and unfinished optional areas before the League.", "objectives": ["Explore Sea Mauville", "Explore Scorched Slab", "Clear remaining optional routes/caves", "Review outstanding revisits"]}, {"title": "Victory Road", "summary": "Reach Ever Grande and clear Victory Road.", "objectives": ["Reach Ever Grande City", "Clear Victory Road", "Finish desired pre-League cleanup"]}, {"title": "Champion of Hoenn", "summary": "Take on the Elite Four and become Champion.", "objectives": ["Defeat Elite Four", "Defeat Champion", "Enter Hall of Fame"]}, {"title": "Delta Episode I", "summary": "Begin the postgame story and follow the trail across Hoenn.", "objectives": ["Begin Delta Episode", "Complete early Delta story beats", "Track required revisits"]}, {"title": "Delta Episode II", "summary": "Push through the Space Center, Aqua Hideout and final lead-up to Sky Pillar.", "objectives": ["Complete Space Center events", "Complete Aqua Hideout revisit", "Reach Sky Pillar"]}, {"title": "Delta Finale", "summary": "Finish the Delta Episode with Rayquaza and Deoxys.", "objectives": ["Complete Sky Pillar", "Resolve Rayquaza encounter", "Resolve Deoxys encounter", "Finish Delta Episode"]}, {"title": "Battle Resort", "summary": "Visit the Battle Resort and unlock the dedicated endgame training loop.", "objectives": ["Travel by S.S. Tidal", "Explore Battle Resort", "Register Battle Maison", "Register second Day Care"]}, {"title": "Elite Four Round 2", "summary": "Optional upgraded League rematch.", "objectives": ["Prepare postgame team", "Complete upgraded Elite Four rematch"]}, {"title": "Legendary Hunt", "summary": "Round up remaining static, soaring and Mirage Spot legendaries.", "objectives": ["Track desired legendary targets", "Complete available legendary encounters", "Leave time-gated Mirage targets as ongoing"]}, {"title": "Hoenn Dex", "summary": "Complete the regional Pokédex as a major collection milestone.", "objectives": ["Complete Hoenn Dex", "Claim regional completion reward"]}, {"title": "National Dex", "summary": "Finish the required National Dex entries and earn the Shiny Charm.", "objectives": ["Complete required National Dex entries", "Earn Shiny Charm", "Verify Mythicals separately if desired"]}, {"title": "Endgame Mastery", "summary": "Open-ended victory lap: Contests, Maison, breeding, shiny hunts, Secret Bases and anything else you enjoy.", "objectives": ["Choose personal endgame goals", "Track optional mastery projects", "Declare the save complete when it feels complete"]}];
const REVISITS = [{"title": "Petalburg Woods / Route 104", "unlock": 1, "trigger": "Cut access", "note": "Check previously blocked Cut paths.", "status": "locked"}, {"title": "Granite Cave", "unlock": 6, "trigger": "Bicycle", "note": "Return for bike-accessible sections.", "status": "locked"}, {"title": "Rusturf Tunnel", "unlock": 6, "trigger": "Rock Smash", "note": "Finish previously blocked tunnel access.", "status": "locked"}, {"title": "Fiery Path / earlier Strength blocks", "unlock": 10, "trigger": "Strength", "note": "Review Strength-accessible side paths.", "status": "locked"}, {"title": "Early-route Surf sweep", "unlock": 12, "trigger": "Surf", "note": "Water encounters, items and optional areas open broadly.", "status": "locked"}, {"title": "Route 115 / western Surf access", "unlock": 12, "trigger": "Surf", "note": "Reach previously inaccessible northern/water sections.", "status": "locked"}, {"title": "Fly convenience sweep", "unlock": 16, "trigger": "Fly", "note": "Optional cleanup is now much faster.", "status": "locked"}, {"title": "Underwater Hoenn", "unlock": 19, "trigger": "Dive", "note": "Dive spots across eastern/southern Hoenn become explorable.", "status": "locked"}, {"title": "Expanded DexNav encounters", "unlock": 22, "trigger": "Primal crisis resolved", "note": "Old routes gain additional non-Hoenn DexNav encounters.", "status": "locked"}, {"title": "Waterfall cleanup", "unlock": 23, "trigger": "Waterfall", "note": "Final field-move gated areas become accessible.", "status": "locked"}];
const ACHIEVEMENTS = ["First DexNav Egg Move", "First DexNav Hidden Ability", "First Trainer Rematch", "First Contest Win", "Create a Super Secret Base", "First Mega Evolution", "First Shiny", "Catch a Legendary", "Complete a Mirage Spot", "Catch the Regi Trio", "Become Champion", "Finish the Delta Episode", "Complete the Hoenn Dex", "Earn the Shiny Charm"];

const defaultState = () => ({
  version: APP_VERSION,
  currentBenchmark: 0,
  completedBenchmarks: [],
  objectives: {},
  revisits: {},
  areas: [
    {id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now())+"a", name:"Route 101", caught:0, total:0, note:"", revisit:false},
    {id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now())+"b", name:"Route 102", caught:0, total:0, note:"", revisit:false},
    {id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now())+"c", name:"Route 103", caught:0, total:0, note:"", revisit:false}
  ],
  achievements: {},
  party: ["Torchic","Zigzagoon","Lotad","Poochyena","Wurmple","Surskit"],
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
  return {
    ...base,
    ...data,
    version: APP_VERSION,
    completedBenchmarks: Array.isArray(data.completedBenchmarks) ? data.completedBenchmarks : [],
    objectives: data.objectives || {},
    revisits: data.revisits || {},
    areas: Array.isArray(data.areas) ? data.areas : base.areas,
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
  renderAreas();
  renderParty();
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

function renderAreas() {
  const list = $("#areaList");
  list.innerHTML = state.areas.length ? "" : `<div class="empty">No areas tracked yet.</div>`;
  state.areas.forEach(area => {
    const total = Math.max(0, Number(area.total)||0);
    const caught = Math.max(0, Math.min(total || 999, Number(area.caught)||0));
    const pct = total > 0 ? Math.min(100, Math.round(caught/total*100)) : 0;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "area-card";
    card.innerHTML = `
      <div class="stack-row">
        <div style="text-align:left">
          <h3>${escapeHtml(area.name)}</h3>
          <p class="small muted">${escapeHtml(area.note || (area.revisit ? "Revisit later" : "Tap to edit"))}</p>
        </div>
        <div class="area-count">${caught} / ${total}</div>
      </div>
      <div class="area-bar"><span style="width:${pct}%"></span></div>`;
    card.addEventListener("click", () => openAreaDialog(area.id));
    list.appendChild(card);
  });
}

function renderParty() {
  const grid = $("#partyGrid");
  grid.innerHTML = "";
  state.party.forEach((name, i) => {
    const slot = document.createElement("div");
    slot.className = "party-slot";
    slot.innerHTML = `<label>Slot ${i+1}</label><input maxlength="30" value="${escapeAttr(name)}" placeholder="Empty">`;
    slot.querySelector("input").addEventListener("input", e => {
      state.party[i] = e.target.value;
      localStorage.setItem(APP_KEY, JSON.stringify(state));
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
        <strong>Areas tracked:</strong> ${pendingImport.areas.length}<br>
        <strong>Champion:</strong> ${pendingImport.completedBenchmarks.includes(30) ? "Yes" : "No"}
      `;
      $("#importDialog").showModal();
    } catch {
      $("#saveStatus").textContent = "Import failed: invalid JSON file.";
    }
  };
  reader.readAsText(file);
}

function openAreaDialog(id=null) {
  editingAreaId = id;
  const area = state.areas.find(a => a.id === id);
  $("#areaDialogTitle").textContent = area ? "Edit Area" : "Add Area";
  $("#areaName").value = area?.name || "";
  $("#areaCaught").value = area?.caught ?? 0;
  $("#areaTotal").value = area?.total ?? 0;
  $("#areaNote").value = area?.note || "";
  $("#areaRevisit").checked = !!area?.revisit;
  $("#deleteAreaBtn").classList.toggle("hidden", !area);
  $("#areaDialog").showModal();
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

$("#addAreaBtn").addEventListener("click", () => openAreaDialog());
$("#areaCancelBtn").addEventListener("click", () => $("#areaDialog").close());
$("#areaForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#areaName").value.trim();
  if (!name) return;
  const total = Math.max(0, Math.min(999, Number($("#areaTotal").value)||0));
  const caught = Math.max(0, Math.min(total || 999, Number($("#areaCaught").value)||0));
  const payload = {
    id: editingAreaId || safeId(),
    name,
    caught,
    total,
    note: $("#areaNote").value.trim(),
    revisit: $("#areaRevisit").checked
  };
  const idx = state.areas.findIndex(a => a.id === editingAreaId);
  if (idx >= 0) state.areas[idx] = payload;
  else state.areas.push(payload);
  $("#areaDialog").close();
  saveState();
});
$("#deleteAreaBtn").addEventListener("click", () => {
  if (!editingAreaId) return;
  if (!confirm("Delete this area tracker entry?")) return;
  state.areas = state.areas.filter(a => a.id !== editingAreaId);
  $("#areaDialog").close();
  saveState();
});

render();
