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
let counters = document.querySelectorAll(".about__counter");
let media = window.matchMedia("(min-width: 1140px)");

// LOADER ANIMATION
document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'interactive') {
         document.querySelector('.content').style.display="none";
         body.classList.add("loader-b");
    } else if (state == 'complete') {
           document.querySelector('.loader').style.display="none";
           document.querySelector('.content').style.display="block";
           typeWritter();
           body.classList.remove("loader-b");
    }
}

// CAROUSEL 
if(media.matches) {
productContainers.forEach((item) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;
    prev.addEventListener("click",() => {
        prevSpan.classList.add("disabled");
        nextSpan.classList.remove("disabled");
        item.scrollLeft -= containerWidth;
    })
    next.addEventListener("click",() => {
        prevSpan.classList.remove("disabled");
        nextSpan.classList.add("disabled");
        item.scrollLeft += containerWidth;
      })
  })
}
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

// WRITTING ANIMATION
let messageArray = ["Frontened developer"];
let textPosition = 0;
typeWritter = () => {
    message.innerHTML = messageArray[0].substring(0, textPosition) + `<span class="blink"></span>`;
    if(textPosition ++ != messageArray[0].length) {
        setTimeout(typeWritter, 100)
    }
}
// window.addEventListener("load",()=> typeWritter());

// ARROW TO TOP
arrowToTop.addEventListener("click",()=>{
    window.scrollTo(0,0);
})
option = {threshold: 0};
const observer = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(!ent.isIntersecting) {
        arrowToTop.classList.add("arrow-visible");
    }
    if(ent.isIntersecting) {
        arrowToTop.classList.remove("arrow-visible");
    }
}, option)
observer.observe(main);

// NUMBER COUNTER 
let speed = 80;
let optionTwo = {threshold: 0.1};
const observerTwo = new IntersectionObserver((entries,observe) => {
    let entry = entries[0];
    console.log(entry.isIntersecting);
    if(entry.isIntersecting == false) {
            counters.forEach((counter)=>{
                counter.innerText = "0";
                let updateNumber = () => {
                  const target = +counter.getAttribute("data-target");
                  const c = +counter.innerText;
                  const increment = target / speed;
                  if(c < target){
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateNumber, 90);
                  }
                }
                updateNumber();
            })
            observerTwo.unobserve(main);
}
}, optionTwo)
observerTwo.observe(main);

// 




