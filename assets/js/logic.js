/* Toggle and Dark Mode for both form.js and blog.js */
const themeSwitcher = document.querySelector('#theme-switcher');

// to get light mode or dark mode
function toggleDarkMode () {
  let body = document.body;
  body.classList.toggle("dark-mode");
}

// listens for click of the toggle
themeSwitcher.addEventListener("click", toggleDarkMode)