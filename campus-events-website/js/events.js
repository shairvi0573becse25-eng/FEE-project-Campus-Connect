
document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.querySelector("#eventsGrid"), search=document.querySelector("#eventSearch");
 if(!grid)return;
 let current="All";
 function render(){
   const q=(search?.value||"").toLowerCase();
   let arr=getEvents().filter(e=>{
     const matchesCat=current==="All" || e.category===current;
     const matchesSearch=[e.title,e.category,e.venue,e.description].join(" ").toLowerCase().includes(q);
     return matchesCat&&matchesSearch;
   });
   grid.innerHTML=arr.length?arr.map(eventCard).join(""):`<div class="empty" style="grid-column:1/-1">No events found. Try another search or category.</div>`;
 }
 document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{
   document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));
   b.classList.add("active");current=b.dataset.category;render();
 }));
 search?.addEventListener("input",render);
 render();
});

// Read an optional category from the URL, e.g. events.html?category=Hackathon
document.addEventListener("DOMContentLoaded",()=>{
 const params=new URLSearchParams(location.search), cat=params.get("category");
 if(cat){
   const btn=[...document.querySelectorAll(".filter")].find(b=>b.dataset.category===cat);
   if(btn) btn.click();
 }
});
