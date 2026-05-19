console.log("JS connected");
// Product Database [19, 20]
const productsData = [
    { name: "Elegant Heels", category: "heels", color: "red", price: "P350", image: "image/heels/red/red-heels1.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Jeweled Buckle Heels", category: "heels", color: "red", price: "P350", image: "image/heels/red/red-heels2.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Ankle-Strap Heels", category: "heels", color: "red", price: "P450", image: "image/heels/red/red-heels3.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Ankle-Strap Stilettos", category: "heels", color: "red", price: "P650", image: "image/heels/red/red-heels4.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Floral Crystal Pumps", category: "heels", color: "red", price: "P1050", image: "image/heels/red/red-heels5.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Strappy Heeled Sandals", category: "heels", color: "red", price: "P1550", image: "image/heels/red/red-heels6.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Spiral Ankle Pumps", category: "heels", color: "red", price: "P1000", image: "image/heels/red/red-heels7.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Open-toe Stiletto", category: "heels", color: "red", price: "P1500", image: "image/heels/red/red-heels8.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Pointed Satin Heels", category: "heels", color: "red", price: "P700", image: "image/heels/red/red-heels9.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Crystal Bow Pointed Pumps", category: "heels", color: "red", price: "P2000", image: "image/heels/red/red-heels10.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Ankle-tie Stiletto", category: "heels", color: "red", price: "P2500", image: "image/heels/red/red-heels11.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Midnight Blossom Crystal Heels", category: "heels", color: "black", price: "P2000", image: "image/heels/black/black-heels1.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Noir Twist Stiletto", category: "heels", color: "black", price: "P2500", image: "image/heels/black/black-heels2.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Starlight Studded Pumps", category: "heels", color: "black", price: "P1500", image: "image/heels/black/black-heels3.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Velvet Noir Bow Heels", category: "heels", color: "black", price: "P2000", image: "image/heels/black/black-heels4.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Crystal Frame Courtheels", category: "heels", color: "black", price: "P3000", image: "image/heels/black/black-heels5.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Luna Bow Crystal Pumps", category: "heels", color: "black", price: "P500", image: "image/heels/black/black-heels6.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Opulence Leaf Stilettos", category: "heels", color: "black", price: "P1000", image: "image/heels/black/black-heels7.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Pearl Elite Pumps", category: "heels", color: "black", price: "P2000", image: "image/heels/black/black-heels8.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Royal Pearl Embblem Heels", category: "heels", color: "black", price: "P1500", image: "image/heels/black/black-heels9.jpg", sizes: [38,39,40,41,42,43] }, 
    { name: "Sable Spark Strap Heels", category: "heels", color: "black", price: "P2000", image: "image/heels/black/black-heels10.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Mary Jane Stiletto", category: "heels", color: "white", price: "P800", image: "image/heels/white/white-heels1.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Stain Bow Stilettos", category: "heels", color: "white", price: "P850", image: "image/heels/white/white-heels2.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Embellished Bridal Stilettos", category: "heels", color: "white", price: "P2500", image: "image/heels/white/white-heels3.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Classic Pointed Stiletto Pumps", category: "heels", color: "white", price: "P900", image: "image/heels/white/white-heels4.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Ankle-strap Block Heels Pumps", category: "heels", color: "white", price: "P700", image: "image/heels/white/white-heels5.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Bow Slingback Pointed Heels", category: "heels", color: "white", price: "P1500", image: "image/heels/white/white-heels6.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Pearl Stiletto Sandals", category: "heels", color: "white", price: "P2500", image: "image/heels/white/white-heels7.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Red Bottom Stilettos", category: "heels", color: "white", price: "P2500", image: "image/heels/white/white-heels8.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Block Heel Pointed Pumps", category: "heels", color: "white", price: "P800", image: "image/heels/white/white-heels9.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Jeweled-heels", category: "heels", color: "white", price: "P2000", image: "image/heels/white/white-heels10.jpg", sizes: [38,39,40,41,42,43] },
    { name: "Bow Pantent Loafers", category: "loafers", color: "black", price: "P580", image: "image/loafers/black/black-loafers1.jpg", sizes: [32,33,34,36,44,45] },
    { name: "Chain Chunky Loafers", category: "loafers", color: "black", price: "P500", image: "image/loafers/black/black-loafers2.jpg", sizes: [32,33,34,36,44,45] },
    { name: "Platform Bow Loafers", category: "loafers", color: "black", price: "P550", image: "image/loafers/black/black-loafers3.jpg", sizes: [32,33,34,36,44,45] },
    { name: "Horsbit Chunky Loafers", category: "loafers", color: "black", price: "P1000", image: "image/loafers/black/black-loafers4.jpg", sizes: [32,33,34,36,44,45] },
    { name: "Heart Platform Loafers", category: "loafers", color: "black", price: "P900", image: "image/loafers/black/black-loafers5.jpg", sizes: [32,33,34,36,44,45] },
    { name: "Bow Platform Loafers", category: "loafers", color: "black", price: "P800", image: "image/loafers/black/black-loafers6.jpg", sizes: [32,33,34,36,44,45] },
    { name: "Horsebit Lug Loafers", category: "loafers", color: "black", price: "P500", image: "image/loafers/black/black-loafers7.jpg", sizes: [32,33,34,36,44,45] },
    { name: "Chunky Sole Bow Platform Loafers", category: "loafers", color: "black", price: "P1500", image: "image/loafers/black/black-loafers8.jpg", sizes: [32,33,34,36,44,45] },
    { name: "Tassel Fringe Loafers", category: "loafers", color: "red", price: "P500", image: "image/loafers/red/red-loafers1.jpg", sizes: [30,34,34,35,44,45] },
    { name: "Horsebit Loafers", category: "loafers", color: "red", price: "P550", image: "image/loafers/red/red-loafers2.jpg", sizes: [30,34,34,35,44,45] },
    { name: "Horsebit Lug Loafers", category: "loafers", color: "red", price: "P600", image: "image/loafers/red/red-loafers3.jpg", sizes: [30,34,34,35,44,45] },
    { name: "Chain Lug Sole Loafers", category: "loafers", color: "red", price: "P700", image: "image/loafers/red/red-loafers4.jpg", sizes: [30,34,34,35,44,45] },
    { name: "Chunky Sole Loafers", category: "loafers", color: "red", price: "P850", image: "image/loafers/red/red-loafers5.jpg", sizes: [30,34,34,35,44,45] },
    { name: "Bow Lug Loafers", category: "loafers", color: "red", price: "P800", image: "image/loafers/red/red-loafers6.jpg", sizes: [30,34,34,35,44,45] },
    { name: "Fringe Loafers", category: "loafers", color: "red", price: "P500", image: "image/loafers/red/red-loafers7.jpg", sizes: [30,34,34,35,44,45] },
    { name: "Metal Strap Loafers", category: "loafers", color: "red", price: "P700", image: "image/loafers/red/red-loafers8.jpg", sizes: [30,34,34,35,44,45] },
    { name: "Pantent Leather Loafers", category: "loafers", color: "red", price: "P1000", image: "image/loafers/red/red-loafers9.jpg", sizes: [30,34,34,35,44,45] },
    { name: "Suede Stiletto Boots", category: "boots", color: "black", price: "P450", image: "image/boots/black/black-boots1.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Red-bottom Ankle Boots", category: "boots", color: "black", price: "P2000", image: "image/boots/black/black-boots2.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Block Heel Ankle Boots", category: "boots", color: "black", price: "P500", image: "image/boots/black/black-boots3.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Ankle Boots", category: "boots", color: "black", price: "P450", image: "image/boots/black/black-boots4.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Slouchy Stiletto Knee-high Boots", category: "boots", color: "black", price: "P600", image: "image/boots/black/black-boots5.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Fitted Knee-high Stiletto Boots", category: "boots", color: "black", price: "P800", image: "image/boots/black/black-boots6.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Buckle Stiletto Ankle Boots", category: "boots", color: "black", price: "P850", image: "image/boots/black/black-boots7.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Zip-up Block Heel Ankle Boots", category: "boots", color: "black", price: "P1500", image: "image/boots/black/black-boots8.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Classic Block Heel Ankle Boots", category: "boots", color: "black", price: "P1000", image: "image/boots/black/black-boots9.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Block Heel Ankle Boots", category: "boots", color: "brown", price: "P1000", image: "image/boots/brown/brown-boots1.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Suede Block Heel Ankle Boots", category: "boots", color: "brown", price: "P500", image: "image/boots/brown/brown-boots2.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Chunkey Chelsea Boots", category: "boots", color: "brown", price: "P600", image: "image/boots/brown/brown-boots3.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Buckle Strap Ankle Boots", category: "boots", color: "brown", price: "P450", image: "image/boots/brown/brown-boots4.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Slouchy Knee-high Boots", category: "boots", color: "brown", price: "P700", image: "image/boots/brown/brown-boots5.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Flat over-the-knee Boots", category: "boots", color: "brown", price: "P500", image: "image/boots/brown/brown-boots6.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Fold-over Ankle Boots", category: "boots", color: "brown", price: "P400", image: "image/boots/brown/brown-boots7.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Slouchy Knee-high Boots", category: "boots", color: "brown", price: "P1000", image: "image/boots/brown/brown-boots8.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Buckle Knee-high Boots", category: "boots", color: "brown", price: "P1500", image: "image/boots/brown/brown-boots9.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Leather Knee-high Block Heel Boots", category: "boots", color: "brown", price: "P1900", image: "image/boots/brown/brown-boots10.jpg", sizes: [36,37,40,41,42,43] },
    { name: "Slouchy Ankle Boots", category: "boots", color: "gray", price: "P900", image: "image/boots/gray/gray-boots1.jpg", sizes: [35,38,40,41,42,43,45] },
    { name: "Platform Bucket Ankle Boots", category: "boots", color: "gray", price: "P500", image: "image/boots/gray/gray-boots2.jpg", sizes: [35,38,40,41,42,43,45] },
    { name: "Over-the-knee Stiletto Boots", category: "boots", color: "gray", price: "P700", image: "image/boots/gray/gray-boots3.jpg", sizes: [35,38,40,41,42,43,45] },
    { name: "Knee-high Block Boots", category: "boots", color: "gray", price: "P1000", image: "image/boots/gray/gray-boots4.jpg", sizes: [35,38,40,41,42,43,45] },
    { name: "Buckle Ankle Boots", category: "boots", color: "gray", price: "P400", image: "image/boots/gray/gray-boots5.jpg", sizes: [35,38,40,41,42,43,45] },
    { name: "Slouchy Ankle Boots", category: "boots", color: "gray", price: "P600", image: "image/boots/gray/gray-boots6.jpg", sizes: [35,38,40,41,42,43,45] },
    { name: "Tassel Wrap Ankle Boots", category: "boots", color: "gray", price: "P400", image: "image/boots/gray/gray-boots7.jpg", sizes: [35,38,40,41,42,43,45] },
    { name: "Sock Stiletto Boots", category: "boots", color: "gray", price: "P750", image: "image/boots/gray/gray-boots8.jpg", sizes: [35,38,40,41,42,43,45] },
    { name: "Slouchy Stiletto Boots", category: "boots", color: "gray", price: "P500", image: "image/boots/gray/gray-boots9.jpg", sizes: [35,38,40,41,42,43,45] },
    { name: "Platform Sneakers", category: "sneakers", color: "black", price: "P300", image: "image/sneakers/black/black-sneakers1.jpg", sizes: [37,38,39,40,45] },
    { name: "classic Low-top Sneakers", category: "sneakers", color: "black", price: "P400", image: "image/sneakers/black/black-sneakers2.jpg", sizes: [37,38,39,40,45] },
    { name: "Chunky Sneakers", category: "sneakers", color: "black", price: "P350", image: "image/sneakers/black/black-sneakers3.jpg", sizes: [37,38,39,40,45] },
    { name: "White sole low top Sneakers", category: "sneakers", color: "black", price: "P450", image: "image/sneakers/black/black-sneakers4.jpg", sizes: [37,38,39,40,45] },
    { name: "Puma Sneakers", category: "sneakers", color: "black", price: "P1000", image: "image/sneakers/black/black-sneakers5.jpg", sizes: [37,38,39,40,45] },
    { name: "Vans of the wall Sneakers", category: "sneakers", color: "black", price: "P1500", image: "image/sneakers/black/black-sneakers6.jpg", sizes: [37,38,39,40,45] },
    { name: "Minimalist Low Top Sneakers", category: "sneakers", color: "black", price: "P300", image: "image/sneakers/black/black-sneakers7.jpg", sizes: [37,38,39,40,45] },
    { name: "Addidas Campus Sneakers", category: "sneakers", color: "black", price: "P1000", image: "image/sneakers/black/black-sneakers8.jpg", sizes: [37,38,39,40,45] }
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
