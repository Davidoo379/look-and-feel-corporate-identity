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

// * MARK: COLLEAGUE DETAIL PAGE TABS
const aboutUserButton = document.querySelector("#about-user");
const userPostsButton = document.querySelector("#user-posts");
const posts = document.querySelector(".posts");
const about = document.querySelector(".biography");

if (aboutUserButton !== null) {
    aboutUserButton.addEventListener("click", openAboutUser);
    userPostsButton.addEventListener("click", openUserPosts);
}

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

// * MARK: SETTINGS TABS
const accountSettingsButton = document.querySelector("#account-settings");
const privacyButton = document.querySelector("#privacy");
const preferencesButton = document.querySelector("#preferences");
const accountSettings = document.querySelector(".account-settings");
const privacy = document.querySelector(".privacy");
const preferences = document.querySelector(".preferences");

if (accountSettingsButton !== null) {
    accountSettingsButton.addEventListener("click", openAccountSettings);
    privacyButton.addEventListener("click", openPrivacy);
    preferencesButton.addEventListener("click", openPreferences);
}

function openAccountSettings() {
    accountSettings.classList.remove("hidden");
    privacy.classList.add("hidden");
    preferences.classList.add("hidden");
    accountSettingsButton.classList.add("active");
    privacyButton.classList.remove("active");
    preferencesButton.classList.remove("active");
}
function openPrivacy() {
    accountSettings.classList.add("hidden");
    privacy.classList.remove("hidden");
    preferences.classList.add("hidden");
    accountSettingsButton.classList.remove("active");
    privacyButton.classList.add("active");
    preferencesButton.classList.remove("active");
}
function openPreferences() {
    accountSettings.classList.add("hidden");
    privacy.classList.add("hidden");
    preferences.classList.remove("hidden");
    accountSettingsButton.classList.remove("active");
    privacyButton.classList.remove("active");
    preferencesButton.classList.add("active");
}