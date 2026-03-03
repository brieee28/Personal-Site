const rootElement = document.documentElement;

const themeMenuElement = document.getElementById("theme-menu");
const themeMenuToggleElement = document.getElementById("theme-menu-toggle");
/*
let themeMenuVisible = false;
themeMenuToggleElement.addEventListener("click", () => {
    if (themeMenuVisible == false) {
        themeMenuVisible = true;
        themeMenuElement.style.setProperty("display", "block");
    } else {
        themeMenuVisible = false;
        themeMenuElement.style.setProperty("display", "none");
    }
});
*/
const themesDivElement = document.getElementById("themes-div");
themesDivElement.addEventListener("mouseenter", () => {
    themeMenuElement.style.setProperty("opacity", 1);
    themeMenuElement.style.setProperty("visibility", "visible");
});
themesDivElement.addEventListener("mouseleave", () => {
    themeMenuElement.style.setProperty("opacity", 0);
    themeMenuElement.style.setProperty("visibility", "hidden");
});

const themeSelectElement = document.getElementById("theme-select-entry-theme");
themeSelectElement.addEventListener("change", () => {
    rootElement.className = themeSelectElement.value;
});

const colorSelectElement = document.getElementById("theme-select-entry-color");
colorSelectElement.addEventListener("change", () => {
    rootElement.style.setProperty("--accent-color", colorSelectElement.value);
});

const fontSelectElement = document.getElementById("theme-select-entry-font");
fontSelectElement.addEventListener("change", () => {
    rootElement.style.setProperty("--font", fontSelectElement.value);
});