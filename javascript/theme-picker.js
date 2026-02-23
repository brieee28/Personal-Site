const rootElement = document.documentElement;
const themeSelectElement = document.getElementById("theme-select-entry-theme");
const colorSelectElement = document.getElementById("theme-select-entry-color");

themeSelectElement.addEventListener("change", () => {
    rootElement.className = themeSelectElement.value;
});
colorSelectElement.addEventListener("change", () => {
    rootElement.style.setProperty("--accent-color", colorSelectElement.value);
});