let email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

email.addEventListener("click", () => {
    isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    isCarShopClose = carASide.classList.contains('inactive');

    if (isCarShopClose === false) {
        carASide.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
})

let hamburguerMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

hamburguerMenu.addEventListener("click", () => {
    isCarShopClose = carASide.classList.contains('inactive');

    if (isCarShopClose === false) {
        carASide.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');
})

let shoppingCar = document.querySelector(".navbar-shopping-cart");
let carASide = document.querySelector(".product-detail");

shoppingCar.addEventListener("click", () => {
    isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if (isDesktopMenuClose === false) {
        desktopMenu.classList.toggle('inactive');
    } else if (isMobileMenuClose === false) {
        mobileMenu.classList.toggle('inactive');
    }

    carASide.classList.toggle('inactive');
})
