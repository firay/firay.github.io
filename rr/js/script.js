                                  /**скрипт на поиск**/
$(function(){
  $('.search-button').on('click', function(){
      $('.form').slideToggle();
    });
  });



																	/**cкрипт на слайдер**/
$('.sl').slick({
	autoplay:false,
	arrows:true,
	dots:true,
	lazyLoad: 'progressive',
	  responsive: [
    {
      breakpoint: 920,
      settings: {
        dots:true,
        arrows:false,
      	}
     },
     {	
      breakpoint: 612,
      settings: {
        dots:true,
        arrows:false,
      	}
      }
]
});


																			/**скрипт на меню**/
$(function(){
	$('.btn_menu').on('click', function(){
			$('.collapse').slideToggle();
		});
	});
																			/**скрипт на блоки**/
$('.btn-1').click(function(){
  $(".gelary-1").fadeToggle(100);
}); 
$('.btn-2').click(function(){
  $(".gelary-2").fadeToggle(100);
});
$('.btn-3').click(function(){
  $(".gelary-3").fadeToggle(100);
});
$('.btn-4').click(function(){
  $(".gelary-4").fadeToggle(100);
}); 
$('.btn-5').click(function(){
  $(".gelary-5").fadeToggle(100);
});
																		/**скрипт на 2 слайдер**/
$('.sl-2').slick({
	autoplay:false,
	arrows:false,
	dots:false,
	infinite: true,
  slidesToShow: 3,
 	slidesToScroll:1,
	lazyLoad: 'progressive',
      responsive: [
     {  
      breakpoint: 720,
      settings: {
      dots:false,
      slidesToShow: 2,
        }
      }
]
});
                              /**прелоадер**/
  $(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });