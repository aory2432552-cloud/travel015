
const images = [
    "images/sapanpla.jpg",
    "images/aomanow.jpg",
    "images/Kaow.jpg",
    "images/KLM.jpg"
];

let currentSlide = 0;

function showSlide(index) {
    currentSlide = index;
    document.getElementById("slideImage").src = images[index];

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}, 4000);
