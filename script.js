// ================================
// MOBILE MENU
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });


  // Close menu after clicking a link
  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");

    });

  });

}


// ================================
// FOOTER YEAR
// ================================

const year = document.getElementById("current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}
