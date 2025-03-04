document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".work-tabs");
  const btns = tabs.querySelectorAll(".tab-btn");
  const cardsWithModals = document.querySelectorAll(
    ".work-container .card-with-modal"
  );

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      cardsWithModals.forEach((cardWithModal) => {
        if (filter === "all" || cardWithModal.classList.contains(filter)) {
          cardWithModal.classList.remove("hidden");

          setTimeout(() => {
            cardWithModal.style.opacity = "1";
            cardWithModal.style.transition = ".5s ease";
          }, 1);
        } else {
          cardWithModal.classList.add("hidden");

          setTimeout(() => {
            cardWithModal.style.opacity = "0";
            cardWithModal.style.transition = ".5s ease";
          }, 1);
        }
      });

      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});

const cardsWithModals = document.querySelectorAll(
  ".work-container .card-with-modal"
);
cardsWithModals.forEach((cardWithModal) => {
  const card = cardWithModal.querySelector(".work-card");
  const backdrop = cardWithModal.querySelector(".work-modal-backdrop");
  const closeBtn = cardWithModal.querySelector(".modal-close-btn");
  const modal = cardWithModal.querySelector(".work-modal");

  card.addEventListener("click", () => {
    backdrop.style.display = "flex";
    setTimeout(() => {
      backdrop.classList.add("active");
    }, 300);
    setTimeout(() => {
      modal.classList.add("active");
    }, 300);
  });

  closeBtn.addEventListener("click", () => {
    setTimeout(() => {
      backdrop.style.display = "none";
    }, 500);
    setTimeout(() => {
      backdrop.classList.remove("active");
      modal.classList.remove("active");
    }, 100);
  });
});
