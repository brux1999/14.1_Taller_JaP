 
 //Carga el DOM y luego ejecuta la función
document.addEventListener('DOMContentLoaded', function() {
  // Cambia automáticamente el carrusel cada 2 segundos
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 2000);

    // Muestra un texto aleatorio en cada cambio de diapositiva
    $('.carousel').on('slide.bs.carousel', function () {
      var textOptions = ['Hola que tal', 'Bienvenido a la página', 'Simulando aleatoriedad'];
      var randomText = textOptions[Math.floor(Math.random() * textOptions.length)];
      $('#carousel-text').text(randomText);
    })
  });
