    // Obtener todas las imágenes de la clase "contenido-item"
    var imagenes = document.querySelectorAll('.contenido-item img');

    // Agregar un evento de clic a cada imagen
    imagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            // Mostrar un mensaje en la consola del navegador
            console.log('¡Hiciste clic en una imagen!');
        });
    });