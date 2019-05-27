$(document).ready(function() {
  // Abre o cierra la fancybox
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
  });
  // Agrega la animacion de zoom cuando el mouse esta sobre la imagen.
  $(".zoom").hover(function() {

    $(this).addClass('transition');
  }, function() {

    $(this).removeClass('transition');
  });
});
