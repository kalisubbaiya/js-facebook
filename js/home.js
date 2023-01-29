let cont=document.querySelector(".cont");

let img=document.createElement("img");
cont.appendChild(img);
img.src="images/user.png";

let name1=localStorage.getItem("fbUser");
console.log(name1);

let uName=document.createElement("span");
uName.setAttribute("id","span");
uName.innerText=`${name1}`;
cont.appendChild(uName);


let posts=document.querySelector(".posts");
let textarea=document.querySelector("textarea");
let postDate=new Date();

function createPost(){
    let textareaValue=textarea.value.trim();
    let postIdValue=cont.innerHTML;
    let postSecValue=textareaValue;
    let dateTimeValue=postDate.toLocaleString();

    if (textareaValue!==""){
        posts.innerHTML+=`<div id="userId">${postIdValue}</div>
        <div id="postSec">${postSecValue}</div>
        <div class="update">
            <div id="dateTime">${dateTimeValue}</div>
            <div class="edit"><span onclick="updatePost(this)">Edit</span>
                            <span onclick="delPost(this)">Delete</span></div>
        </div>`
        
        textarea.value="";
    }
}

function updatePost(e){
    textarea.value=e.parentNode.parentNode.previousElementSibling.innerText;
    e.parentNode.parentNode.parentNode.remove();
}
function delPost(e){
    e.parentNode.parentNode.previousElementSibling.previousElementSibling.remove();
    e.parentNode.parentNode.previousElementSibling.remove();
    e.parentNode.parentNode.remove();
}