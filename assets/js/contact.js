function initContactForm() {
  console.log("Initializing contact form...");

  const form = document.getElementById("c-contact-form");
  const alert = document.querySelector(".contact-form-alert");

  if (!form || !alert) {
    console.warn("Contact form elements not found!");
    return;
  }

  // Initialize EmailJS
  (function () {
    emailjs.init({
      publicKey: "wQP9ZyJKxe0nRtCvx",
    });
    console.log("EmailJS initialized.");
  })();

  // Form submission handling
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm("service_wvizx8l", "template_ekmr813", "#c-contact-form")
      .then(
        () => {
          console.log("Email sent successfully.");
          alert.innerHTML =
            "<span>Your message was sent successfully!</span> <i class='fa-solid fa-paw'></i>";
          form.reset();
          setTimeout(() => {
            alert.innerHTML = "";
          }, 5000);
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert.innerHTML =
            "<span>Your message was not sent!</span> <i class='bx bxs-error-alt'></i>";
          alert.title = error.text;
        }
      );
  });
}
