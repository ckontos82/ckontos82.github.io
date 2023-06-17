// script.js

const hamburgerMenu = document.querySelector('.hamburger-menu');
const leftColumn = document.querySelector('.left-column');
const popupButtons = document.querySelectorAll('.popup-button');

hamburgerMenu.addEventListener('click', () => {
    leftColumn.classList.toggle('show');
});

popupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('id');
        const content = document.querySelector(`.${id.slice(0, -4)}`);
        content.classList.toggle('show');
    });
});
