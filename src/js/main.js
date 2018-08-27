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

var viewportWidth, divWidth, tb;
$(function() {

  viewport = $('#container').innerWidth();
  tb = $('#thumbs');
  divWidth = tb.outerWidth();

  $('#container').mousemove(function(e)
  {
    tb.css({left: ((viewport - divWidth)*((e.pageX / viewport).toFixed(3))).toFixed(1) +"px" });
  });

  $('.history-block').on('click', function(){
    $('.history-block').css('width', '300px');
    $('.history-block').find('.title').css('width', '260px');
    $('.history-block .timeline').hide(300);
    $(this).css('width', '600px');
    $(this).find('.title').css('width', '500px');
    $(this).find('.timeline').show(800);
    $('#container').mousemove(function(e)
    {
      tb.css({left: ((viewport - divWidth-300)*((e.pageX / viewport).toFixed(3))).toFixed(1) + 300 + "px" });
    });
  });

  $('.timeline ul li').on('click', function(){
    $(this).parent().blink();
  });
});

"use strict";
$.getJSON("json/skills.json", function (data) {
  $("#skillsList").append(data.map(function (obj) {
    var titulo = $("<h3>")
      .addClass("SkillTitle")
      .text(obj.name);
    var barra = $("<div>")
      .addClass("progress-bar")
      .attr("id", obj.name)
      .attr("role", "progressbar")
      .attr("aria-valuemin", "0")
      .attr("aria-valuemax", "100")
      .attr("aria-valuenow", obj.skillLevel)
      .text(obj.skillLevel + "%")
      .css("width", obj.skillLevel + "%");
    var progress = $("<div>")
      .addClass("progress")
      .append(barra);
    return $("<div>")
      .append(titulo)
      .append(progress);
  }));
});
