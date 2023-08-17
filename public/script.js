// script for ul to hide or show 
let ul = document.getElementById("ul");

function hide() {
  ul.classList.toggle("active");
}

// for scrolling

let nav = document.querySelector('nav').offsetHeight

document.documentElement.style.setProperty('--scroll-padding', nav + 'px')