const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function (event) {
    navMenu.classList.toggle("active");
    event.stopPropagation();
});

document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove("active");
    }
});
