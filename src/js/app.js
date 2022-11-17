// Get active navbar page
const path = window.location.pathname.replace(/.html$/, "");
console.log(path);

let active =
  (path === "/index.html" || path === "/" ? "home" : path.replace(/^\//, "")) +
  "-nav";
const navElement = document.getElementById(active);
navElement.classList.add("active");
