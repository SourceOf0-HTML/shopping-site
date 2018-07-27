
/* global $ */

$(document).ready(function() {
  /* カルーセル初期化 */
  $(".owl-carousel").owlCarousel(
    {
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      autoplay: true,
    }
  );
});
