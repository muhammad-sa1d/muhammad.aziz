document.querySelector(".menubtn").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("translate-x-full");
});
document.querySelector(".xbtn").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("translate-x-full");
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 0,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        500: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }
  });
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-nex",
        prevEl: ".swiper-button-pre",
      },
    });