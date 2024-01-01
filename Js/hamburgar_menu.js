const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuToggle = document.getElementById('menu__toggle');

// Function to open the hamburger menu
function openMenu() {
  hamburgerMenu.classList.add('open');
}

// Function to close the hamburger menu
function closeMenu() {
  hamburgerMenu.classList.remove('open');
  menuToggle.checked = false;
}

// Add event listener to open the menu when menu button is clicked
menuToggle.addEventListener('click', openMenu);

// Add event listener to close the menu when user clicks outside of it
document.addEventListener('click', function(event) {
  const isClickInside = hamburgerMenu.contains(event.target) || menuToggle.contains(event.target);
  if (!isClickInside) {
    closeMenu();
  }
});
