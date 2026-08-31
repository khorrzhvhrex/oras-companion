const APP_KEY = "alphaSapphireCompanionV1";
const BACKUP_KEY = "alphaSapphireCompanionPreImport";
const APP_VERSION = 4;

const defaultState = () => ({
  version: APP_VERSION,
  currentBenchmark: 0,
  completedBenchmarks: [],
  objectives: {},
  revisits: {},
  access:{oldRod:false,goodRod:false,superRod:false,machBike:false,acroBike:false,shoalLowTide:false},
  obtainedSpecies: {},
  specialAcquisitions: {},
  gameVersion: "AS",
  achievements: {},
  party: Array(6).fill(""),
  completedAt: {}
});

let state = loadState();
let pendingImport = null;
const manuallyExpandedAreas = new Set();

let dexMode = "hoenn";
let dexFilter = "all";
let dexSearch = "";

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

  if (!data || typeof data !== "object") {
    return base;
  }

  const migratedObtained = {};

  Object.entries(
    data.obtainedSpecies || {}
  ).forEach(([key, obtained]) => {
    if (!obtained) return;

    const species = key.includes(":")
      ? key.slice(key.indexOf(":") + 1)
      : key;

    const canonical =
      POKEMON_LOOKUP.get(species.toLowerCase());

    if (canonical) {
      migratedObtained[canonical] = true;
    }
  });

  /*
    v1/v2 migration:
    caughtSpecies becomes obtainedSpecies.
  */
  Object.entries(
    data.caughtSpecies || {}
  ).forEach(([key, caught]) => {
    if (!caught) return;

    const species = key.includes(":")
      ? key.slice(key.indexOf(":") + 1)
      : key;

    const canonical =
      POKEMON_LOOKUP.get(species.toLowerCase());

    if (canonical) {
      migratedObtained[canonical] = true;
    }
  });

  const migratedParty =
    Array.isArray(data.party)
      ? data.party
          .slice(0,6)
          .concat(Array(6).fill(""))
          .slice(0,6)
          .map(name => {
            if (!name) return "";

            return (
              POKEMON_LOOKUP.get(
                String(name).toLowerCase()
              ) || ""
            );
          })
      : base.party;

  /*
    Anything already in the Party must have
    been obtained on the old save.
  */
  migratedParty.forEach(name => {
    if (name) {
      migratedObtained[name] = true;
    }
  });

  const migrated = {
    ...base,
    ...data,

    version:APP_VERSION,

    completedBenchmarks:
      Array.isArray(data.completedBenchmarks)
        ? data.completedBenchmarks
        : [],

    objectives:
      data.objectives || {},

    revisits:
      data.revisits || {},

    access:{
      ...base.access,
      ...(data.access || {})
    },

    obtainedSpecies:
      migratedObtained,
    
    specialAcquisitions:
      data.specialAcquisitions || {},
    
    gameVersion:
      data.gameVersion === "OR"
        ? "OR"
        : "AS",
    
    achievements:
      data.achievements || {},

    party:
      migratedParty,

    completedAt:
      data.completedAt || {}
  };

  delete migrated.caughtSpecies;

  return migrated;
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
  renderDex();
  renderSpecialAcquisitions();
  renderAvailabilityReference();
  renderAchievements();
}

function renderProgress() {
  const done = state.completedBenchmarks.length;

  const xpPerBenchmark = 100;
  const totalXp = done * xpPerBenchmark;
  const maxXp = BENCHMARKS.length * xpPerBenchmark;

  const pct = Math.round(
    totalXp / maxXp * 100
  );

  $("#progressPct").textContent =
    `${totalXp.toLocaleString()} XP`;

  $("#progressBar").style.width =
    `${pct}%`;

  $("#progressText").textContent =
    `${totalXp.toLocaleString()} / ${maxXp.toLocaleString()} XP`;

  $("#trainerLevel").textContent =
    String(1 + Math.floor(done / 4));
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

function isSpeciesObtained(name) {
  return !!state.obtainedSpecies[name];
}


function obtainedSpeciesNames() {
  return POKEMON_721.filter(name =>
    isSpeciesObtained(name)
  );
}


function obtainedSpeciesCount() {
  return obtainedSpeciesNames().length;
}


function eligiblePartySpecies() {
  const eligible = new Set();

  obtainedSpeciesNames().forEach(name => {
    pokemonEvolutionFamily(name)
      .forEach(familyMember => {
        eligible.add(familyMember);
      });
  });

  return POKEMON_721.filter(name =>
    eligible.has(name)
  );
}


function isPartySpeciesEligible(name) {
  if (!name) return false;

  return eligiblePartySpecies()
    .includes(name);
}


function pruneIneligiblePartySpecies() {
  state.party = state.party.map(name => {
    if (!name) return "";

    return isPartySpeciesEligible(name)
      ? name
      : "";
  });
}


function setSpeciesObtained(
  name,
  obtained=true
) {
  const canonical =
    POKEMON_LOOKUP.get(
      String(name || "").toLowerCase()
    );

  if (!canonical) return false;

  if (obtained) {
    state.obtainedSpecies[canonical] = true;
  } else {
    delete state.obtainedSpecies[canonical];
    pruneIneligiblePartySpecies();
  }

  return true;
}


/*
  Compatibility wrappers for the existing
  Area tracker.
*/
function isSpeciesCaught(name) {
  return isSpeciesObtained(name);
}


function setSpeciesCaught(name, caught) {
  return setSpeciesObtained(name, caught);
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

// =========================================================
// DEXNAV AREA CROWNS
// =========================================================

const DEXNAV_LAND_METHODS = new Set([
  "walk",
  "horde",
  "bike",
  "mach",
  "acro",
  "lowtide",
  "dive"
]);

const DEXNAV_FISH_METHODS = new Set([
  "old",
  "good",
  "super"
]);

const DEXNAV_SURF_METHODS = new Set([
  "surf"
]);


function dexNavCategorySpecies(
  route,
  methodSet
) {
  const species = new Set();

  Object.entries(route.encounters)
    .forEach(([method, names]) => {
      if (!methodSet.has(method)) return;

      names.forEach(name =>
        species.add(name)
      );
    });

  return [...species];
}


function dexNavCategoryComplete(
  route,
  methodSet
) {
  const species =
    dexNavCategorySpecies(
      route,
      methodSet
    );

  if (!species.length) {
    return null;
  }

  return species.every(name =>
    isSpeciesObtained(name)
  );
}


function dexNavHiddenSpecies(route) {
  if (!hasStoryUnlock("postdex")) {
    return [];
  }

  return [
    ...new Set(
      route.encounters.postdex || []
    )
  ];
}


function dexNavCrown(route) {
  const categories = [
    dexNavCategoryComplete(
      route,
      DEXNAV_LAND_METHODS
    ),

    dexNavCategoryComplete(
      route,
      DEXNAV_FISH_METHODS
    ),

    dexNavCategoryComplete(
      route,
      DEXNAV_SURF_METHODS
    )
  ].filter(value => value !== null);

  /*
    No normal DexNav-recognized category.
    Rock Smash/static encounters alone do not
    produce a DexNav crown.
  */
  if (!categories.length) {
    return null;
  }

  const incomplete =
    categories.filter(done => !done).length;

  let rank = null;

  if (incomplete >= 2) {
    /*
      A crown isn't awarded until at least
      one applicable category is complete.
    */
    if (!categories.some(Boolean)) {
      return null;
    }

    rank = "bronze";
  } else if (incomplete === 1) {
    rank = "silver";
  } else {
    rank = "gold";
  }

  /*
    Platinum:
    all normal encounter categories complete
    AND all post-Primal hidden-only Pokémon
    for this area obtained.
  */
  if (
    rank === "gold" &&
    hasStoryUnlock("postdex")
  ) {
    const hidden =
      dexNavHiddenSpecies(route);

    if (
      hidden.length &&
      hidden.every(name =>
        isSpeciesObtained(name)
      )
    ) {
      rank = "platinum";
    }
  }

  return rank;
}


function dexNavCrownHtml(route) {
  const crown = dexNavCrown(route);

  if (!crown) return "";

  const labels = {
    bronze:"Bronze Crown",
    silver:"Silver Crown",
    gold:"Gold Crown",
    platinum:"Platinum Crown"
  };

  return `
    <span
      class="dexnav-crown crown-${crown}"
      title="${labels[crown]}"
      aria-label="${labels[crown]}"
    >
      ♛
    </span>
  `;
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

    const card =
      document.createElement("article");
    
    const manuallyExpanded =
      manuallyExpandedAreas.has(route.id);
    
    const collapsed =
      complete && !manuallyExpanded;
    
    card.className =
      `route-card ${complete ? "complete" : ""} ${collapsed ? "collapsed" : ""}`;
    
    card.innerHTML = `
      <button
        type="button"
        class="route-title-button"
        aria-expanded="${!collapsed}"
      >
        <div class="route-title-row">
          <div class="route-title-main">
            <div class="route-name-row">
              <h3>${escapeHtml(route.name)}</h3>
              ${dexNavCrownHtml(route)}
            </div>
    
            <div class="route-methods">
              ${methods
                .map(m =>
                  `<span class="method-chip">${METHOD_LABELS[m]}</span>`
                )
                .join("")}
            </div>
          </div>
    
          <div class="route-title-status">
            <div class="route-progress">
              ${caught} / ${species.length}
            </div>
    
            <span class="route-chevron">
              ${collapsed ? "⌄" : "⌃"}
            </span>
          </div>
        </div>
      </button>
    
      <div class="route-card-body">
        <div class="species-grid"></div>
      </div>
    `;

    const titleButton =
      card.querySelector(".route-title-button");
    
    titleButton.addEventListener(
      "click",
      () => {
        if (
          manuallyExpandedAreas.has(route.id)
        ) {
          manuallyExpandedAreas.delete(route.id);
        } else {
          manuallyExpandedAreas.add(route.id);
        }
    
        renderRoutes();
      }
    );

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

function typeChipHtml(type, className="team-type-chip") {
  const background =
    TYPE_COLORS[type] || "#777777";

  const textColor =
    TYPE_TEXT_COLORS[type] || "#ffffff";

  return `
    <span
      class="${className}"
      style="
        background:${background};
        color:${textColor};
        border-color:${background};
      "
    >
      ${escapeHtml(type)}
    </span>
  `;
}

function typeListHtml(types) {
  if (!types.length) {
    return `<span class="muted">None</span>`;
  }

  return types
    .map(type =>
      typeChipHtml(type, "team-type-chip")
    )
    .join("");
}


function pokemonTypeHtml(name) {
  if (!name) return "";

  const types = pokemonTypes(name);

  if (!types.length) {
    return `<span class="muted small">Typing loading…</span>`;
  }

  return types
    .map(type =>
      typeChipHtml(type, "pokemon-type-pill")
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
    datalist =
      document.createElement("datalist");
  
    datalist.id = "pokemonSpeciesList";
  
    document.body.appendChild(datalist);
  }
  
  const eligibleSpecies =
    eligiblePartySpecies();
  
  datalist.innerHTML = eligibleSpecies
    .map(name =>
      `<option value="${escapeAttr(name)}"></option>`
    )
    .join("");

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
      
      if (
        !exact ||
        !isPartySpeciesEligible(exact)
      ) {
        return;
      }

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

      if (
        exact &&
        isPartySpeciesEligible(exact)
      ) {
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

// =========================================================
// POKEDEX
// =========================================================

function currentGameVersion() {
  return state.gameVersion === "OR"
    ? "OR"
    : "AS";
}


function exclusiveVersionForSpecies(name) {
  if (ORAS_VERSION_EXCLUSIVES.OR.includes(name)) {
    return "OR";
  }

  if (ORAS_VERSION_EXCLUSIVES.AS.includes(name)) {
    return "AS";
  }

  return null;
}


function speciesAvailability(name) {
  if (ORAS_NO_NATIVE_SOURCE.includes(name)) {
    return {
      kind:"external",
      label:"External"
    };
  }

  const exclusiveVersion =
    exclusiveVersionForSpecies(name);

  if (!exclusiveVersion) {
    return {
      kind:"both",
      label:"ORAS"
    };
  }

  if (
    exclusiveVersion ===
    currentGameVersion()
  ) {
    return {
      kind:"current-version",
      label:exclusiveVersion
    };
  }

  return {
    kind:"other-version",
    label:`${exclusiveVersion} only`
  };
}


function dexAvailabilityBadgeHtml(name) {
  const availability =
    speciesAvailability(name);

  /*
    Don't clutter every normal ORAS species row.
  */
  if (availability.kind === "both") {
    return "";
  }

  return `
    <span class="dex-source-badge ${availability.kind}">
      ${escapeHtml(availability.label)}
    </span>
  `;
}

function dexOwnedCount(list) {
  return list.filter(name =>
    isSpeciesObtained(name)
  ).length;
}


function renderDex() {
  const list = $("#dexList");

  if (!list) return;

  const hoennOwned =
    dexOwnedCount(HOENN_DEX);

  const hoennRequiredOwned =
    dexOwnedCount(HOENN_DEX_REQUIRED);

  const nationalOwned =
    dexOwnedCount(POKEMON_721);

  const nationalRequiredOwned =
    dexOwnedCount(NATIONAL_DEX_REQUIRED);


  $("#hoennDexCount").textContent =
    `${hoennOwned} / ${HOENN_DEX.length}`;

  $("#hoennDexRequired").textContent =
    `${hoennRequiredOwned} / ${HOENN_DEX_REQUIRED.length} required`;

  $("#hoennDexBar").style.width =
    `${hoennOwned / HOENN_DEX.length * 100}%`;


  $("#nationalDexCount").textContent =
    `${nationalOwned} / ${POKEMON_721.length}`;

  $("#nationalDexRequired").textContent =
    `${nationalRequiredOwned} / ${NATIONAL_DEX_REQUIRED.length} for Shiny Charm`;

  $("#nationalDexBar").style.width =
    `${nationalOwned / POKEMON_721.length * 100}%`;


  $$(".dex-mode-btn").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.dexMode === dexMode
    );
  });

  $$(".dex-filter-btn").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.dexFilter === dexFilter
    );
  });


  const source =
    dexMode === "hoenn"
      ? HOENN_DEX
      : POKEMON_721;


  let entries = source.map((name, index) => ({
    name,
    number:index + 1,
    obtained:isSpeciesObtained(name)
  }));


  if (dexFilter === "obtained") {
    entries = entries.filter(entry =>
      entry.obtained
    );
  }

  if (dexFilter === "missing") {
    entries = entries.filter(entry =>
      !entry.obtained
    );
  }


  const query =
    dexSearch.trim().toLowerCase();

  if (query) {
    entries = entries.filter(entry => {
      const padded =
        String(entry.number).padStart(3, "0");

      return (
        entry.name.toLowerCase().includes(query) ||
        padded.includes(query) ||
        String(entry.number) === query
      );
    });
  }


  $("#dexVisibleCount").textContent =
    `${entries.length} Pokémon shown`;

  list.innerHTML = "";


  entries.forEach(entry => {
    const row =
      document.createElement("label");

    row.className =
      `dex-entry ${entry.obtained ? "obtained" : ""}`;

    const number =
      String(entry.number).padStart(3, "0");

    row.innerHTML = `
      <input
        type="checkbox"
        ${entry.obtained ? "checked" : ""}
      >

      <span class="dex-number">
        #${number}
      </span>

      <span class="dex-name">
        ${escapeHtml(entry.name)}
      </span>

      <span class="dex-status-stack">
        <span class="dex-status">
          ${entry.obtained ? "Obtained" : "Missing"}
        </span>
      
        ${dexAvailabilityBadgeHtml(entry.name)}
      </span>
    `;

    row.querySelector("input")
      .addEventListener("change", e => {
        setSpeciesObtained(
          entry.name,
          e.target.checked
        );

        saveState(
          e.target.checked
            ? `${entry.name} added to Pokédex.`
            : `${entry.name} removed from Pokédex.`
        );
      });

    list.appendChild(row);
  });


  if (!entries.length) {
    list.innerHTML = `
      <div class="empty">
        No Pokémon match this Dex filter.
      </div>
    `;
  }
}

// =========================================================
// SPECIAL ACQUISITIONS
// =========================================================

function specialAcquisitionComplete(id) {
  return !!state.specialAcquisitions[id];
}


function specialAcquisitionsForCurrentVersion() {
  const version =
    currentGameVersion();

  return SPECIAL_ACQUISITIONS.filter(item =>
    item.versions.includes(version)
  );
}


function setSpecialAcquisition(
  id,
  complete
) {
  const item =
    SPECIAL_ACQUISITIONS.find(
      entry => entry.id === id
    );

  if (!item) return;

  /*
    One-time choice groups:
    starter trios, Route 111 fossil, etc.
  */
  if (
    complete &&
    item.choiceGroup
  ) {
    SPECIAL_ACQUISITIONS
      .filter(other =>
        other.choiceGroup ===
          item.choiceGroup &&
        other.id !== item.id
      )
      .forEach(other => {
        delete state.specialAcquisitions[
          other.id
        ];
      });
  }


  if (complete) {
    state.specialAcquisitions[id] = true;

    /*
      Event completion is allowed to add
      Pokédex ownership.
    */
    setSpeciesObtained(
      item.species,
      true
    );
  } else {
    /*
      Event completion is historical state.

      Deliberately DO NOT remove the species
      from obtainedSpecies here: the player
      could also own it through another method.
    */
    delete state.specialAcquisitions[id];
  }
}


function renderSpecialAcquisitions() {
  const root =
    $("#specialAcquisitionList");

  if (!root) return;

  root.innerHTML = "";

  const entries =
    specialAcquisitionsForCurrentVersion();

  Object.entries(
    SPECIAL_ACQUISITION_GROUPS
  ).forEach(([group, title]) => {
    const groupEntries =
      entries.filter(item =>
        item.group === group
      );

    if (!groupEntries.length) return;

    const section =
      document.createElement("details");

    section.className =
      "special-acquisition-group";

    section.innerHTML = `
      <summary>
        <strong>${escapeHtml(title)}</strong>

        <span class="special-group-count">
          ${
            groupEntries.filter(item =>
              specialAcquisitionComplete(
                item.id
              )
            ).length
          }
          /
          ${groupEntries.length}
        </span>
      </summary>

      <div class="special-acquisition-entries"></div>
    `;

    const list =
      section.querySelector(
        ".special-acquisition-entries"
      );

    groupEntries.forEach(item => {
      const done =
        specialAcquisitionComplete(
          item.id
        );

      const row =
        document.createElement("label");

      row.className =
        `special-acquisition ${done ? "done" : ""}`;

      const choiceText =
        item.choiceGroup
          ? `<span class="special-choice-pill">Choose one</span>`
          : "";

      const versionText =
        item.versions.length === 1
          ? `<span class="special-version-pill">${item.versions[0]}</span>`
          : "";

      row.innerHTML = `
        <input
          type="checkbox"
          ${done ? "checked" : ""}
        >

        <div class="special-acquisition-copy">
          <div class="special-acquisition-title">
            <strong>
              ${escapeHtml(item.species)}
            </strong>

            ${choiceText}
            ${versionText}
          </div>

          <div class="special-acquisition-location">
            ${escapeHtml(item.location)}
          </div>

          <div class="special-acquisition-condition">
            ${escapeHtml(item.condition)}
          </div>
        </div>
      `;

      row.querySelector("input")
        .addEventListener(
          "change",
          e => {
            setSpecialAcquisition(
              item.id,
              e.target.checked
            );

            saveState(
              e.target.checked
                ? `${item.species} acquisition completed.`
                : `${item.species} acquisition reopened.`
            );
          }
        );

      list.appendChild(row);
    });

    root.appendChild(section);
  });
}

function availabilitySpeciesHtml(
  species
) {
  return species
    .map(name =>
      `<span class="availability-species">${escapeHtml(name)}</span>`
    )
    .join("");
}


function renderAvailabilityReference() {
  const root =
    $("#availabilityReference");

  if (!root) return;

  const version =
    currentGameVersion();

  const otherVersion =
    version === "AS"
      ? "OR"
      : "AS";

  const currentForms =
    ORAS_FORM_EXCLUSIVES[version];

  const otherForms =
    ORAS_FORM_EXCLUSIVES[otherVersion];


  const speciesCards = species =>
    species
      .map(name => `
        <span class="availability-species">
          ${escapeHtml(name)}
        </span>
      `)
      .join("");


  root.innerHTML = `
    <details class="availability-category" open>
      <summary>
        <span>${version} Native Exclusives</span>
        <span class="availability-category-chevron">⌄</span>
      </summary>

      <div class="availability-category-body">
        <div class="availability-species-list">
          ${speciesCards(
            ORAS_VERSION_EXCLUSIVES[
              version
            ]
          )}
        </div>
      </div>
    </details>


    <details class="availability-category">
      <summary>
        <span>${otherVersion} Native Exclusives</span>
        <span class="availability-category-chevron">⌄</span>
      </summary>

      <div class="availability-category-body">
        <p class="small muted">
          Requires trade or another save
          when playing ${version}.
        </p>

        <div class="availability-species-list">
          ${speciesCards(
            ORAS_VERSION_EXCLUSIVES[
              otherVersion
            ]
          )}
        </div>
      </div>
    </details>


    <details class="availability-category">
      <summary>
        <span>Form Exclusives</span>
        <span class="availability-category-chevron">⌄</span>
      </summary>

      <div class="availability-category-body">
        <div class="availability-form-list">

          ${currentForms.map(item => `
            <span class="availability-species">
              ${escapeHtml(item.species)}
              — ${escapeHtml(item.form)}
              (${version})
            </span>
          `).join("")}

          ${otherForms.map(item => `
            <span class="availability-species">
              ${escapeHtml(item.species)}
              — ${escapeHtml(item.form)}
              (${otherVersion})
            </span>
          `).join("")}

        </div>
      </div>
    </details>


    <details class="availability-category no-native-category">
      <summary>
        <span>No Native ORAS Source</span>
        <span class="availability-category-chevron">⌄</span>
      </summary>

      <div class="availability-category-body">

        <p class="small muted">
          These Pokémon require an external
          trade, transfer, or applicable
          event source.
        </p>

        <div class="availability-species-list">
          ${speciesCards(
            ORAS_NO_NATIVE_SOURCE
          )}
        </div>

      </div>
    </details>
  `;
}
function renderAchievements() {
  const list = $("#achievementList");
  list.innerHTML = "";
  const achievementDone =
    Object.values(state.achievements)
      .filter(Boolean)
      .length;
  
  const achievementCount =
    $("#achievementCount");
  
  if (achievementCount) {
    achievementCount.textContent =
      `${achievementDone} / ${ACHIEVEMENTS.length}`;
  }
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
        <strong>Pokémon obtained:</strong> ${Object.values(pendingImport.obtainedSpecies || {}).filter(Boolean).length}<br>
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

// =========================================================
// DEX CONTROLS
// =========================================================

$$(".dex-mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    dexMode = btn.dataset.dexMode;
    renderDex();
  });
});


$$(".dex-filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    dexFilter = btn.dataset.dexFilter;
    renderDex();
  });
});


$("#dexSearch")?.addEventListener(
  "input",
  e => {
    dexSearch = e.target.value;
    renderDex();
  }
);

render();

POKEMON_TYPES_READY.then(() => {
  renderParty();
  renderTeamAnalysis();
});
