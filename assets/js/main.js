fetch("/assets/html/components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
  });

fetch("/assets/html/components/bottomNav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("bottom-nav-container").innerHTML = data;
  });

window.addEventListener("scroll", () => {
  const cHeader = document.querySelector(".c-header");
  cHeader.classList.toggle("shrink", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
  const navMenuSections = document.querySelectorAll(".nav-menu-section");
  const scrollY = window.pageYOffset;

  document.querySelectorAll(".bottom-nav .menu li a").forEach((item) => {
    item.classList.remove("current");
  });

  navMenuSections.forEach((navMenuSection) => {
    let sectionHeight = navMenuSection.offsetHeight;
    let sectionTop = navMenuSection.offsetTop - 50;
    let id = navMenuSection.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      let activeLink = document.querySelector(
        `.bottom-nav .menu li a[href="#${id}"]`
      );
      if (activeLink) {
        activeLink.classList.add("current");
      }
    }
  });
});
