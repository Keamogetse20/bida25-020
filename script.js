console.log("JavaScript is connected!");

const shoes = [
  { name: "Red Heel", category: "Heels", color: "Red", price: "$120", img: "https://via.placeholder.com/200" },
  { name: "Black Heel", category: "Heels", color: "Black", price: "$130", img: "https://via.placeholder.com/200" },
  { name: "White Sneaker", category: "Sneakers", color: "White", price: "$90", img: "https://via.placeholder.com/200" },
  { name: "Black Boot", category: "Boots", color: "Black", price: "$150", img: "https://via.placeholder.com/200" }
];

let currentCategory = "Heels";
let currentColor = "all";

/* DROPDOWN */
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* CATEGORY */
function selectCategory(category) {
  currentCategory = category;
  renderProducts();
  toggleMenu();
}

/* COLOR FILTER */
function filterColor(color) {
  currentColor = color;
  renderProducts();
}

/* RENDER PRODUCTS */
function renderProducts() {
  const products = document.getElementById("products");
  products.innerHTML = "";

  shoes
    .filter(s => s.category === currentCategory)
    .filter(s => currentColor === "all" || s.color === currentColor)
    .forEach(shoe => {
      products.innerHTML += `
        <div class="card" onclick="toggleSizes(this)">
          <h4>${shoe.name}</h4>
          <img src="${shoe.img}">
          <p>${shoe.price}</p>

          <div class="sizes">
            <span>36</span>
            <span>37</span>
            <span>38</span>
            <span>39</span>
          </div>

          <button class="buy" onclick="event.stopPropagation(); alert('Added to cart')">
            Buy Now
          </button>
        </div>
      `;
    });
}

/* SHOW SIZES */
function toggleSizes(card) {
  const sizes = card.querySelector(".sizes");
  sizes.style.display = sizes.style.display === "block" ? "none" : "block";
}

/* SLIDER */
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(i) {
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[i].style.display = "block";
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

/* INITIAL LOAD */
showSlide(slideIndex);
renderProducts();

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

