(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Toma todos los forms que tengan la clase need validation que seran los que se validaran.
    var forms = document.getElementsByClassName('needs-validation');
    // Crea un ciclo infinito para evitar que se envie el formulario hasta que
    // todos los forms cumplan las condiciones.
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
