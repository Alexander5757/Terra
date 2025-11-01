// --- Carousel ---
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
let index = 0;

function moveCarousel() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    track.style.transform = `translateX(-${index * 100}%)`;
}

// intervalo de cambio 
setInterval(moveCarousel, 6000);


// --- Sección Clientes / Stats ---
const numbers = document.querySelectorAll('.number');
let started = false; // Para que se ejecute solo una vez

function animateCounters() {
  numbers.forEach(number => {
    const target = +number.getAttribute('data-target');
    let count = 0; // Siempre empieza en 0
    const increment = target / 100; // velocidad de animación

    function updateCount() {
      count += increment;
      if (count < target) {
        number.innerText = Math.ceil(count);
        setTimeout(updateCount, 20);
      } else {
        number.innerText = target;
      }
    }

    updateCount();
  });
}

// Detectar cuando la sección entra en pantalla
const statsSection = document.querySelector(".stats-section");
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !started) {
    animateCounters();
    started = true; // Para que solo se ejecute una vez
  }
}, { threshold: 0.7 }); // 70% visible

observer.observe(statsSection);
