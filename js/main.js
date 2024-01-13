document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-btn");
  const headerList = document.querySelector(".header__list");

  menuButton.addEventListener("click", function () {
    headerList.classList.toggle("header__list--active");
  });
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
