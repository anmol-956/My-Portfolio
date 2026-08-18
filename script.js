// ================= MOBILE MENU =================

document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const navbar = document.getElementById("navbar");

  // Check if mobile menu elements exist
  if (menuBtn && navbar) {

    // ================= OPEN / CLOSE MOBILE MENU =================

    menuBtn.addEventListener("click", function () {

      navbar.classList.toggle("active");

      const icon = menuBtn.querySelector("i");

      if (navbar.classList.contains("active")) {

        // Change hamburger to X
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

      } else {

        // Change X back to hamburger
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

      }

    });


    // ================= CLOSE MENU AFTER CLICK =================

    const navLinks = document.querySelectorAll("#navbar a");

    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        // Close mobile menu
        navbar.classList.remove("active");

        // Change X back to hamburger
        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

      });

    });

  }


  // ================= SCROLL ANIMATION =================

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(

    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },

    {
      threshold: 0.15
    }

  );


  sections.forEach(function (section) {

    observer.observe(section);

  });

});