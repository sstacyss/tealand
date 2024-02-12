// BURGER-MENU

document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".header__burger");
  var mobileMenu = document.querySelector(".header__menu-mobile");

  burger.addEventListener("click", function () {
    this.classList.toggle("open");
    mobileMenu.classList.toggle("show");
  });
});

$(document).ready(function () {
  const commonSettings = {
    infinite: true,
    arrows: true,
  };

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

      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    })
  );

  $(".multiple-carousel").slick(
    $.extend({}, commonSettings, {
      autoplay: false,
      speed: 8000,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplaySpeed: 0,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    })
  );
});

// SMOOTH SCROLL AND PAGE UP

$(window).scroll(function () {
  if ($(this).scrollTop() > 1600) {
    $(".pageup").fadeIn();
  } else {
    $(".pageup").fadeOut();
  }
});
$("a[href='#up']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 900);
  return false;
});
new WOW({
  offset: 100,
}).init();
