
document.addEventListener("DOMContentLoaded",()=>{
 const id=Number(new URLSearchParams(location.search).get("id")||1);
 const e=getEvents().find(x=>x.id===id);
 const root=document.querySelector("#eventDetail");
 if(!e){root.innerHTML="<div class='empty'>Event not found.</div>";return}
 const percent=Math.min(100,Math.round(e.registered/e.seats*100));
 root.innerHTML=`
 <div class="detail-image">${watercolorIcon(e.category || e.emoji)}</div>
 <div class="detail-info">
  <span class="tag">${e.category}</span>
  <h1>${escapeHtml(e.title)}</h1>
  <div class="meta">📅 ${formatDate(e.date)}<br>⏰ ${e.time}<br>📍 ${escapeHtml(e.venue)}<br>🎟️ ${e.seats-e.registered} seats remaining</div>
  <p style="line-height:1.7">${escapeHtml(e.description)}</p>
  <h3 style="margin:20px 0 8px">Registration progress</h3>
  <div class="progress"><div style="width:${percent}%"></div></div>
  <small>${e.registered} / ${e.seats} seats filled</small>
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
   <button class="btn primary" id="registerBtn">Register Now ↗</button>
   <button class="btn" id="saveBtn">♡ Save to Planner</button>
  </div>
 </div>`;
 document.querySelector("#registerBtn").onclick=()=>{
   const regs=getRegistrations();
   if(regs.some(r=>r.eventId===e.id)){toast("You are already registered for this event.");return}
   regs.push({eventId:e.id,date:new Date().toISOString()});
   localStorage.setItem(REG_KEY,JSON.stringify(regs));
   toast("🎉 You're registered for "+e.title+"!");
 };
 document.querySelector("#saveBtn").onclick=()=>{
   const ids=getSaved(); if(!ids.includes(e.id))ids.push(e.id);
   setSaved(ids); toast("♡ Added to your planner!");
 };
});
