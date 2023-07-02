let email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

email.addEventListener("click", () => {
    desktopMenu.classList.toggle('inactive');
})

let hamburguerMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

hamburguerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle('inactive');
})
