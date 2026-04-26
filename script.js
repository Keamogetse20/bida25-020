console.log("JS connected");

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (!menuToggle || !dropdownMenu) {
        console.log("Elements not found");
        return;
    }

    menuToggle.addEventListener("click", () => {
        dropdownMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove("active");
        }
    });
});
