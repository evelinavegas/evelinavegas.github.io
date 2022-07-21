$('.menu-btn').on('click', function(e){
  e.preventDefault;
  $('.menu-btn').toggleClass('menu-btn-active');
});
$('.menu-btn').on('click', function(){
  $('.burger-menu').toggleClass('b-menu-active');
});

var $btnTop = $('#js-toTop')
$(window).on("scroll", function(){
  if($(window).scrollTop() > 20){
      $btnTop.fadeIn();
  }else{
      $btnTop.fadeOut();
  }
});

$btnTop.on("click", function(){
  $("html,body").animate({scrollTop:0}, 900)
});