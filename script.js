
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
   POPUP FOTO MENU KSS
========================== */

const menuImages = document.querySelectorAll(
    ".menu-photo-card img, .menu-item-card img"
);

const menuLightbox = document.getElementById("menuLightbox");
const lightboxMenuImage = document.getElementById("lightboxMenuImage");
const closeMenuLightbox = document.getElementById("closeMenuLightbox");

if (
    menuImages.length > 0 &&
    menuLightbox &&
    lightboxMenuImage &&
    closeMenuLightbox
) {
    menuImages.forEach(function (image) {

        image.addEventListener("click", function () {
            lightboxMenuImage.src = image.src;
            lightboxMenuImage.alt = image.alt;

            menuLightbox.classList.add("active");
        });

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


/* =========================
   POPUP GALERI KENANGAN KSS
========================== */

const memoryImages = document.querySelectorAll(".memory-item img");
const memoryLightbox = document.getElementById("memoryLightbox");
const lightboxMemoryImage = document.getElementById("lightboxMemoryImage");
const closeMemoryLightbox = document.getElementById("closeMemoryLightbox");

if (
    memoryImages.length > 0 &&
    memoryLightbox &&
    lightboxMemoryImage &&
    closeMemoryLightbox
) {
    memoryImages.forEach(function (image) {

        image.addEventListener("click", function () {
            lightboxMemoryImage.src = image.src;
            lightboxMemoryImage.alt = image.alt;

            memoryLightbox.classList.add("active");
        });

    });

    closeMemoryLightbox.addEventListener("click", function () {
        memoryLightbox.classList.remove("active");
    });

    memoryLightbox.addEventListener("click", function (event) {
        if (event.target === memoryLightbox) {
            memoryLightbox.classList.remove("active");
        }
    });
}
