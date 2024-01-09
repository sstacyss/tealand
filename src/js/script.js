$(document).ready(function () {
  // Общие настройки для всех слайдеров
  const commonSettings = {
    infinite: true,
    arrows: true,
  };

  // Инициализация первого слайдера
  $(".slick-carousel").slick(
    $.extend({}, commonSettings, {
      prevArrow:
        '<button type="button" class="slick-prev"><img src="icons/arrow_previous.svg"></button>',
      nextArrow:
        '<button type="button" class="slick-next"><img src="icons/arrow_next.svg"></button>',
      autoplay: true,
      speed: 3500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 3500,
      cssEase: "linear",
    })
  );

  // Инициализация второго слайдера
  $(".multiple-carousel").slick(
    $.extend({}, commonSettings, {
      autoplay: false,
      speed: 8000,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplaySpeed: 0,
      cssEase: "linear",
    })
  );
});

// $(document).ready(function () {
//   $(".slick-carousel").slick({
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/arrow_previous.svg"></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/arrow_next.svg"></button>',
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplaySpeed: 2500,
//   });
// });

// $(document).ready(function () {
//   $(".multiple-carousel").slick({
//     infinite: true,
//     autoplay: true,
//     speed: 8000,
//     slidesToShow: 6,
//     slidesToScroll: 2,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//   });
// });
