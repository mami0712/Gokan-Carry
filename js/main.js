$(window).on('load scroll', function (){

  var box = $('.fadeIn');
  var animated = 'animated';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    //画面内のどの位置で処理を実行するかで「100」の値を変更
    if(scrollPos > boxOffset - wh + 600 ){
      $(this).addClass(animated);
    }
  });

});

$(window).on('load scroll', function (){

  var box = $('.img1');
  var animated = 'animated';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    //画面内のどの位置で処理を実行するかで「100」の値を変更
    if(scrollPos > boxOffset - wh + 300 ){
      $(this).addClass(animated);
    }
  });

});
$(window).on('load scroll', function (){

  var box = $('.img2');
  var animated = 'animated';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    //画面内のどの位置で処理を実行するかで「100」の値を変更
    if(scrollPos > boxOffset - wh + 400 ){
      $(this).addClass(animated);
    }
  });

  $(function () {
    var $header = $(".bar");
    $(window).on("load scroll", function () {
      var value = $(this).scrollTop();
      if (value > 100) { //スクロールしたら.scroll付与
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    });
  });


});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) { //100px以上スクロールした固定
      $('.bar').addClass('fixed');
    } else {
      $('.bar').removeClass('fixed');
    }
    
  });
});
