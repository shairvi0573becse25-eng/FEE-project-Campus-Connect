
document.addEventListener("DOMContentLoaded",()=>{
 const login=document.querySelector("#loginForm"), reg=document.querySelector("#registerForm");
 login?.addEventListener("submit",e=>{
  e.preventDefault(); if(!login.reportValidity())return;
  localStorage.setItem("loggedIn","true");toast("Welcome back! Login successful.");
 });
 reg?.addEventListener("submit",e=>{
  e.preventDefault(); if(!reg.reportValidity())return;
  const p=reg.querySelector('[name="password"]').value;
  const cp=reg.querySelector('[name="confirmPassword"]').value;
  if(p!==cp){toast("Passwords do not match.");return}
  localStorage.setItem("userName",reg.querySelector('[name="name"]').value);
  localStorage.setItem("loggedIn","true");toast("🎉 Account created successfully!");
 });
});
