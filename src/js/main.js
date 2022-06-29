let hamburger = document.querySelector(".js-hamburger");
let header = document.querySelector(".js-header");
let message = document.querySelector(".js-job");
let body = document.querySelector(".js-body");
let navLinks = document.querySelectorAll(".js-header-link");
let arrowToTop = document.querySelector(".js-arrow");
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

// ARROW TO TOP
arrowToTop.addEventListener("click",()=>{
    window.scrollTo(0,0);
})
let about = document.getElementById("about");


const observer = new IntersectionObserver(entries =>{
    console.log(entries[0]);
    if(entries[0].isIntersecting) {
        arrowToTop.classList.add("arrow-visible")
    } 
},{
    rootMargin:"0px",
    root: null,
    threshold: 1.0
});

observer.observe(about);

