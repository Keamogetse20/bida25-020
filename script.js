console.log("JS connected");

const shoes = [];

/* ADD SHOES */
function addShoes(category, color, count, sizes) {
  for (let i = 1; i <= count; i++) {
    shoes.push({
      name: `${color} ${category} ${i}`,
      category,
      color,
      price: "$" + (80 + Math.floor(Math.random() * 80)),
      img: `images/${category.toLowerCase()}-${color.toLowerCase()}-${i}.jpg`,
      sizes
    });
  }
}

/* DATA */
addShoes("Heels", "Black", 5, [36,37,38]);
addShoes("Heels", "Red", 5, [36,37]);
addShoes("Sneakers", "Black", 5, [39,40,41]);
addShoes("Boots", "Brown", 5, [40,41,42]);

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

  renderColors();
  renderProducts();

  document.getElementById("products").style.display = "grid";
  document.getElementById("color-filter").style.display = "block";
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
let slideIndex = 0;
const sliderItems = shoes.slice(0, 6);

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
