//mobile menu js
$(".menu-toggle").click(function () {
  $(".top-menus").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});
//header animation
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#header").addClass("nav-fixed");
  } else {
    $("#header").removeClass("nav-fixed");
  }
});

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#header-menus").addClass("header-links-change");
  } else {
    $("#header-menus").removeClass("header-links-change");
  }
});

$(document).ready(function () {
  $(".header-menus li").hover(
    function () {
      $(this).children("ul").slideDown("fast");
    },
    function () {
      $("ul", this).slideUp("fast");
    }
  );
  $(".hamburger-menu").click(function () {
    $(".bar-1, .bar-2, .bar-3").toggleClass("open");
    $(".header-menus").slideToggle("fast");
  });
});

jQuery(document).ready(function ($) {
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".live-classes-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  // get video source from data-src button
  var $videoSrc;
  $(".demo-video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // autoplay video on modal load
  $("#videomodal").on("shown.bs.modal", function (e) {
    // youtube iframe configuration and settings
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&rel=0&controls=1&loop=1&modestbranding=1"
    );
  });
  // stop playing the youtube video when modal closed
  $("#videomodal").on("hide.bs.modal", function (e) {
    // stop video
    $("#video").attr("src", $videoSrc);
  });
});

$(window).scroll(function (e) {
  var $el = $(".fixedElement");
  var isPositionFixed = $el.css("position") == "fixed";
  if ($(this).scrollTop() > 200 && !isPositionFixed) {
    $el.css({ position: "sticky  ", top: "0px" });
  }
  if ($(this).scrollTop() < 200 && isPositionFixed) {
    $el.css({ position: "static", top: "0px" });
  }
});

$("body").on("click", "li", function () {
  $("li.active").removeClass("active");
  $(this).addClass("active");
});

var a = 0;
$(window).scroll(function () {
  var oTop = $("#about-counting").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".count-number").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  }
});