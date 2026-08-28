const APP_KEY = "alphaSapphireCompanionV1";
const BACKUP_KEY = "alphaSapphireCompanionPreImport";
const APP_VERSION = 2;

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

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];

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

  if (key === "rock")
    return completed.has(6);

  if (key === "goggles")
    return completed.has(10);

  if (key === "surf")
    return completed.has(12);

  if (key === "dive")
    return completed.has(19);

  if (key === "soar")
    return completed.has(22);

  if (key === "postdex")
    return completed.has(22);

  if (key === "waterfall")
    return completed.has(23);

  if (key === "postdelta")
    return completed.has(33);

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

function isSpeciesCaught(name) {
  return !!state.caughtSpecies[name];
}

function setSpeciesCaught(name, caught) {
  state.caughtSpecies[name] = caught;
}

function areaCurrentCatchesComplete(areaId) {
  const area = ROUTES.find(route => route.id === areaId);

  if (!area) return false;
  if (!routeReached(area) || !routeRequirementMet(area)) return false;

  const species = visibleRouteSpecies(area);

  return (
    species.length > 0 &&
    species.every(s => isSpeciesCaught(s.name))
  );
}


function autoCompleteCatchObjectives() {
  CATCH_OBJECTIVES.forEach(entry => {
    const complete = entry.areas.every(areaId =>
      areaCurrentCatchesComplete(areaId)
    );

    if (!complete) return;

    state.objectives[
      currentObjectiveKey(entry.benchmark, entry.objective)
    ] = true;
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
        autoCompleteCatchObjectives();
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

      <div class="party-evolution">
        <strong>Evolution:</strong> ${name ? escapeHtml(pokemonEvolutionText(name)) : "—"}
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
