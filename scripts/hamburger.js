const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav-menu");
const asideToggle = document.querySelector(".side");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  asideToggle.classList.toggle("active");
});

document.querySelectorAll(".header-nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    asideToggle.classList.remove("active");
  })
);
