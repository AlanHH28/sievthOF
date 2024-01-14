const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Botones para avanzar y retroceder
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = images[0].clientWidth;

// Mueve el carrusel a la primera imagen si se está en la última
function resetCarousel() {
  if (counter === images.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = images.length - 1;
  }
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

// Botón siguiente
nextBtn.addEventListener('click', () => {
  counter++;
  resetCarousel();
});

// Botón anterior
prevBtn.addEventListener('click', () => {
  counter--;
  resetCarousel();
});
