const imgSwiper = new Swiper(".imageSwiper", {
  slidePerView: 1,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
const menu = document.querySelector("#subMenu");
const hamber = document.querySelector(".hamburger");
hamber.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
});
