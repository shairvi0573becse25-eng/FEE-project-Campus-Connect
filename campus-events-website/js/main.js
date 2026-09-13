const ICON_PATHS = {
  code: `<path d="M23 18 14 32l9 14M41 18l9 14-9 14M34 12 30 52"/>`,
  music: `<path d="M24 43V15l27-5v28M24 43c0 5-4 9-9 9s-8-3-8-7 4-7 9-7c3 0 6 1 8 3M51 33c0 5-4 9-9 9s-8-3-8-7 4-7 9-7c3 0 6 1 8 3"/>`,
  rocket: `<path d="M18 39c8 2 22-7 28-23 2-5 2-9 2-12-3 0-7 1-12 3-15 7-24 21-22 29M18 39l-8 8 2-11M25 46l-4 9M19 35l-9-2M31 23l6 6"/><path d="M35 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>`,
  celebration: `<path d="M14 49 49 14M14 49l12-3 23-23-9-9-23 23-3 12ZM34 13l2-6 2 6 6 2-6 2-2 6-2-6-6-2 6-2ZM52 38l2-5 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z"/>`,
  palette: `<path d="M31 11c-12 0-21 8-21 19 0 11 8 20 20 20h3c3 0 5-3 4-6-1-4 1-7 5-7h6c5 0 7-4 5-9-3-10-12-17-22-17Z"/><path d="M20 24h.1M28 19h.1M38 20h.1M44 27h.1"/>`,
  trophy: `<path d="M21 13h22v8c0 11-5 18-11 18s-11-7-11-18v-8ZM21 18h-7v4c0 6 4 10 10 10M43 18h7v4c0 6-4 10-10 10M32 39v9M23 51h18"/>`,
  calendar: `<rect x="11" y="14" width="42" height="39" rx="4"/><path d="M18 10v8M46 10v8M11 25h42M21 32h.1M31 32h.1M41 32h.1M21 41h.1M31 41h.1M41 41h.1"/>`,
  users: `<path d="M25 30a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9 50c0-8 7-13 16-13s16 5 16 13M43 22a7 7 0 1 0 0-14M47 37c7 1 10 6 10 13"/>`,
  wallet: `<path d="M11 19h39a4 4 0 0 1 4 4v23a5 5 0 0 1-5 5H14a5 5 0 0 1-5-5V16a5 5 0 0 1 5-5h27M41 33h13M44 33a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>`,
  checklist: `<rect x="12" y="10" width="40" height="44" rx="5"/><path d="m20 21 3 3 6-7M20 33h18M20 45h18M42 21h.1"/>`,
  bell: `<path d="M19 46h26M24 46v3a8 8 0 0 0 16 0v-3M17 42h30c-5-5-7-9-7-16a9 9 0 1 0-18 0c0 7-2 11-5 16ZM29 9a4 4 0 0 1 8 0"/>`,
  pin: `<path d="M32 55s15-15 15-28a15 15 0 1 0-30 0c0 13 15 28 15 28Z"/><circle cx="32" cy="27" r="5"/>`,
  camera: `<path d="M12 20h9l3-5h16l3 5h9c2 0 4 2 4 4v23c0 2-2 4-4 4H12c-2 0-4-2-4-4V24c0-2 2-4 4-4Z"/><circle cx="32" cy="35" r="9"/><path d="M47 27h.1"/>`,
  masks: `<path d="M10 20c5-7 13-7 20-1v16c-6 8-14 8-20 1V20ZM54 20c-5-7-13-7-20-1v16c6 8 14 8 20 1V20Z"/><path d="M17 25h.1M25 28h.1M39 28h.1M47 25h.1M18 34c2 2 4 2 6 0M40 34c2 2 4 2 6 0"/>`,
  basketball: `<circle cx="32" cy="32" r="21"/><path d="M11 28c12 4 30 4 42 0M16 15c8 8 24 22 32 34M48 15C40 23 24 39 16 49"/>`,
  pencil: `<path d="m14 46 2-10 27-27 8 8-27 27-10 2ZM40 15l8 8M13 52h18"/>`,
  mail: `<rect x="9" y="16" width="46" height="32" rx="4"/><path d="m11 19 21 16 21-16"/>`,
  phone: `<path d="M20 10h8l3 10-5 4c3 6 7 10 13 13l4-5 10 3v8c0 4-3 7-7 7C28 49 15 36 15 18c0-4 2-8 5-8Z"/>`,
  social: `<circle cx="32" cy="32" r="20"/><path d="M23 27v15M23 22h.1M30 42V28c0-4 2-7 6-7 4 0 6 3 6 8v13M30 33h12"/>`,
  mic: `<rect x="24" y="10" width="16" height="29" rx="8"/><path d="M18 29a14 14 0 0 0 28 0M32 43v9M24 52h16"/>`,
  lightbulb: `<path d="M22 38c-3-3-5-7-5-11a15 15 0 1 1 30 0c0 4-2 8-5 11-2 2-3 4-3 7H25c0-3-1-5-3-7ZM25 50h14M27 55h10"/>`,
  default: `<path d="M32 7l6 17 18 1-14 11 5 18-15-10-15 10 5-18L8 25l18-1 6-17Z"/>`
};

const CATEGORY_ICON = {
  "Coding": "code",
  "DJ Night": "music",
  "Music": "music",
  "Hackathon": "rocket",
  "College Fest": "celebration",
  "Workshop": "palette",
  "Sports": "trophy",
  "Open Mic": "mic",
  "Technical": "code",
  "Cultural": "music",
  "Creative": "palette"
};

function resolveIcon(type){
  return CATEGORY_ICON[type] || ICON_PATHS[type] ? (CATEGORY_ICON[type] || type) : "default";
}

function watercolorIcon(type, extraClass = ""){
  const key = resolveIcon(type);
  return `<svg class="watercolor-svg ${extraClass}" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[key] || ICON_PATHS.default}</svg>`;
}

function hydrateWatercolorIcons(){
  document.querySelectorAll(".watercolor-icon[data-icon]").forEach(el=>{
    el.innerHTML = watercolorIcon(el.dataset.icon);
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-btn"), links=document.querySelector(".nav-links");
  if(menu) menu.addEventListener("click",()=>links.classList.toggle("open"));
  const path=location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{
    if(a.getAttribute("href")===path)a.classList.add("active");
  });
  const y=document.querySelector("#year"); if(y)y.textContent=new Date().getFullYear();
  hydrateWatercolorIcons();
});
