// * HEADER HAMBURGER MENU
const menuButton = document.querySelector("body> header>button");
const menuCloseButton = document.querySelector("body>header>nav>button");

menuButton.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);

function openMenu() {
    const navMenu = document.querySelector("header > nav");
    navMenu.classList.add("open-nav-menu");
}

function closeMenu() {
    const navMenu = document.querySelector("header > nav");
    navMenu.classList.remove("open-nav-menu");
}

// * SIDEBAR EXPAND
const expandButton = document.querySelector("body>aside>nav>button");

expandButton.addEventListener("click", toggleSidebar);

function toggleSidebar() {
    const body = document.querySelector("body");
    body.classList.toggle("expand");
}