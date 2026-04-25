console.log("JS connected");

const shoes = [];

/* ADD SHOES */
function addShoes(color, category, count, sizes) {
  for (let i = 1; i <= count; i++) {
    shoes.push({
      name: `${color} ${category} ${i}`,
      category,
      color,
      price: "$" + (80 + Math.floor(Math.random() * 80)),
      img: `images/${color.toLowerCase()}-${category.toLowerCase()}-${i}.jpg`,
      sizes
    });
  }
}

/* DATA */
addShoes("Heels", "Black", 10, [36,37,38,39,40]);
addShoes("Heels", "Red", 12, [36,37.39]);
addShoes("Heels", "White", 10, [37.38,39,40]);
addShoes("Loafers", "Black", 9, [40,41,42]);
addShoes("Loafers", "Red", 10, [40,41,42]);
addShoes("Loafers", "White", 10, [36,39,40,42]);
addShoes("Boots", "Brown", 11, [40,41,42]);
addShoes("Boots", "Black", 11, [36,40,41,42,43]);
addShoes("Boots", "Gray", 11, [37,38,40,41,]);
addShoes("Sneakers", "Black", 11, [37,38,42,43,]);
addShoes("Sneakers", "Blue", 9, [37,39,42,43,]);
addShoes("Sneakers", "Pink", 10, [36,37,38,39,42,43,]);
addShoes("Sneakers", "White", 11, [36,37,38,40,41,42,43,]);

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

  const sliderItems = featuredshoes;

  sliderItems.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "slide";

    slide.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <p>${item.name}</p>
    `;

    track.appendChild(slide);
  });

  document.querySelector(".next").onclick = () => moveSlide(1);
  document.querySelector(".prev").onclick = () => moveSlide(-1);
}

function moveSlide(direction) {
  const track = document.getElementById("slider-track");
  const slides = document.querySelectorAll(".slide");

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > slides.length - 1) currentSlide = slides.length - 1;

  const slideWidth = slides[0].offsetWidth + 20;

  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
setInterval(() => moveSlide(1), 3000);

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
