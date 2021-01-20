"use strict";
const nav = document.getElementById("navi");
const btnSwit = document.getElementById("btnSwitch");

let switcher = function () {
  if (nav.classList.contains("navbar-dark")) {
    nav.classList.remove("navbar-dark");
    nav.classList.remove("bg-dark");
    nav.classList.add("navbar-light");
    nav.classList.add("bg-light");
  } else {
    nav.classList.remove("navbar-light");
    nav.classList.remove("bg-light");
    nav.classList.add("navbar-dark");
    nav.classList.add("bg-dark");
  }
};

btnSwit.addEventListener("click", switcher);

//////////////////////////////
// STICKY NAV
const header = document.getElementById("home");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.remove("sticky");
  } else {
    nav.classList.add("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-65px",
});

headerObserver.observe(header);
