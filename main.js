let email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

email.addEventListener("click", () => {
    if (desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.remove("inactive");
    } else {
        desktopMenu.classList.add("inactive")
    };
})
