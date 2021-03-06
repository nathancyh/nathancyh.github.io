"use strict";
const nav = document.getElementById("navi");
//////////////////////////////NAV SWITCHER
//const btnSwit = document.getElementById("btnSwitch");
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
    $(nav).fadeIn(220);
  } else {
    $(nav).fadeOut(220);
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

//////////////////////MODAL
const modal = document.querySelector(".modal");
const overlayM = document.querySelector(".overlayM");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");

const openModal = function () {
  console.log("OPEN MODAL");
  $(modal).fadeIn();
  $(overlayM).fadeIn();
  $(nav).fadeOut();
};

const closeModal = function () {
  console.log("CLOSE MODAL");
  $(modal).fadeOut();
  $(overlayM).fadeOut();
  $(nav).fadeIn();
};

btnsOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlayM.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////NAV ADJEUSTMENT
$(".nav-link").click(function () {
  var divId = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(divId).offset().top - 240,
    },
    100
  );
});
