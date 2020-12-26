$(function() {
    $('.home').on('click', function(){
        $('.cat').animate({
            opacity: "1"
        }, 0, 'none');
        $('#hand_p').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_s').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_i').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_l').animate({
            opacity: "0",
        }, 0, 'none');
    });
    
    $('.profile').on('click', function(){
        $('#hand_p').animate({
            opacity: "1"
        }, 0, 'none');
        $('.cat').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_s').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_i').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_l').animate({
            opacity: "0",
        }, 0, 'none');
    });

    $('.skills').on('click', function(){
        $('#hand_s').animate({
            opacity: "1"
        }, 0, 'none');
        $('.cat').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_p').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_i').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_l').animate({
            opacity: "0",
        }, 0, 'none');
    });

    $('.items').on('click', function(){
        $('#hand_i').animate({
            opacity: "1"
        }, 0, 'none');
        $('.cat').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_p').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_s').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_l').animate({
            opacity: "0",
        }, 0, 'none');
    });

    $('.links').on('click', function(){
        $('#hand_l').animate({
            opacity: "1",
        }, 0, 'none');
        $('.cat').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_p').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_s').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_i').animate({
            opacity: "0",
        }, 0, 'none');
    });
});
$(function(){
    $("a[href^='#']").on("click",function(){
      var speed = 500;
      var header_height = $("header").height();
      var href = $(this).attr("href");
      var target = $(href == "#" || href == ""?"html":href);
      var position = target.offset().top - header_height;
      $("html, body").animate({
        "scroll-top": position }, speed, "swing");
      return false;
    });
});
$(function(){
    $(window).scroll(function (){
      $("#prof_main").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("fade_on");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
});
$(function(){
    $(window).scroll(function (){
      $("#skills_main").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("fade_on");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
});
$(function(){
    $(window).scroll(function (){
      $("#items_main").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("fade_on");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
});
$(function(){
    $(window).scroll(function (){
      $("#links_main").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("fade_on");
        } else {
          $(this).removeClass("fade_on");
        }
      });
    });
});