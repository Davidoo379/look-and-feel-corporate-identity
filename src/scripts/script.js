// * MARK: HEADER HAMBURGER MENU
const menuButton = document.querySelector("body> header>button");
const menuCloseButton = document.querySelector("body>header>nav>button");

if (menuButton !== null) {
    menuButton.addEventListener("click", openMenu);
    menuCloseButton.addEventListener("click", closeMenu);
}

function openMenu() {
    const navMenu = document.querySelector("header > nav");
    navMenu.classList.add("open-nav-menu");
}

function closeMenu() {
    const navMenu = document.querySelector("header > nav");
    navMenu.classList.remove("open-nav-menu");
}
// * MARK: FILTER MENU
const filterButton = document.querySelector("#filter-menu-open");
const filterCloseButton = document.querySelector("#filter-menu-close");
const filter = document.querySelector("#filter-menu");

if (filterButton !== null) {
    filterButton.addEventListener("click", openFilter);
    filterCloseButton.addEventListener("click", closeFilter);
}

function openFilter() {
    filter.classList.remove("filter-closed");
}

function closeFilter() {
    filter.classList.add("filter-closed");
}

// * MARK: SIDEBAR EXPAND
const expandButton = document.querySelector("body>aside>nav>button");

if (expandButton !== null) {
    expandButton.addEventListener("click", toggleSidebar);
}

function toggleSidebar() {
    const body = document.querySelector("body");
    body.classList.toggle("expand");
}

