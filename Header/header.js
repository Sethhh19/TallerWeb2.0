const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    const abierto = navMenu.classList.toggle("is-active");
    menuBtn.classList.toggle("is-active");
    menuBtn.setAttribute("aria-expanded", abierto);
});

// cerrar el menu al elegir una opcion
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("is-active");
        menuBtn.classList.remove("is-active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});
