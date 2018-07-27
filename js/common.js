
/* global $ */

$(document).ready(function() {
  
  /* メインハンバーガーメニュー開閉 */
  $("#sp-main-nav .toggle-menu").click(function() {
    $("#sp-main-nav ul").slideToggle();
    return false;
  });
  
  /* サイドハンバーガーメニュー開閉 */
  $("#side-menu .sub-menu-title").click(function() {
    var $menu = $(this).parent();
    var $menu_content = $menu.find("ul");
    
    $menu.toggleClass("open");
  });
  
  /* ページトップへスクロール */
  $("#footer .page-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 200, "swing");
    return false;
  });
});
