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
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SHOW SCROLL DOWN ===============*/
function scrollDown() {
  const header = document.getElementById("header-down");

  if (this.scrollY >= 600) {
    header.classList.remove("dis-none");
    header.classList.add("header-down");
  } else {
    header.classList.remove("header-down");
    header.classList.add("dis-none");
  }
}
window.addEventListener("scroll", scrollDown);

function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let title = document.getElementById("title").value;
  let desc = document.getElementById("comment").value;
  Email.send({
    // Host: "mail.sd-bo.com",
    // Username: "bot@sd-bo.com",
    // Password: "SDB0livia",
    // To: "jexeni@sd-bo.com",
    // From: email,
    // Subject: title,
    // Body: desc,

    Host: "smtp.gmail.com",
    Username: "javierenriquevillagomezexeni98@gmail.com",
    Password: "xgoxzevamsenrsua",
    To: "javierenriquevillagomezexeni98@gmail.com",
    From: email,
    Subject: title,
    Body: desc,
  }).then((message) => alert(message));
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  this.setTimeout(() => {
    loader.style.display = "none";
  }, 1800);
});

const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sec.forEach((section) => {
    const sectionTop = section.offsetTop;    
    if (scrollY >= (sectionTop + 150)) {
      current = section.getAttribute("id");
    }
  });

  li.forEach((ltx) => {
    ltx.classList.remove("active");
    if (ltx.classList.contains(current)) {
      ltx.classList.add("active");
    }
  });
});
