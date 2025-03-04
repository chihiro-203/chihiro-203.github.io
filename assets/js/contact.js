(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "wQP9ZyJKxe0nRtCvx",
  });
})();

const form = document.getElementById("c-contact-form");
const alert = document.querySelector(".contact-form-alert");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_wvizx8l', 'template_ekmr813', '#c-contact-form')
        .then(() => {
            // console.log('SUCCESS!');
            alert.innerHTML = "<span>Your message sent successfully!</span><i class='fa-solid fa-paw'></i>"
            form.reset();
            setTimeout(() => {
                alert.innerHTML = "";
            }, 5000);
        }, (error) => {
            // console.log('FAILED...', error);
            alert.innerHTML = "<span>Your message sent unsuccessfully!</span><i class='bx bxs-error-alt'></i>"
            alert.title = error;
        });
});
