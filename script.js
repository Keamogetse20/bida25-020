console.log("JS connected");

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (!menuToggle || !dropdownMenu) {
        console.log("Elements not found");
        return;
    }

    menuToggle.addEventListener("click", () => {
        dropdownMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("active");
        }
    });
});
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

document.addEventListener("DOMContentLoaded", () => {

   const track = document.getElementById("slide-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// NEXT
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

// PREVIOUS
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});

// AUTO SLIDE
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
}, 3000);
