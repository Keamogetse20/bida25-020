console.log("JS connected");

/* =========================
   AUTO GENERATE PRODUCTS
========================= */
const shoes = [];

function addShoes(category, color, count) {
  for (let i = 1; i <= count; i++) {
    shoes.push({
      name: `${color} ${category} ${i}`,
      category,
      color,
      price: "$" + (80 + Math.floor(Math.random() * 80)),
      img: "https://via.placeholder.com/200"
    });
  }
}

/* Sneakers */
addShoes("Sneakers", "Black", 11);
addShoes("Sneakers", "Blue", 9);
addShoes("Sneakers", "Pink", 10);
addShoes("Sneakers", "White", 11);

/* Heels */
addShoes("Heels", "Black", 10);
addShoes("Heels", "Red", 12);
addShoes("Heels", "White", 10);

/* Loafers */
addShoes("Loafers", "Black", 9);
addShoes("Loafers", "Red", 10);
addShoes("Loafers", "White", 10);

/* Boots */
addShoes("Boots", "Black", 11);
addShoes("Boots", "Brown", 11);
addShoes("Boots", "Gray", 11);

/* ========================= */
let currentCategory = "Heels";
let currentColor = "all";

/* DROPDOWN */
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* CATEGORY */
function selectCategory(category) {
  currentColor = "all"; 
  renderColorFilters();
  currentCategory = category;
  renderProducts();
}

/* COLOR */
function filterColor(color) {
  currentColor = color;
  renderProducts();
}

/* =========================
   RENDER PRODUCTS
========================= */
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
          <span>36</span>
          <span>37</span>
          <span>38</span>
          <span>39</span>
        </div>

        <button class="buy-btn">Buy Now</button>
      `;

      /* CLICK CARD → SHOW SIZES */
      card.addEventListener("click", () => {
        card.classList.toggle("show-sizes");
      });

      /* SIZE SELECTION */
      const sizes = card.querySelectorAll(".sizes span");
      sizes.forEach(size => {
        size.addEventListener("click", (e) => {
          e.stopPropagation();
          sizes.forEach(s => s.classList.remove("active"));
          size.classList.add("active");
        });
      });

      /* BUY BUTTON */
      const btn = card.querySelector(".buy-btn");
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const selected = card.querySelector(".sizes span.active");

        if (!selected) {
          showToast("Please select a size");
          return;
        }

        showToast("Added to cart");
      });

      container.appendChild(card);
    });
}

/* =========================
   TOAST MESSAGE
========================= */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

/* =========================
   SLIDER (14 ITEMS)
========================= */
let slideIndex = 0;
const sliderItems = shoes.slice(0, 14);

function renderSlider() {
  const container = document.getElementById("slider-container");
  container.innerHTML = "";

  sliderItems.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "product-slide";
    div.style.display = i === 0 ? "block" : "none";

    div.innerHTML = `
      <img src="${item.img}">
      <p>${item.name}</p>
    `;

    container.appendChild(div);
  });
}

function showSlide(i) {
  const slides = document.querySelectorAll(".product-slide");
  slides.forEach(s => s.style.display = "none");
  slides[i].style.display = "block";
}

function nextSlide() {
  const slides = document.querySelectorAll(".product-slide");
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll(".product-slide");
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}
function renderColorFilters() {
  const container = document.getElementById("colorButtons");
  container.innerHTML = "";

  // get colors for current category
  const colors = [
    ...new Set(
      shoes
        .filter(s => s.category === currentCategory)
        .map(s => s.color)
    )
  ];

  // ADD "All" button
  const allBtn = document.createElement("button");
  allBtn.textContent = "All";
  allBtn.onclick = () => filterColor("all");
  container.appendChild(allBtn);

  // ADD dynamic color buttons
  colors.forEach(color => {
    const btn = document.createElement("button");
    btn.textContent = color;
    btn.onclick = () => filterColor(color);
    container.appendChild(btn);
  });
}

/* LOAD */
window.onload = function () {
  renderProducts();
  renderSlider();
  renderColorFilters();
};
