
const EVENTS_KEY = "campusEvents";
const SAVED_KEY = "savedEvents";
const REG_KEY = "registrations";

const defaultEvents = [
 {id:1,title:"Electro Wave 2K26",category:"DJ Night",date:"2026-09-24",time:"19:00",venue:"Main Auditorium",seats:500,registered:400,emoji:"🎧",description:"A high-energy campus DJ night with music, lights, dance and food."},
 {id:2,title:"Code Storm",category:"Coding",date:"2026-09-18",time:"09:00",venue:"Innovation Lab",seats:200,registered:126,emoji:"💻",description:"A competitive coding contest designed to test speed, logic and problem-solving."},
 {id:3,title:"Innovate Hack",category:"Hackathon",date:"2026-10-03",time:"10:00",venue:"Block C Lab 4",seats:300,registered:218,emoji:"🚀",description:"Build a useful prototype with your team and pitch it to the judges."},
 {id:4,title:"Fiesta '26",category:"College Fest",date:"2026-10-12",time:"10:00",venue:"Campus Ground",seats:2000,registered:1430,emoji:"🎉",description:"The annual college fest featuring music, competitions, food and cultural performances."},
 {id:5,title:"Design Thinking Workshop",category:"Workshop",date:"2026-09-15",time:"14:00",venue:"Seminar Hall",seats:120,registered:78,emoji:"🎨",description:"An interactive workshop on ideation, prototyping and creative problem solving."},
 {id:6,title:"Inter-College Basketball",category:"Sports",date:"2026-09-28",time:"16:00",venue:"Sports Complex",seats:800,registered:540,emoji:"🏀",description:"Cheer for your college team in an action-packed inter-college tournament."},
 {id:7,title:"Open Mic Evening",category:"Music",date:"2026-09-20",time:"18:00",venue:"Amphitheatre",seats:350,registered:210,emoji:"🎤",description:"Poetry, music, comedy and performances by students."},
 {id:8,title:"Robotics Challenge",category:"Coding",date:"2026-10-08",time:"11:00",venue:"Robotics Lab",seats:150,registered:91,emoji:"🤖",description:"Design, build and compete with your team's robot."}
];

const clubs = [
 {name:"Coding Club",icon:"💻",desc:"Create. Code. Conquer.",type:"Technical"},
 {name:"Music Club",icon:"🎵",desc:"Feel the beat. Live the music.",type:"Cultural"},
 {name:"Photography Club",icon:"📷",desc:"Capture moments. Create stories.",type:"Creative"},
 {name:"Drama Club",icon:"🎭",desc:"Act. Perform. Inspire.",type:"Cultural"},
 {name:"Sports Club",icon:"🏀",desc:"Play hard. Win together.",type:"Sports"},
 {name:"Design Club",icon:"🎨",desc:"Imagine. Design. Create.",type:"Creative"}
];

function getEvents(){
  const saved = JSON.parse(localStorage.getItem(EVENTS_KEY) || "null");
  return saved && Array.isArray(saved) ? saved : defaultEvents;
}
function saveEvents(events){localStorage.setItem(EVENTS_KEY,JSON.stringify(events))}
function getSaved(){return JSON.parse(localStorage.getItem(SAVED_KEY)||"[]")}
function setSaved(ids){localStorage.setItem(SAVED_KEY,JSON.stringify(ids))}
function getRegistrations(){return JSON.parse(localStorage.getItem(REG_KEY)||"[]")}
function formatDate(date){return new Date(date+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}
function eventCard(e){
  return `<article class="card">
    <div class="card-img">${watercolorIcon(e.category || e.emoji)}</div>
    <div class="card-body">
      <span class="tag">${e.category}</span>
      <h3>${escapeHtml(e.title)}</h3>
      <div class="meta">📅 ${formatDate(e.date)}<br>⏰ ${e.time}<br>📍 ${escapeHtml(e.venue)}</div>
      <a class="btn small" href="event-details.html?id=${e.id}">View Details →</a>
    </div>
  </article>`;
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function toast(msg){
 const t=document.querySelector("#toast"); if(!t)return;
 t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600);
}
