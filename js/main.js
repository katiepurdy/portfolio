let menuToggle = document.getElementById('menu-toggle');
let header = document.getElementById('header');

let toggleMenu = () => {
  console.log('clicked!');
  if (header.classList.contains('menu-open')) {
    header.classList.remove('menu-open');
    header.classList.add('menu-closed');
  } else {
    header.classList.remove('menu-closed');
    header.classList.add('menu-open');
  }
};

menuToggle.addEventListener('click', toggleMenu);
