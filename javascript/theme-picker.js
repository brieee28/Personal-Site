const rootElement = document.documentElement;
const themeSelectElement = document.getElementById("theme-select-entry-theme");
const colorSelectElement = document.getElementById("theme-select-entry-color");
themeSelectElement.addEventListener("change", () => {
    rootElement.className = themeSelectElement.value;
});
colorSelectElement.addEventListener("change", () => {
    rootElement.style.setProperty("--accent-color", colorSelectElement.value);
});

const themeMenuElement = document.getElementById("theme-menu");
const themeMenuToggleElement = document.getElementById("theme-menu-toggle");
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