let email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

email.addEventListener("click", () => {
    isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    isCarShopClose = carASide.classList.contains('inactive');

    if (isCarShopClose === false) {
        carASide.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
})

let hamburguerMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

hamburguerMenu.addEventListener("click", () => {
    isCarShopClose = carASide.classList.contains('inactive');

    if (isCarShopClose === false) {
        carASide.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
})

let shoppingCar = document.querySelector(".navbar-shopping-cart");
let carASide = document.querySelector("#shopping-card");

shoppingCar.addEventListener("click", () => {
    isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if (isDesktopMenuClose === false) {
        desktopMenu.classList.add('inactive');
    } else if (isMobileMenuClose === false) {
        mobileMenu.classList.add('inactive');
    }

    carASide.classList.toggle('inactive');
})

const productArray = [];
productArray.push({
    name: 'bike',
    price: 120.00,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productArray.push({
    name: 'pantalla',
    price: 220.50,
    img: 'https://acf.geeknetic.es/imgri/imagenes/auto/22/02/17/rqw-windowscolor.jpg?f=webp'
})

productArray.push({
    name: 'iphone',
    price: 500.00,
    img: 'https://www.apple.com/newsroom/images/product/iphone/standard/all-new-glass-iPhone8Plus-and-iPhone8_full.jpg.og.jpg?202305231351'
})

const cardsContainer = document.querySelector('.cards-container');

for (product of productArray) {
    const container = document.createElement('div');

    container.innerHTML = `
    <img src="${product.img}" alt="">
    <div class="product-info">
      <div>
        <p>$${product.price}</p>
        <p>${product.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
    `;
    container.classList.add('product-card');

    cardsContainer.appendChild(container);

}