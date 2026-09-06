const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;


function showSlide(number) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[number].classList.add("active");
    dots[number].classList.add("active");

    currentSlide = number;
}


function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}


/* Automatically change photo every 5 seconds */

setInterval(nextSlide, 4000);


/* Allow the dots to change the photo */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showSlide(index);
    });

});