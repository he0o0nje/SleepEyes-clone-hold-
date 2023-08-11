$(function () {
  btnmenu = 0;
  $(".btnmenu").click(function () {
    if (btnmenu == 0) {
      $(this).stop().addClass("openmenu");
      $(".allmenu").addClass("act");
      $(".allmenu").removeClass("close");
      btnmenu = 1;
    } else {
      $(this).stop().removeClass("openmenu");
      $(".allmenu").removeClass("act");
      $(".allmenu").addClass("close");
      btnmenu = 0;
    }
  });

  //모바일구분
  $(window)
    .resize(function () {
      windowWidth = $(window).width();
      if (windowWidth < 1400) {
        $("body").removeClass("pc");
        $("body").addClass("mobile");
      } else {
        $("body").addClass("pc");
        $("body").removeClass("mobile");
      }
    })
    .resize();

  $(document).on("click", ".mobile .menuwrap .menuarea>ul>li", function () {
    if ($(this).attr("class") == "act") {
      $(this).find("ul").slideUp();
    } else {
      $(this).find("ul").slideDown();
    }
    $(this).toggleClass("act");
    $(this).siblings("li").removeClass("act");
    $(this).siblings("li").find("ul").slideUp();
  });

  $(".head .pc_nav>ul>li").mouseover(function () {
    liNum = $(".head .pc_nav>ul>li").index($(this));
    $("#header").addClass("wh");
    $(".head .pc_nav .bg").stop().slideDown();
    $(this)
      .find(".sub")
      .addClass("act")
      .parent()
      .siblings()
      .find(".sub")
      .removeClass("act");
  });
  $("#header").mouseleave(function () {
    $("#header").removeClass("wh");
    $(".head .pc_nav .bg").stop().slideUp();
    $(this).find(".sub").removeClass("act");
  });

  $(".head .gnb .language>a:first-child").click(function (e) {
    e.preventDefault();
    if ($(this).parent().hasClass("active") == false) {
      $(this).parent().addClass("active");
    } else {
      $(this).parent().removeClass("active");
    }
  });
});
