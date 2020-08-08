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

  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});
