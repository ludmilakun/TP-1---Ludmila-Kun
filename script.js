// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const botonCambiarColor = document.getElementById('boton-cambiar-color');
    const botonMostrarMensaje = document.getElementById('boton-mostrar-mensaje');
    const mensajeElement = document.getElementById('mensaje');
    const contadorElement = document.getElementById('contador');
    const botonIncrementar = document.getElementById('boton-incrementar');
    const botonDecrementar = document.getElementById('boton-decrementar');
    
    // Variable para almacenar el contador
    let contador = 0;
    
    // Función para cambiar el color de fondo
    botonCambiarColor.addEventListener('click', function() {
        // Generar un color aleatorio
        const colores = ['#f5f5f5', '#e8f4f8', '#f8e8e8', '#f0f8e8', '#f8f0e8'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        
        // Cambiar el color de fondo del body
        document.body.style.backgroundColor = colorAleatorio;
    });
    
    // Función para mostrar/ocultar el mensaje
    botonMostrarMensaje.addEventListener('click', function() {
        if (mensajeElement.style.display === 'none') {
            mensajeElement.style.display = 'block';
            botonMostrarMensaje.textContent = 'Ocultar mensaje';
        } else {
            mensajeElement.style.display = 'none';
            botonMostrarMensaje.textContent = 'Mostrar mensaje';
        }
    });
    
    // Función para incrementar el contador
    botonIncrementar.addEventListener('click', function() {
        contador++;
        contadorElement.textContent = contador;
    });
    
    // Función para decrementar el contador
    botonDecrementar.addEventListener('click', function() {
        if (contador > 0) {
            contador--;
            contadorElement.textContent = contador;
        }
    });
});