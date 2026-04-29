console.log("JS connected");

document.addEventListener("DOMContentLoaded", () => {

    /* DROPDOWN MENU */
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

    /* SLIDESHOW */
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

    /* HIDE SLIDESHOW ON CATEGORY CLICK */
    const categories = document.querySelectorAll("#dropdown-menu li");
    const slideshow = document.querySelector(".slideshow-container");

    categories.forEach(item => {
        item.addEventListener("click", () => {
            slideshow.style.display = "none";
        });
    });

});

const categories = document.querySelectorAll("#dropdown-menu li");
const slideshow = document.querySelector(".slideshow-container");
const productsSection = document.querySelector(".products-section");

categories.forEach(item => {
    item.addEventListener("click", () => {

        const selectedCategory = item.textContent.toLowerCase();

        slideshow.style.display = "none";
        productsSection.style.display = "flex";

        document.querySelectorAll(".product-card").forEach(card => {
            if (card.dataset.category === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});
const colors = document.querySelectorAll(".color-sidebar li");

colors.forEach(color => {
    color.addEventListener("click", () => {

        const selectedColor = color.dataset.color;

        document.querySelectorAll(".product-card").forEach(card => {

            if (selectedColor === "all" || card.dataset.color === selectedColor) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
});
const products = document.querySelectorAll(".product-card");

products.forEach(product => {
    product.addEventListener("click", () => {

        const sizes = product.querySelector(".sizes");

        sizes.style.display =
            sizes.style.display === "block" ? "none" : "block";
    });
});
document.querySelectorAll(".sizes span").forEach(size => {
    size.addEventListener("click", (e) => {
        e.stopPropagation(); // stops product click

        document.querySelectorAll(".sizes span").forEach(s => {
            s.style.background = "white";
        });

        size.style.background = "#d9a5a5";
    });
});
