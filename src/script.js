// Initialize theme based on localStorage or system preference
const initTheme = () => {
  const isDark =
    localStorage.theme === "dark" ||
    (!localStorage.theme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDark);
  localStorage.theme = isDark ? "dark" : "light";
};

// Toggle theme between dark and light
const toggleTheme = () => {
  const isDark = localStorage.theme === "dark";
  document.documentElement.classList.toggle("dark", !isDark);
  localStorage.theme = isDark ? "light" : "dark";
};

// Initialize theme on load
initTheme();
