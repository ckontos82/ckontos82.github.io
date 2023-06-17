document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector('.hamburger-menu');
    var leftColumn = document.querySelector('.left-column');

    // Initially hide the left column
    leftColumn.classList.remove("show");

    menu.addEventListener('click', function() {
        leftColumn.classList.toggle('show');
    });
});
