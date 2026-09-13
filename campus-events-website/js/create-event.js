
document.addEventListener("DOMContentLoaded",()=>{
 const form=document.querySelector("#createForm"); if(!form)return;
 form.addEventListener("submit",e=>{
   e.preventDefault();
   if(!form.reportValidity())return;
   const fd=new FormData(form);
   const events=getEvents();
   const newEvent={
    id:Date.now(),title:fd.get("title"),category:fd.get("category"),date:fd.get("date"),
    time:fd.get("time"),venue:fd.get("venue"),seats:Number(fd.get("seats")||100),
    registered:0,emoji:fd.get("emoji")||"🎉",description:fd.get("description")
   };
   events.unshift(newEvent);saveEvents(events);form.reset();
   toast("🎉 Event created successfully!");
   setTimeout(()=>location.href=`event-details.html?id=${newEvent.id}`,900);
 });
});
