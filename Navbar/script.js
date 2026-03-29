const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});