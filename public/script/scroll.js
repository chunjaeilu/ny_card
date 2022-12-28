$(function () {
  $(window).on("scroll", function () {
    console.log(scrollY);

    if (scrollY >= 130) {
      $(".page2 h2").addClass("slide-up");
    }
    if (scrollY >= 300) {
      $(".page2 .sliders").addClass("opacity");
    }
    if (scrollY >= 500) {
      $(".page2 p").addClass("slide-up");
    }
    if (scrollY >= 800) {
      $(".page3 h2").addClass("slide-up");
    }
    if (scrollY >= 900) {
      $(".page3 .greeting-form textarea").addClass("slide-left");
      $(".page3 .greeting-form .info").addClass("slide-right");
    }
    if (scrollY >= 1100) {
      $(".page3 .messages").addClass("slide-up");
    }
    if (scrollY >= 1300) {
      $(".page3 .view-more").addClass("show");
    } else {
      $(".page3 .view-more").removeClass("show");
    }
  });
});
