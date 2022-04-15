const crossMenu = document.querySelector('.hamburger-btn');
const menuCont = document.querySelector('.navbar-cont');
const crossMenu2 = document.querySelector('.close-button');
const menuOpen = document.querySelector('.menu-open')

function openMobMenu() {
  menuOpen.style.display = 'block'
  // menuCont.classList.add('menu-open');
}

crossMenu.addEventListener('click', openMobMenu);

function closeMobMenu() {
  menuOpen.style.display = 'none'
  // menuCont.classList.remove('menu-open');
}

crossMenu2.addEventListener('click', closeMobMenu);



// mobile screen            | desktop view
// navbar to be in column   | navbar to be in row
// default is hidden        | default is visible
// clicking hamburger opens
//  navbar
// clicking on close button 
//  closes navbar




