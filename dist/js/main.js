"use strict";

let hamburger = document.querySelector(".js-hamburger");
let header = document.querySelector(".js-header");
let message = document.querySelector(".js-job");
let body = document.querySelector(".js-body");
let navLinks = document.querySelectorAll(".js-header-link");
let arrowToTop = document.querySelector(".js-arrow");
let gmailBtn = document.querySelector(".js-gmail");
let main = document.querySelector(".js-main");
let socialHeading = document.querySelector(".js-social");
const productContainers = [...document.querySelectorAll('.js-project-wrapper')];
let prev = document.querySelector(".js-prev");
let next = document.querySelector(".js-next");
let prevSpan = document.querySelector(".js-prev-span");
let nextSpan = document.querySelector(".js-next-span");
let counters = document.querySelectorAll(".js-about-counter");
const aboutWrapper = document.querySelector(".js-about-wrapper");
const MEDIAMOBILE = window.matchMedia("(max-width: 820px)");
let timeline = document.querySelector(".js-timeline");
const development = document.querySelector(".js-city");


// LOADER ANIMATION
document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'interactive') {
         document.querySelector('.content').style.display="none";
         body.classList.add("loader-b");
    } else if (state == 'complete') {
        setTimeout(() => {
            document.querySelector('.loader').style.display="none";
           document.querySelector('.content').style.display="block";
           typeWritter();
           body.classList.remove("loader-b");
        }, 1500);
    }
}

// CAROUSEL 
productContainers.forEach((item) => {
    let numbOfProjects = item.children.length;
    prev.disabled = true;
    let click = 0;
    prev.addEventListener("click",() => {
        let containerDimension = item.getBoundingClientRect();
        let containerWidth = containerDimension.width;
        item.scrollLeft -= containerWidth;
        click--;
        if(MEDIAMOBILE.matches){
            if(click == 0) {
                prev.disabled = true;
            } 
            if(click <= numbOfProjects - 2) {
                next.disabled = false;
            }
            else {
                prev.disabled = false;
            }
        } else {
            prev.disabled = true;
            next.disabled = false;
        }
    })
    next.addEventListener("click",() => {
        let containerDimension = item.getBoundingClientRect();
        let containerWidth = containerDimension.width;
        item.scrollLeft += containerWidth;
        click++;
        if(MEDIAMOBILE.matches){
            if(click == numbOfProjects - 1) {
                next.disabled = true;
            } else {
                prev.disabled = false;
                next.disabled = false;
            }
        } else {
            next.disabled = true;
            prev.disabled = false;
        }
      })
})

 // COPY MAIL
gmailBtn.addEventListener("click",()=> {
    navigator.clipboard.writeText("dusangacesa727@gmail.com");
    socialHeading.classList.add("copingMail");
    setTimeout(() => {
        socialHeading.classList.remove("copingMail")
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

// TYPING ANIMATION
let messageArray = ["Frontened developer"];
let textPosition = 0;
let typeWritter = () => {
    message.innerHTML = messageArray[0].substring(0, textPosition) + `<span class="blink"></span>`;
    if(textPosition ++ != messageArray[0].length) {
        setTimeout(typeWritter, 100)
    }
}

// ARROW TO TOP
arrowToTop.addEventListener("click",()=>{
    window.scrollTo(0,0);
})
const observer = new IntersectionObserver(entries=>{
    const ent = entries[0];
    if(!ent.isIntersecting) {
        arrowToTop.classList.add("arrow-visible");
    }
    if(ent.isIntersecting) {
        arrowToTop.classList.remove("arrow-visible");
    }
}, {
    root: null,
    threshold:0
})
observer.observe(main);

// NUMBER COUNTER 
let speed = 80;
const observerTwo = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if(entry.isIntersecting) {
        counters.forEach((counter)=>{
            counter.innerText = "0";
            let updateNumber = () => {
              const target = +counter.getAttribute("data-target");
              const c = +counter.innerText;
              const increment = target / speed;
              if(c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateNumber, 120);
              }
            }
            updateNumber();
            observerTwo.disconnect();
        })
    }
}, {
    threshold: 1
})
observerTwo.observe(aboutWrapper);

// LINE FULLING
const observerLine = new IntersectionObserver((views)=>{
    const view = views[0];
    if(view.isIntersecting) {
        timeline.classList.add("fulling");
        observerLine.unobserve(development);
    }  
}, {
    root:null,
    threshold: 1
})
observerLine.observe(development)