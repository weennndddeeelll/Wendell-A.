const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.dataset.section;

    // Remove active classes
    navLinks.forEach((l) => l.classList.remove("active"));
    sections.forEach((sec) => {
      sec.classList.remove("active");
      sec.style.opacity = 0;
    });

    // Add active classes
    link.classList.add("active");
    const activeSection = document.getElementById(target);
    activeSection.classList.add("active");

    // Fade in effect
    setTimeout(() => {
      activeSection.style.opacity = 1;
    }, 100);
  });
});
