document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector('.hamburger-menu');
    var leftColumn = document.querySelector('.left-column');
    var menuLines = document.querySelectorAll('.hamburger-menu div');
  
    // Initially hide the left column
    leftColumn.classList.remove("show");
  
    menu.addEventListener('click', function() {
      leftColumn.classList.toggle('show');
      menuLines.forEach(function(line) {
        line.classList.toggle('change');
      });
    });
  });
  