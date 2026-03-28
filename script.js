document.addEventListener("DOMContentLoaded", function () {
  // MOBILE NAV TOGGLE
  const menuBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("open");
    });
  }

  // SMOOTH SCROLL
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        if (navLinks) {
          navLinks.classList.remove("active");
        }
      }
    });
  });

  // FADE IN ON SCROLL
  const fadeItems = document.querySelectorAll(".fade-in");

  function revealOnScroll() {
    fadeItems.forEach(function (item) {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - 100) {
        item.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // SIMPLE FORM HANDLER
  const form = document.querySelector(".join-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]')?.value.trim();
      const country = form.querySelector('input[name="country"]')?.value.trim();
      const skill = form.querySelector('input[name="skill"]')?.value.trim();
      const whatsapp = form.querySelector('input[name="whatsapp"]')?.value.trim();

      if (!name || !country || !skill || !whatsapp) {
        alert("Please fill in all fields.");
        return;
      }

      alert("Application submitted successfully.");
      form.reset();
    });
  }
});
