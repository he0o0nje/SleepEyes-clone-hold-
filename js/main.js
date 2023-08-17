$(function () {
  $("#contents").contents({
    navigation: true,
    responsiveWidth: 1400,
    scrollingSpeed: 1400,
    onLeave: function (anchorLink, index) {
      if (index == 1) {
        $("#header").removeClass("bl");
        $("#fp-nav").removeClass("bl");
        $("#btn_top").css("opacity", "0");
      } else {
        $("#btn_top").css("opacity", "1");
      }
      if (index == 2) {
        $("#header").removeClass("bl");
        $("#fp-nav").removeClass("bl");
      }
      if (index == 3) {
        $("#header").addClass("bl");
        $("#fp-nav").addClass("bl");
      }
      if (index == 4) {
        $("#header").addClass("bl");
        $("#fp-nav").removeClass("bl");
      }
      if (index == 5) {
        $("#btn_top").css("opacity", "1");
        $("#scroll").fadeOut();
      } else {
        $("#scroll").css("opacity", "1");
      }
    },
    afterSlideLoad: function (anchorLink, index) {},
  });

  swiper1 = new Swiper(".visual", {
    effect: "fade",
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 1500,
    loop: true,
    navigation: {
      nextEl: ".vnext",
      prevEl: ".vprev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    on: {
      activeIndexChange: function () {
        //$(".swiper-slide").eq(this.realIndex + 1).addClass("on").siblings().removeClass("on");
      },
    },
  });

  swiper2 = new Swiper(".notice", {
    spaceBetween: 40,
    slidesPerView: "auto",
    speed: 1500,
    loop: true,
    breakpoints: {
      812: {
        spaceBetween: 10,
      },
    },
    on: {
      activeIndexChange: function () {
        //$(".swiper-slide").eq(this.realIndex + 1).addClass("on").siblings().removeClass("on");
      },
    },
  });

  $(document).on("click", "#btn_top", function () {
    $.fn.contents.moveTo(1, 1);
  });
});
