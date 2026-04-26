console.log("JS connected");

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // DROPDOWN MENU
    // =========================
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuToggle.addEventListener("click", () => {
        dropdownMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("active");
        }
    });

    // =========================
    // SLIDESHOW
    // =========================
    const track = document.getElementById("slide-track");
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let currentIndex = 0;

    function updateSlide() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    }, 3000);

    // =========================
    // HIDE SLIDESHOW ON CATEGORY CLICK
    // =========================
    const categories = document.querySelectorAll("#dropdown-menu li");
    const slideshow = document.querySelector(".slideshow-container");

    categories.forEach(item => {
        item.addEventListener("click", () => {
            slideshow.style.display = "none";
        });
    });

});
