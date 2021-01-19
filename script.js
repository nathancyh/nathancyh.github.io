"use strict";
const getNavi = document.getElementById("navi");
const btnSwit = document.getElementById("btnSwitch");

let switcher = function () {
  if (getNavi.classList.contains("navbar-dark")) {
    getNavi.classList.remove("navbar-dark");
    getNavi.classList.remove("bg-dark");
    getNavi.classList.add("navbar-light");
    getNavi.classList.add("bg-light");
  } else {
    getNavi.classList.remove("navbar-light");
    getNavi.classList.remove("bg-light");
    getNavi.classList.add("navbar-dark");
    getNavi.classList.add("bg-dark");
  }
};

btnSwit.addEventListener("click", switcher);
