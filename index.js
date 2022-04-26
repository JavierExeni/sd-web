const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     reset: true
// })

// sr.reveal(`.title`,{delay: 600})
// sr.reveal(`.info`,{delay: 700})
// sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

// sr.reveal(`.contact`,{origin: 'top', interval: 100})
// sr.reveal(`.isoimage, .video-info, .glass`,{origin: 'left', interval: 100})
// sr.reveal(`.article, .card-glass`,{origin: 'right'})
// sr.reveal(`.case__img`,{origin: 'top'})
// sr.reveal(`.case__data`)