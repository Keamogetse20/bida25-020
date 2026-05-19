console.log("JS connected");
// Product Database [19, 20]
const productsData = [
    { name: "Elegant Heels", category: "heels", color: "red", price: "P350", image: "image/heels/red/red-heels1.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Elegant Heels", category: "heels", color: "red", price: "P350", image: "image/heels/red/red-heels2.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Midnight Blossom Crystal Heels", category: "heels", color: "black", price: "P2000", image: "image/heels/black/black-heels1.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Noir Twist Stilletto", category: "heels", color: "black", price: "P2500", image: "image/heels/black/black-heels2.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Starlight Studded Pumps", category: "heels", color: "black", price: "P1500", image: "image/heels/black/black-heels3.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Velvet Noir Bow Heels", category: "heels", color: "black", price: "P2000", image: "image/heels/black/black-heels4.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Crystal Frame Courtheels", category: "heels", color: "black", price: "P3000", image: "image/heels/black/black-heels5.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Luna Bow Crystal Pumps", category: "heels", color: "black", price: "P500", image: "image/heels/black/black-heels6.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Opulence Leaf Stillettos", category: "heels", color: "black", price: "P1000", image: "image/heels/black/black-heels7.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Pearl Elite Pumps", category: "heels", color: "black", price: "P2000", image: "image/heels/black/black-heels8.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Royal Pearl Embblem Heels", category: "heels", color: "black", price: "P1500", image: "image/heels/black/black-heels9.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Sable Spark Strap Heels", category: "heels", color: "black", price: "P2000", image: "image/heels/black/black-heels10.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Midnight Loafers", category: "loafers", color: "black", price: "P280", image: "image/loafers.jpg", sizes: [32,33,34,36,44,45] },
    { name: "Winter Boots", category: "boots", color: "white", price: "P450", image: "image/boots.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Urban Sneakers", category: "sneakers", color: "black", price: "P300", image: "image/sneakers.jpg", sizes: [37,38,39,40,45] }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dropdown Toggle [13]
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    menuToggle.addEventListener("click", () => dropdownMenu.classList.toggle("active"));
    
// 1. Get the category from the URL (e.g., ?category=heels)
const urlParams = new URLSearchParams(window.location.search);
const categoryFromUrl = urlParams.get('category');

// 2. If a category was passed in the link, trigger the filter immediately
if (categoryFromUrl) {
    const slideshow = document.getElementById("slideshowContainer");
    const productsSection = document.getElementById("productsSection");

    // Hide slideshow and show product grid (matching your Ad.png to template 9 transition)
    if (slideshow && productsSection) {
        slideshow.style.display = "none";
        productsSection.style.display = "flex";
        
        // Use your existing functions to show the right shoes and colors
        // Note: Make sure these function names match your current script.js
        renderProducts(categoryFromUrl, "all");
        updateColorSidebar(categoryFromUrl); 
    }
}
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
    setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the start after the last slide
    updateSlide(); // Update the visual position of the track [4]
}, 3000); 

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

    // Check current display state and toggle it [2]
    if (sizeBox.style.display === "block") {
        sizeBox.style.display = "none";
    } else {
        sizeBox.style.display = "block";
        
        // Only generate the sizes if the box is being shown [1]
        sizeBox.innerHTML = product.sizes
            .map(size => `<span class="size">${size}</span>`)
            .join("");

        // Re-attach selection logic so users can pick a size [3]
        sizeBox.querySelectorAll(".size").forEach(s => {
            s.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevents the image click from triggering [2]
                sizeBox.querySelectorAll(".size").forEach(el => el.classList.remove("active"));
                s.classList.add("active");
            });
        });
    }
});

        // Buy Now Button Alert
        card.querySelector(".buy-btn").addEventListener("click", () => {
            alert("added to cart");
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
