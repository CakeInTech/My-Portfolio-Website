const menuIcon = document.querySelector('.mob-menu');
const sideNav = document.querySelector('.mobileNav');
const menuLinks = document.querySelectorAll('.menuMobile');
const main = document.querySelector('.main');

const open = () => {
  sideNav.classList.add('mobileNavActive');
  main.style.opacity = '0.2';
  main.style.backdropfilter = 'blur(8px)';
};

const close = () => {
  sideNav.classList.remove('mobileNavActive');
  main.style.opacity = '1';
};

menuIcon.addEventListener('click', open);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', close);
});
