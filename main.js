'use strict';

// Make navber transparent when it is on the top
const navber = document.querySelector('#navbar');
const navberHeight = navber.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navberHeight) {
    navber.classList.add('navber--dark');
  } else {
    navber.classList.remove('navber--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
