
/* =================================
   1. TAHUN OTOMATIS
================================= */

const openingFooter = document.querySelector(".opening-footer");

if (openingFooter) {
    const currentYear = new Date().getFullYear();

    openingFooter.textContent =
        "© " + currentYear + " Kopi Street Sawah";
}


/* =================================
   2. NAVIGASI MOBILE
================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        const isOpen = navMenu.classList.contains("show");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* =========================
   POPUP FOTO DAFTAR MENU
========================== */

const menuPhoto = document.querySelector(".menu-photo-card img");
const menuLightbox = document.getElementById("menuLightbox");
const closeMenuLightbox = document.getElementById("closeMenuLightbox");

if (menuPhoto && menuLightbox && closeMenuLightbox) {

    menuPhoto.addEventListener("click", function () {
        menuLightbox.classList.add("active");
    });

    closeMenuLightbox.addEventListener("click", function () {
        menuLightbox.classList.remove("active");
    });

    menuLightbox.addEventListener("click", function (event) {
        if (event.target === menuLightbox) {
            menuLightbox.classList.remove("active");
        }
    });

}
