console.log("JS connected");
// Product Database [19, 20]
const productsData = [
    { name: "Elegant Heels", category: "heels", color: "red", price: "P350", image: "image/red-heels.jpg", sizes: [4-7] },
    { name: "Midnight Loafers", category: "loafers", color: "black", price: "P280", image: "image/loafers.jpg", sizes: [6-8] },
    { name: "Winter Boots", category: "boots", color: "white", price: "P450", image: "image/boots.jpg", sizes: [7-9] },
    { name: "Urban Sneakers", category: "sneakers", color: "black", price: "P300", image: "image/sneakers.jpg", sizes: [6-10] }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dropdown Toggle [13]
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    menuToggle.addEventListener("click", () => dropdownMenu.classList.toggle("active"));

    // 2. Slideshow Logic [14]
    const track = document.getElementById("slide-track");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    const updateSlide = () => track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    });
    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
    });

    // 3. Category Selection Logic [16, 21-24]
    const categories = document.querySelectorAll("#dropdown-menu li");
    const slideshow = document.getElementById("slideshowContainer");
    const productsSection = document.getElementById("productsSection");

    categories.forEach(item => {
        item.addEventListener("click", () => {
            const selectedCat = item.getAttribute("data-cat");
            
            // Swap Views (Requirements)
            slideshow.style.display = "none";
            productsSection.style.display = "flex";
            dropdownMenu.classList.remove("active");

            // Build Color Sidebar and Show Products
            updateColorSidebar(selectedCat);
            renderProducts(selectedCat, "all");
        });
    });
});

function renderProducts(category, colorFilter) {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = "";

    const filtered = productsData.filter(p => 
        p.category === category && (colorFilter === "all" || p.color === colorFilter)
    );

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h4>${product.name}</h4>
            <img src="${product.image}" alt="${product.name}" width="150" height="150">
            <p>${product.price}</p>
            <div class="sizes"></div>
            <button class="buy-btn">Buy Now</button>
        `;

        // Click Image -> Show Sizes [22]
        card.querySelector("img").addEventListener("click", () => {
            const sizeBox = card.querySelector(".sizes");
            sizeBox.style.display = "block";
            sizeBox.innerHTML = product.sizes.map(s => `<span class="size">${s}</span>`).join("");
            
            // Size Selection Logic [18]
            sizeBox.querySelectorAll(".size").forEach(span => {
                span.addEventListener("click", () => {
                    sizeBox.querySelectorAll(".size").forEach(s => s.classList.remove("active"));
                    span.classList.add("active");
                });
            });
        });

        // Buy Now Button Alert
        card.querySelector(".buy-btn").addEventListener("click", () => {
            alert("added to cut");
        });

        grid.appendChild(card);
    });
}

function updateColorSidebar(category) {
    const colorList = document.getElementById("colorList");
    colorList.innerHTML = "<li>All</li>"; // Reset with 'All' option [23]
    
    // Get unique colors for this category
    const categoryColors = [...new Set(productsData.filter(p => p.category === category).map(p => p.color))];
    
    categoryColors.forEach(color => {
        const li = document.createElement("li");
        li.textContent = color.charAt(0).toUpperCase() + color.slice(1);
        li.addEventListener("click", () => renderProducts(category, color));
        colorList.appendChild(li);
    });

    colorList.firstChild.addEventListener("click", () => renderProducts(category, "all"));
}
