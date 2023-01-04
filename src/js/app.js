// Get active navbar page
let path = window.location.pathname.split("/").filter((x) => x)[0];

let active = (path === undefined ? "home" : path) + "-nav";

const navElement = document.getElementById(active);
navElement.classList.add("active");
