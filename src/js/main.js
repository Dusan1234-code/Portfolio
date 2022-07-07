let hamburger = document.querySelector(".js-hamburger");
let header = document.querySelector(".js-header");
let message = document.querySelector(".js-job");
let body = document.querySelector(".js-body");
let navLinks = document.querySelectorAll(".js-header-link");
let arrowToTop = document.querySelector(".js-arrow");
let gmailBtn = document.querySelector(".js-gmail");
let main = document.querySelector(".js-main");


const productContainers = [...document.querySelectorAll('.project__wrapper')];
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");


// CAROUSEL 
productContainers.forEach((item,i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;
  
  
    prev.addEventListener("click",() => {
      item.scrollLeft -= containerWidth;
    })

    next.addEventListener("click",() => {
        item.scrollLeft += containerWidth;
      })
  })

 // COPY MAIL
gmailBtn.addEventListener("click",()=> {
    navigator.clipboard.writeText("dusangacesa727@gmail.com");
    gmailBtn.classList.add("copingMail");
    setTimeout(() => {
        gmailBtn.classList.remove("copingMail")
    }, 2100);
})

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

// WRITTING ANIMATION
let messageArray = ["Frontened developer"];
let textPosition = 0;
typeWritter = () => {
    message.innerHTML = messageArray[0].substring(0, textPosition) + `<span class="blink"></span>`;
    if(textPosition ++ != messageArray[0].length) {
        setTimeout(typeWritter, 100)
    }
}
window.addEventListener("load",()=> typeWritter());

// ARROW TO TOP
arrowToTop.addEventListener("click",()=>{
    window.scrollTo(0,0);
})
const observer = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(!ent.isIntersecting) {
        arrowToTop.classList.add("arrow-visible");
    }
    if(ent.isIntersecting) {
        arrowToTop.classList.remove("arrow-visible");
    }
}, {
    root: null,
    threshold: 0
})
observer.observe(main);

