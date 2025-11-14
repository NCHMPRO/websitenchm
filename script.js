const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const yearSpan = document.getElementById("year");

if (nav && navToggle) {
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

