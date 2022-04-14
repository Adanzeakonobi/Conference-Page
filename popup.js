const crossMenu = document.querySelector('.hamburger-btn');
const menuCont = document.querySelector('.navbar-cont');
const crossMenu2 = document.querySelector('.close-button');

function openMobMenu() {
  menuCont.classList.add('menu-open');
}

crossMenu.addEventListener('click', openMobMenu);

function closeMobMenu() {
  menuCont.classList.remove('menu-open');
}

crossMenu2.addEventListener('click', closeMobMenu);