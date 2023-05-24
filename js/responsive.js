const hamburger = document.querySelector('.toggle_btn');
const navLink = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('open');
});

const icon = document.querySelector('.product-icon');
const navList = document.querySelector('.product-list');

icon.addEventListener('click', () => {
    navList.classList.toggle('open');
})

