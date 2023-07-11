function nav_menu_list() {
  var hhight = $(".header").innerHeight();
  $(".nav-menu-lists").css("top", hhight);
  if ($(window).width() < 991) {
    $(".header .bottom-header .sub-menu-content").css("top", hhight);
    $(".header .bottom-header  .supper-sub-menulist").css("top", hhight);
  }
}
function inputfade() {
  if ($(window).width() < 991) {
    $(".header .open-close-btn .open-search ").click(function () {
      $(" .header .top-header .search-input").fadeToggle();
    });
  }
}

$(window).ready(function () {
  if ($(window).width() < 991) {
    $(".sub-menu-heading .sub-items").click(function () {
      $(this)
        .closest(".sub-menu-heading")
        .find(".sub-menu-content")
        .toggleClass("open-sub-menu");
      $(".sub-menu-content")
        .not($(this).closest(".sub-menu-heading").find(".sub-menu-content"))
        .removeClass("open-sub-menu");
    });
    $(".header .back-button").click(function () {
      $(this).closest(".sub-menu-content").removeClass("open-sub-menu");
    });
  }

  $(".product-list-colum.supper-sub-menulist .back-buttons").click(function () {
    $(this)
      .closest(".product-list-colum.supper-sub-menulist")
      .css("left", "-350px");
  });
  $(".supper-sub-menu").click(function () {
    $(this)
      .closest(".sub-menu-contents")
      .find(".supper-sub-menulist")
      .css("left", "0");
  });
  $(".account-button").click(function () {
    $(".buttons").toggleClass("open-detail");
  });
  $("#category-listes").mCustomScrollbar({
    scrollButtons: { enable: false },
    scrollInertia: 400,
  });
  $("#category-listes2").mCustomScrollbar({
    scrollButtons: { enable: false },
    scrollInertia: 400,
  });
  $("#category-listes3").mCustomScrollbar({
    scrollButtons: { enable: false },
    scrollInertia: 400,
  });

  $("img.input-close").click(function () {
    $(" .header .top-header .search-input").fadeOut();
  });
  $(".hamburger-menu").click(function () {
    $(".header").toggleClass("open_menu ");
  });
  $(".header .hamburger-menu").click(function () {
    $(".sub-menu-content").removeClass("open-sub-menu")
    $(".supper-sub-menulist").css("left", "-350px")
  });
  nav_menu_list();
  inputfade();
});

$(window).resize(function () {
  nav_menu_list();
});
