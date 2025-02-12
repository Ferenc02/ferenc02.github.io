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

/* Typewriter effect */

let typeWriter = () => {
  const textElement = document.querySelector(".welcome-title");

  // Function to wrap text nodes in spans
  const wrapTextNodes = (element) => {
    const nodes = Array.from(element.childNodes); // Get all child nodes
    nodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const textContent = node.textContent.trim(); // Trim any extra whitespace
        const fragment = document.createDocumentFragment();
        textContent.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char.trim() === "" ? "\u00A0" : char; // Handle spaces

          // Add a non-breaking space if the character is m and first character
          if (char.trim() === "m" && fragment.childNodes.length < 20) {
            span.textContent += "\u00A0";
          }
          span.classList.add("char");
          fragment.appendChild(span);
        });
        element.replaceChild(fragment, node); // Replace the text node with spans
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        wrapTextNodes(node); // Recursively handle nested elements
      }
    });
  };

  // Wrap text in spans and animate
  wrapTextNodes(textElement);

  // Animate each character's opacity
  const characters = document.querySelectorAll(".char");
  characters.forEach((char, index) => {
    setTimeout(() => {
      char.style.opacity = "1";
    }, index * 50); // Adjust delay as needed
  });
};

typeWriter();
