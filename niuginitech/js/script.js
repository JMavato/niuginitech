
document.addEventListener("DOMContentLoaded", () => {

  // Mobile navigation
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(open));

      toggle.innerHTML = open
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // Automatic copyright year
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Enquiry form
  const form = document.querySelector("#contactForm");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const phone = document.querySelector("#phone").value.trim();
      const email = document.querySelector("#email").value.trim();
      const service = document.querySelector("#service").value;
      const message = document.querySelector("#message").value.trim();

      const subject = encodeURIComponent(
        "Niugini Tech Website Enquiry - " + service
      );

      const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Service Required: ${service}\n\n` +
        `Message:\n${message}`
      );

      window.location.href =
        `mailto:niuginitech@gmail.com?subject=${subject}&body=${body}`;
    });
  }

});

// IMAGE LIGHTBOX SCRIPT

document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeButton = document.getElementById("lightboxClose");

    const projectImages = document.querySelectorAll(
        ".project-image"
    );

    projectImages.forEach(function (image) {
        image.addEventListener("click", function () {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightboxImage.src = "";
        document.body.style.overflow = "";
    }

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

});

// PROJECT IMAGE SLIDESHOW
document.querySelectorAll(".project-slideshow").forEach(function (slideshow) {

    const images = slideshow.querySelectorAll(".project-image");

    if (images.length <= 1) return;

    let currentIndex = 0;

    setInterval(function () {

        images[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add("active");

    }, 2000);

});

/* AUTOMATIC COPYRIGHT YEAR */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
