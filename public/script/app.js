/* app.js */

$(function () {
  /* 눈 내리는 효과 */
  $(document).snowfall({
    deviceorientation: true,
    round: true,
    minSize: 1,
    maxSize: 5,
    flakeCount: 80,
  });

  /* 삭제버튼 클릭 효과 */
  $(".page3 .messages li .btn-delete").on("click", function () {
    $(".page3 .popup-delete").addClass("show");
    $(".page3 .messages li").removeClass("choosed");
    $(this).parents("li").addClass("choosed");
  });

  /* 수정버튼 클릭 효과 */
  $(".page3 .messages li .btn-edit").on("click", function () {
    $(".page3 .popup-edit").addClass("show");
    $(".page3 .messages li").removeClass("choosed");
    $(this).parents("li").addClass("choosed");
  });

  /* 취소버튼 클릭 효과 */
  $(".page3 .popup .btn-close").on("click", function () {
    $(".page3 .popup").removeClass("show");
    $(".page3 .messages li").removeClass("choosed");
  });
});
