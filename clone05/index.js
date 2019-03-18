var menu = document.querySelector(".mobile-menu");
var sidebar = document.querySelector("#side-menu");
var overlay = document.querySelector("#overlay");

menu.addEventListener("click", function () {
  
  this.classList.toggle("active");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  overlay.onclick = function () {
    menu.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  }

});