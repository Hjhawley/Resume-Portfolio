const toggleButton = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = storedTheme || (prefersDarkScheme.matches ? "dark-mode" : "light-mode");

if (currentTheme === "dark-mode") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}

toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark-mode" : "light-mode");
});
