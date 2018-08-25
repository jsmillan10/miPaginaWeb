// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
//
// // Get the navbar
// var navbar = document.getElementById("navbar_home");
//
// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;
//
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
var jumbo = document.getElementById("jumbo_titulo");
var navNombre = document.getElementById("nombre_nav");
var medida = jumbo.offsetHeight;
function myFunction() {
  if (window.pageYOffset>=medida)
  {
    navNombre.classList.remove("invisible");
  }
  else
    navNombre.classList.add("invisible");
}



