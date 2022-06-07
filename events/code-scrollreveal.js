/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false,
  mobile: false
});

sr.reveal(`.title`, { delay: 600 });
sr.reveal(`.info`, { delay: 700 });
sr.reveal(`.home__img`, { delay: 900, origin: "top" });

sr.reveal(`.contact`, { origin: "top", interval: 100 });
sr.reveal(`.isoimage, .video-info, .glass, .glass-suport`, { origin: "left", interval: 100 });
sr.reveal(`.article, .card-glass`, { origin: "right" });
sr.reveal(`.case__img`, { origin: "top" });
sr.reveal(`.case__data`);
