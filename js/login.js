let lName=document.getElementById("Mobile-number");
let lpassword=document.getElementById("Password");
let form=document.querySelector("form");

form.addEventListener("submit",e=>{
  e.preventDefault();
  let lNameValue=lName.value.trim();
  let lpasswordValue=lpassword.value.trim();

  let name=localStorage.getItem("fbName");
  let password=localStorage.getItem("fbPassword");

  if (lNameValue===name && lpasswordValue===password){
    window.location.href="fbhome.html"
  }
})