// Automatically removes the `open` class from the Navbar in desktop view
window.onresize = window.onload = function () {
  const nav = document.getElementById("nav");
  let width = this.innerWidth;
  if (width > 876 && nav.classList.contains("open")) toggleNav();
};

function toggleNav() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
}
