const menuIcon = document.querySelector('.mob-menu');
const sideNav = document.querySelector('.mobileNav');
const menuLinks = document.querySelectorAll('.menuMobile');

const open = () => {
  sideNav.classList.add('mobileNavActive');
};

const close = () => {
  sideNav.classList.remove('mobileNavActive');
};

menuIcon.addEventListener('click', open);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', close);
});
