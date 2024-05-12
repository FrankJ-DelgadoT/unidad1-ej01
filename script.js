
document.addEventListener('DOMContentLoaded', function() {
  showPopupWithDelay();
});

function showPopupWithDelay() {
  const popup = document.getElementById('myPopup');
  setTimeout(() => {
    popup.classList.add('visible');
  }, 500); // Retraso de 0.5 segundos (500 milisegundos)
}

// Función para cerrar el cuadro emergente
function closePopup() {
  document.getElementById('myPopup').classList.remove('visible');
}

// Obtén todas las imágenes en la galería
const images = document.querySelectorAll('.image-gallery img');

// Define una función para reiniciar la animación al llegar al final
function resetAnimation() {
  images.forEach((img) => {
    img.style.marginTop = '-200px'; // Comienza desde arriba nuevamente
  });
  setTimeout(() => {
    requestAnimationFrame(() => {
      images.forEach((img) => {
        img.style.animation = 'none'; // Elimina la animación
        img.offsetHeight; /* Truco para reiniciar la animación */
        img.style.animation = 'scroll-up 20s linear infinite'; // Vuelve a aplicar la animación
      });
    });
  }, 100); // Espera un timepo antes de reiniciar la animación
}

// Llama a la función de reinicio al cargar la página
window.onload = resetAnimation;
