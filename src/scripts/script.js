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
// * FILTER MENU
const filterButton = document.querySelector("#filter-menu-open");
const filterCloseButton = document.querySelector("#filter-menu-close");
const filter = document.querySelector("#filter-menu");

filterButton.addEventListener("click", openFilter);
filterCloseButton.addEventListener("click", closeFilter);

function openFilter() {
    filter.classList.remove("filter-closed");
}

function closeFilter() {
    filter.classList.add("filter-closed");
}

// * SIDEBAR EXPAND
const expandButton = document.querySelector("body>aside>nav>button");

expandButton.addEventListener("click", toggleSidebar);

function toggleSidebar() {
    const body = document.querySelector("body");
    body.classList.toggle("expand");
}

// * COLLEAGUE DETAIL PAGE TABS
const aboutUserButton = document.querySelector("#about-user");
const userPostsButton = document.querySelector("#user-posts");
const posts = document.querySelector(".posts");
const about = document.querySelector(".biography");

aboutUserButton.addEventListener("click", openAboutUser);
userPostsButton.addEventListener("click", openUserPosts);

function openAboutUser() {
    about.classList.remove("hidden");
    posts.classList.add("hidden");
    aboutUserButton.classList.add("active");
    userPostsButton.classList.remove("active");
}
function openUserPosts() {
    about.classList.add("hidden");
    posts.classList.remove("hidden");
    aboutUserButton.classList.remove("active");
    userPostsButton.classList.add("active");
}