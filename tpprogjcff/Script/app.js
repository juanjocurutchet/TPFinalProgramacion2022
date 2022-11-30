// Deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict';
    //Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation');
    // Bucle sobre ellos para evitar el envio
    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                window.open("validacion.html");
            }
            form.classList.add('was-validated');
        }, false);
    });
})();
