
/* Open when someone clicks on the span element */
function openNav() {
  $('[data-toggle="tooltip"]').tooltip('hide');
  document.getElementById("escenas").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("escenas").style.width = "0%";
}
// <a class="dropdown-item escena" data-id="0-departamento-a" href="#">Action</a>

// ver tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var data = window.APP_DATA;
$(document).ready(function() {

	data.scenes.forEach(function(valor, indice, array) {
	  	$('.escenas-lista').append('<a class="escena" data-id="' + valor.id + '" href="#">' + valor.name + '</a>');
	});

});