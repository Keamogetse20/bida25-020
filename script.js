console.log("JS connected");

const shoes = [
  {
    name: "Elegant Night Heels",
    category: "Heels",
    color: "Black",
    price: "$120",
    img: "images/heels-black-1.jpg",
    sizes: [36,37,38]
  },
  {
    name: "Red Passion Heels",
    category: "Heels",
    color: "Red",
    price: "$110",
    img: "images/heels-red-1.jpg",
    sizes: [36,37]
  }
];

const featuredShoes = [
  { name: "Luxury Black Heels", img: "images/featured-1.jpg" },
  { name: "Golden Elegance", img: "images/featured-2.jpg" },
  { name: "Street White Sneakers", img: "images/featured-3.jpg" },
  { name: "Brown Classic Boots", img: "images/featured-4.jpg" },
  { name: "Minimal Nude Heels", img: "images/featured-5.jpg" },
  { name: "Sporty Black Sneakers", img: "images/featured-6.jpg" },
  { name: "Elegant Red Heels", img: "images/featured-7.jpg" },
  { name: "Winter Boots", img: "images/featured-8.jpg" },
  { name: "Classic White Heels", img: "images/featured-9.jpg" },
  { name: "Luxury Gold Heels", img: "images/featured-10.jpg" },
  { name: "Urban Sneakers", img: "images/featured-11.jpg" },
  { name: "Soft Beige Heels", img: "images/featured-12.jpg" },
  { name: "Dark Leather Boots", img: "images/featured-13.jpg" },
  { name: "Chic Party Heels", img: "images/featured-14.jpg" }
];

let currentCategory = "";
let currentColor = "all";

/* MENU */
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* SELECT CATEGORY */
function selectCategory(category) {
  currentCategory = category;
  currentColor = "all";

  document.getElementById("slider-container").style.display = "none";

  document.getElementById("products").style.display = "grid";
  document.getElementById("color-filter").style.display = "block";

  renderColors();
  renderProducts();
}

/* COLORS */
function renderColors() {
  const container = document.getElementById("color-filter");
  container.innerHTML = "";

  const colors = [...new Set(
    shoes.filter(s => s.category === currentCategory).map(s => s.color)
  )];

  const allBtn = document.createElement("button");
  allBtn.textContent = "All";
  allBtn.onclick = () => filterColor("all");
  container.appendChild(allBtn);

  colors.forEach(color => {
    const btn = document.createElement("button");
    btn.textContent = color;
    btn.onclick = () => filterColor(color);
    container.appendChild(btn);
  });
}

/* FILTER */
function filterColor(color) {
  currentColor = color;
  renderProducts();
}

/* RENDER PRODUCTS */
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  shoes
    .filter(s => s.category === currentCategory)
    .filter(s => currentColor === "all" || s.color === currentColor)
    .forEach(shoe => {

      const card = document.createElement("div");
      card.className = "product";

      card.innerHTML = `
        <h3>${shoe.name}</h3>
        <img src="${shoe.img}">
        <p>${shoe.price}</p>

        <div class="sizes">
          ${shoe.sizes.map(s => `<span>${s}</span>`).join("")}
        </div>

        <button class="buy-btn">Buy Now</button>
      `;

      const sizes = card.querySelectorAll(".sizes span");

      sizes.forEach(size => {
        size.addEventListener("click", (e) => {
          e.stopPropagation();
          sizes.forEach(s => s.classList.remove("active"));
          size.classList.add("active");
        });
      });

      const btn = card.querySelector(".buy-btn");
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const selected = card.querySelector(".active");

        if (!selected) {
          showToast("Select size");
          return;
        }

        showToast("Added to cart");
      });

      container.appendChild(card);
    });
}

/* SLIDER */
let currentSlide = 0;
let autoSlide;

function renderSlider() {
  const container = document.getElementById("slider-container");

  container.innerHTML = `
    <button class="slider-btn prev">❮</button>

    <div class="slider-wrapper">
      <div class="slider-track" id="slider-track"></div>
    </div>

    <button class="slider-btn next">❯</button>
  `;

  const track = document.getElementById("slider-track");
  
if (!featuredShoes || featuredShoes.length === 0) return;

  featuredShoes.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "slide";

    slide.innerHTML = `
      <img src="${item.img}">
      <p>${item.name}</p>
    `;

    track.appendChild(slide);
  });

  document.querySelector(".next").onclick = () => moveSlide(1);
  document.querySelector(".prev").onclick = () => moveSlide(-1);

  // AUTO SLIDE
  clearInterval(autoslide);
  autoslide=setInterval(() => {
    moveSlide(1);
  }, 3000);
}

function moveSlide(direction) {
  const track = document.getElementById("slider-track");
  const slides = document.querySelectorAll(".slide");

  const slideWidth = 195;

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > slides.length - 1) currentSlide = 0; // loop

  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
/* TOAST */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

/* LOAD */
window.onload = function () {
  renderSlider();
};
