console.log("JavaScript is connected!");
let selectedCategory = "";
let selectedColor = "";

function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function filterCategory(category) {
  selectedCategory = category;
  selectedColor = "";
  document.getElementById("dropdownMenu").style.display = "none";
  applyFilters();
}

function filterColor(color) {
  selectedColor = color;
  applyFilters();
}

function clearColor() {
  selectedColor = "";
  applyFilters();
}

function applyFilters() {
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const category = product.dataset.category;
    const color = product.dataset.color;

    const matchCategory =
      !selectedCategory || category === selectedCategory;

    const matchColor =
      !selectedColor || color === selectedColor;

    product.style.display =
      matchCategory && matchColor ? "block" : "none";
  });
}
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

