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

//intervalo de cambio 
setInterval(moveCarousel, 6000);

//seccion clientes 
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
  const updateCount = () => {
    const target = +number.getAttribute('data-target');
    const count = +number.innerText;

    const increment = target / 100; // velocidad de animación
    if(count < target) {
      number.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      number.innerText = target;
    }
  };
  updateCount();
});

