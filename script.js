// grabing links
const homeLink = document.getElementById('home-link');
const workLink = document.getElementById('work-link');
const contactLink = document.getElementById('contact-link');
const twitLink = document.getElementById('twit-link');

// grabing individual section 
const home = document.getElementById('home');
const work = document.getElementById('work');
const contact= document.getElementById('contact');
// const mainHome = document.getElementById('main-home');

// eventlistener 

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
  
    homeLink.classList.add("color");
    workLink.classList.remove("color");
    contactLink.classList.remove("color");
    twitLink.classList.remove("color");

    home.classList.add("flex");
    work.classList.remove("visible");
    contact.classList.remove("visible");
})

workLink.addEventListener('click', (e) => {
    e.preventDefault();
    // for adding and removing color
    workLink.classList.add("color");
    homeLink.classList.remove("color");
    contactLink.classList.remove("color");
    twitLink.classList.remove("color");

    // for displaying sections
    work.classList.add("visible");
    home.classList.remove("flex");
    contact.classList.remove("visible");
})
contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    // for adding and removing color
    contactLink.classList.add("color");
    workLink.classList.remove("color");
    homeLink.classList.remove("color");
    twitLink.classList.remove("color");

    // for displaying sections
    contact.classList.add("visible");
    work.classList.remove("visible");
    home.classList.remove("flex");
   
})

// twitLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     twitLink.classList.add('visible');
//     home.classList.add('visible');
//     work.classList.add('invisible');
//     contact.classList.add('invisible');
// })
