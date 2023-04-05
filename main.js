const menuBtn = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show-links");
});
