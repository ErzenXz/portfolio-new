function setTheme(themeName) {
   localStorage.setItem("theme", themeName);
   document.documentElement.className = themeName;
}

const body = document.querySelector("body"),
   modeToggle = body.querySelector("#dark-mode-toggle");

let getMode = localStorage.getItem("mode");

if (getMode && getMode === "light") {
   body.classList.toggle("dark");
}

modeToggle.addEventListener("click", () => {
   body.classList.toggle("dark");
   if (body.classList.contains("dark")) {
      localStorage.setItem("mode", "dark");
   } else {
      localStorage.setItem("mode", "light");
   }
});
