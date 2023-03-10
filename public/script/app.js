/* app.js */

$(function () {
  /* 눈 내리는 효과 */
  $(document).snowfall({
    deviceorientation: true,
    round: true,
    minSize: 1,
    maxSize: 5,
    flakeCount: 120,
  });

  /* 이미지 슬라이더 */
  let imgNum = 0;
  $(".page2 .sliders .btn-prev").on("click", function () {
    if (imgNum <= 0) {
      return;
    }
    imgNum--;
    $(".page2 .slider-pagination .btn-img").removeClass("show");
    $(".page2 .slider-pagination .btn-img").eq(imgNum).addClass("show");

    if (imgNum == 1) {
      $(".page2 .sliders .slider-wrap").removeClass("trans670");
      $(".page2 .sliders .slider-wrap").addClass("trans335");
    } else if (imgNum == 2) {
      $(".page2 .sliders .slider-wrap").removeClass("trans335");
      $(".page2 .sliders .slider-wrap").addClass("trans670");
    } else if (imgNum == 0) {
      $(".page2 .sliders .slider-wrap").removeClass("trans335");
      $(".page2 .sliders .slider-wrap").removeClass("trans670");
    }
  });

  $(".page2 .sliders .btn-next").on("click", function () {
    if (imgNum >= 2) {
      return;
    }
    imgNum++;
    $(".page2 .slider-pagination .btn-img").removeClass("show");
    $(".page2 .slider-pagination .btn-img").eq(imgNum).addClass("show");

    if (imgNum == 1) {
      $(".page2 .sliders .slider-wrap").removeClass("trans670");
      $(".page2 .sliders .slider-wrap").addClass("trans335");
    } else if (imgNum == 2) {
      $(".page2 .sliders .slider-wrap").removeClass("trans335");
      $(".page2 .sliders .slider-wrap").addClass("trans670");
    } else if (imgNum == 0) {
      $(".page2 .sliders .slider-wrap").removeClass("trans335");
      $(".page2 .sliders .slider-wrap").removeClass("trans670");
    }
  });

  $(".page2 .slider-pagination .btn-img").on("click", function () {
    imgNum = $(this).index();
    $(".page2 .slider-pagination .btn-img").removeClass("show");
    $(this).addClass("show");

    if (imgNum == 1) {
      $(".page2 .sliders .slider-wrap").removeClass("trans670");
      $(".page2 .sliders .slider-wrap").addClass("trans335");
    } else if (imgNum == 2) {
      $(".page2 .sliders .slider-wrap").removeClass("trans335");
      $(".page2 .sliders .slider-wrap").addClass("trans670");
    } else if (imgNum == 0) {
      $(".page2 .sliders .slider-wrap").removeClass("trans335");
      $(".page2 .sliders .slider-wrap").removeClass("trans670");
    }
  });

  /* 삭제버튼 클릭 효과 */
  $(".page3 .messages li .btn-delete").on("click", function (event) {
    event.stopPropagation();
    $(".page3 .messages li").removeClass("choosed");
    $(this).parents("li").addClass("choosed");
    $(".page3 li .popup").removeClass("show");
    $(".page3 li.choosed .popup-delete").addClass("show");
  });

  /* 수정버튼 클릭 효과 */
  $(".page3 .messages li .btn-edit").on("click", function (event) {
    event.stopPropagation();
    $(".page3 .messages li").removeClass("choosed");
    $(this).parents("li").addClass("choosed");
    $(".page3 li .popup").removeClass("show");
    $(".page3 li.choosed .popup-edit").addClass("show");
  });

  /* 취소버튼 클릭 효과 */
  $(".page3 .popup .btn-close").on("click", function () {
    $(".page3 .popup").removeClass("show");
    $(".page3 .messages li").removeClass("choosed");
  });

  /* 팝업영역 이벤트 전파 중단 */
  $(".page3 .popup").on("click", function (event) {
    event.stopPropagation();
  });

  /* 글목록 선택시 전체 내용 보기 */
  $(".page3 .messages li").on("click", function () {
    $(".page3 .messages li").not(this).removeClass("view-all");
    $(this).toggleClass("view-all");
  });
});
