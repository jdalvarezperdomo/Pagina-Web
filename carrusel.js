let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-images img");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Inicializar el primer slide
showSlide(currentSlide);

// Opcional: Auto-play del carrusel
setInterval(() => moveSlide(1), 5000); // Cambia de imagen cada 5 segundos


