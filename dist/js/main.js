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


// CAROUSEL 
productContainers.forEach((item) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;
    prev.addEventListener("click",() => {
      item.scrollLeft -= containerWidth;
      prevSpan.classList.add("disabled");
      nextSpan.classList.remove("disabled");
    })
    next.addEventListener("click",() => {
        prevSpan.classList.remove("disabled");
        nextSpan.classList.add("disabled");
        item.scrollLeft += containerWidth;
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

// NUMBER COUNTER 
let speed = 20;
const observerTwo = new IntersectionObserver(entries => {
    let entry = entries[0];
    let times = 0;
    if(times == 0) {
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
    }
    times++;
    console.log(times);
}
}, {
    root: null,
    threshold: 0.2
})
observerTwo.observe(main);



