function initResumeTabs() {
  const tabs = document.querySelector(".resume-tabs");
  if (!tabs) return; 

  const btns = tabs.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".resume-tab-content");

  const nav = function (click) {
    contents.forEach((content) => {
      content.style.display = "none";
      content.classList.remove("active");
    });

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    contents[click].style.display = "flex";
    setTimeout(() => {
      contents[click].classList.add("active");
    }, 100);
    btns[click].classList.add("active");
  };

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      nav(i);
    });
  });
}
