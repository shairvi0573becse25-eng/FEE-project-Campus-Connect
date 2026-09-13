
document.addEventListener("DOMContentLoaded",()=>{
 const saved=getSaved(), events=getEvents();
 const list=document.querySelector("#savedList");
 const items=events.filter(e=>saved.includes(e.id));
 list.innerHTML=items.length?items.map(e=>`<div class="saved-item"><span>♡ <b>${escapeHtml(e.title)}</b><br><small>${formatDate(e.date)} • ${escapeHtml(e.venue)}</small></span><a class="btn small" href="event-details.html?id=${e.id}">Open</a></div>`):"<div class='empty'>No saved events yet. Save an event from its details page.</div>";
 const registered=getRegistrations().map(r=>r.eventId);
 const reg=document.querySelector("#registeredCount"); if(reg)reg.textContent=registered.length;
 const count=document.querySelector("#savedCount"); if(count)count.textContent=items.length;
});
