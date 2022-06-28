let hamburger = document.querySelector(".js-hamburger");
let header = document.querySelector(".js-header");
let message = document.querySelector(".js-job");
let body = document.querySelector(".js-body");
let navLinks = document.querySelectorAll(".js-header-link");
var tablet = window.matchMedia("(max-width: 1140px)");

// HAMBURGER MENU OPENS UP/CLOSES
hamburger.addEventListener("click",()=>{
    header.classList.toggle("active");
    body.classList.toggle("body--scrollDisabled");
})

// NAVLINKS CLOSING 
navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        header.classList.remove("active");
        body.classList.remove("body--scrollDisabled");

    })
})

// TypeWriting main
let messageArray = ["Frontened developer"];
let textPosition = 0;
let speed = 100;
typeWritter = () => {
    message.innerHTML = messageArray[0].substring(0, textPosition) + `<span class="end">\u25ae</span>`;
    if(textPosition ++ != messageArray[0].length) {
        setTimeout(typeWritter,speed)
    }
}
window.addEventListener("load",()=> typeWritter());

// SEND MAIL
