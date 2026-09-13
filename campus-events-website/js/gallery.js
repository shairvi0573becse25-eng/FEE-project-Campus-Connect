
document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.querySelector("#galleryGrid");
 if(!grid)return;
 const photos=[
  ["celebration","College Fest"],["music","DJ Night"],["code","Hackathon"],["trophy","Sports"],["mic","Music"],
  ["rocket","Hackathon"],["palette","Workshop"],["celebration","College Fest"],["basketball","Sports"],["music","Music"],
  ["lightbulb","Coding"],["music","DJ Night"]
 ];
 grid.innerHTML=photos.map(p=>`<div class="gallery-item" data-category="${p[1]}"><div class="gallery-icon watercolor-icon">${watercolorIcon(p[0], 'gallery-svg')}</div><span>${p[1]} • Campus Memories</span></div>`).join("");
 document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");
  const cat=b.dataset.category;document.querySelectorAll(".gallery-item").forEach(x=>x.style.display=cat==="All"||x.dataset.category===cat?"block":"none");
 }));
});
