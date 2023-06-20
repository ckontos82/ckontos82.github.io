document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector('.hamburger-menu');
    let leftColumn = document.querySelector('.left-column');
    let menuLines = document.querySelectorAll('.hamburger-menu div');
  
    // Initially hide the left column
    leftColumn.classList.remove("show");
  
    menu.addEventListener('click', function() {
      leftColumn.classList.toggle('show');
      menuLines.forEach(function(line) {
        line.classList.toggle('change');
      });
    });
});
