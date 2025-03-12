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
      document
        .querySelector(".bottom-nav .menu li a[href*=" + id + "]")
        .classList.add("current");
    } else {
      document
        .querySelector(".bottom-nav .menu li a[href*=" + id + "]")
        .classList.remove("current");
    }
  });
});

// bottom navigation appears when scrolling
// window.addEventListener("DOMContentLoaded", () => {
//   const bottomNav = document.querySelector(".bottom-nav");
//   bottomNav.classList.toggle("active", window.scrollY < 10);
// });

// const bottomNav = document.querySelector(".bottom-nav");
// const menuHideBtn = document.querySelector(".menu-hide-btn");
// const menuShowBtn = document.querySelector(".menu-show-btn");
// var navTimeout;
// console.log(!bottomNav)
// show/hide bottom navigation through scrolling
// window.addEventListener("scroll", () => {

//   const bottomNav = document.querySelector(".bottom-nav");
//   const menuHideBtn = document.querySelector(".menu-hide-btn");
//   const menuShowBtn = document.querySelector(".menu-show-btn");
//   var navTimeout;

//   bottomNav.classList.add("active");
//   menuShowBtn.classList.remove("active");

//   if (window.scrollY < 10) {
//     menuHideBtn.classList.remove("active");
//     menuShowBtn.classList.remove("active");

//     function scrollStopped() {
//       bottomNav.classList.add("active");
//     }
//     clearTimeout(navTimeout);
//     navTimeout = setTimeout(scrollStopped, 2500);
//   }

//   if (window.scrollY > 10) {
//     menuHideBtn.classList.add("active");
//     function scrollStopped() {
//       bottomNav.classList.remove("active");
//       menuShowBtn.classList.add("active");
//     }
//     clearTimeout(navTimeout);
//     navTimeout = setTimeout(scrollStopped, 2500);
//   }
// });

// document.querySelector(".menu-hide-btn").addEventListener("click", () => {
//   document.querySelector(".bottom-nav").toggle("active");
//   document.querySelector(".menu-hide-btn").toggle("active");
//   document.querySelector(".menu-show-btn").toggle("active");
// })
