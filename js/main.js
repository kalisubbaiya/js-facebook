let cust=document.getElementById("cust");
let fem=document.getElementById("fem");
let mal=document.getElementById("mal");

cust.addEventListener("click",function(){
  let custom=document.querySelector(".custom");
  custom.style.display="block";
});
mal.addEventListener("click",function(){
  let custom=document.querySelector(".custom");
  custom.style.display="none";
});
fem.addEventListener("click",function(){
  let custom=document.querySelector(".custom");
  custom.style.display="none";
});

let form = document.querySelector("form");
let fName= document.getElementById("fName");
let sName= document.getElementById("sName");
let mobile= document.getElementById("mobile");
let password= document.getElementById("password");
let date= document.getElementById("date");
let month= document.getElementById("month");
let year= document.getElementById("year");
let female= document.getElementById("female");
let male= document.getElementById("male");
let custom= document.getElementById("custom");
let ico= document.querySelector(".bi-exclamation-circle-fill");

let err1= document.querySelector(".err1");
let err2= document.querySelector(".err2");
let err3= document.querySelector(".err3");
let err4= document.querySelector(".err4");
let err5= document.querySelector(".err5");
let err6= document.querySelector(".err6");


form.addEventListener("submit", (e)=>{
  e.preventDefault();
  handleInput();
});

function handleInput(){
  let fNameValue= fName.value.trim();
  let sNameValue= sName.value.trim();
  let mobileValue= mobile.value.trim();
  let passwordValue= password.value.trim();

  if (fNameValue === "") {
    setErrorFor(fName);
    err1.style.display="block";  
  } else {
    setSuccessFor(fName);
  }

  if (sNameValue === "") {
    setErrorFor(sName);
    err2.style.display="block";  
  } else {
    setSuccessFor(sName);
  }

  if (mobileValue === "") {
    setErrorFor(mobile);
    err3.style.display="block";  
  } else {
    setSuccessFor(mobile);
  }

  if (passwordValue === "") {
    setErrorFor(password);
    err4.style.display="block";  
  } else {
    setSuccessFor(password);
  }

  if(fNameValue!="" && sNameValue!="" && mobileValue!="" && passwordValue!=""){
    window.location.href="success.html";
  }
}

function setErrorFor(input) {
  input.style.border="1px solid red";
}

function setSuccessFor(input) {
  input.style.border="1px solid #ccc";  
}

form.addEventListener("click",function(){
  localStorage.setItem("fbUser",fName.value);
  localStorage.setItem("fbName",mobile.value);
  localStorage.setItem("fbPassword",password.value);  
});


