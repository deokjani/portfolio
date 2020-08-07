'use strict';

// Make navber transparent when it is on the top
const navber = document.querySelector('#navbar');
const navberHeight = navber.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navberHeight) {
    navber.cla  ssList.add('navber--dark');
  } else {
    navber.classList.remove('navber--dark');
  }
});
