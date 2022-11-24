// Get active navbar page
const path = window.location.pathname.replace(/.html$/, "");

let active =
  (path === "/index.html" || path === "/" ? "home" : path.replace(/^\//, "")) +
  "-nav";
const navElement = document.getElementById(active);
navElement.classList.add("active");
