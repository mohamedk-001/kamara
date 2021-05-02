var iconbtn =document.querySelector(".iconbtn");
var closebtn =document.querySelector(".closebtn");
var navbar=document.querySelector(".navbar");
iconbtn.addEventListener("click",function(){
    navbar.style.width="200px";
})
closebtn.addEventListener("click",()=>{
    navbar.style.width="";
})