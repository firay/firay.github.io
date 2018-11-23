$(function(){
  $('.btn').on('click', function(){
      $('.collapse').slideToggle();
    });
  });
// Menu js for Position fixed
    $(window).scroll(function(){
      var window_top = $(window).scrollTop() + 2; 
        if (window_top > 690){
          $('.nav-ul').addClass('nav-ul_fixed animated fadeInDown');
        } else {
          $('.nav-ul').removeClass('nav-ul_fixed animated fadeInDown');
        }
    });