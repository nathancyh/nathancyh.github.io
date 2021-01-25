"use strict";
const nav = document.getElementById("navi");
const btnSwit = document.getElementById("btnSwitch");
/////////////////////////////SCROLL REVEAL
ScrollReveal().reveal(".about");
ScrollReveal().reveal(".skillrow1", { delay: 250 });
ScrollReveal().reveal(".work_box", { delay: 250 });
ScrollReveal().reveal("#contact", { delay: 200 });
//////////////////////////////NAV SWITCHER
// let switcher = function () {
//   if (nav.classList.contains("navbar-dark")) {
//     nav.classList.remove("navbar-dark");
//     nav.classList.remove("bg-dark");
//     nav.classList.add("navbar-light");
//     nav.classList.add("bg-light");
//   } else {
//     nav.classList.remove("navbar-light");
//     nav.classList.remove("bg-light");
//     nav.classList.add("navbar-dark");
//     nav.classList.add("bg-dark");
//   }
// };

// btnSwit.addEventListener("click", switcher);

//////////////////////////////// STICKY NAV
const header = document.getElementById("home");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-65px",
});

headerObserver.observe(header);

/////////////////////////////////TYPEWRITER
const typewriter = document.querySelector(".typewriter");
const aboutcontent = document.querySelector(".about-content");

typewriter.addEventListener("animationend", function (e) {
  if (e.animationName === "typing") {
    aboutcontent.classList.remove("hidden");
    aboutcontent.classList.add("animate__animated");
    aboutcontent.classList.add("animate__fadeIn");
    this.classList.add("hidden");
  }
});
///////////////////////////////// Tabs
const tabs = document.querySelectorAll(".skills__tab");
const tabsContainer = document.querySelector(".skills__tab-container");
const tabsContent = document.querySelectorAll(".skills__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".skills__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("skills__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("skills__content--active"));

  // Activate tab
  clicked.classList.add("skills__tab--active");

  // Activate content area
  document
    .querySelector(`.skills__content--${clicked.dataset.tab}`)
    .classList.add("skills__content--active");
});
