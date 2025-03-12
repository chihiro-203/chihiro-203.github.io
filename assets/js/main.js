fetch("../html/components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
  });

fetch("../html/components/bottomNav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("bottom-nav-container").innerHTML = data;
  });

window.addEventListener("scroll", () => {
  const navMenuSections = document.querySelectorAll(".nav-menu-section");
  const scrollY = window.pageYOffset;

  navMenuSections.forEach((navMenuSection) => {
    let sectionHeight = navMenuSection.offsetHeight;
    let sectionTop = navMenuSection.offsetTop - 50;
    let id = navMenuSection.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
    } else {
      document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
    }
  });
});
