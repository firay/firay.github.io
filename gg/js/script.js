//cкрипт на слайдер
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
//menu collapse
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

// Single page scroll menu
  var pluginName = 'ScrollIt',
    pluginVersion = '1.0.3';

  /*
   * OPTIONS
   */
  var defaults = {
    upKey: 38,
    downKey: 40,
    easing: 'linear',
    scrollTime: 600,
    activeClass: 'active',
    onPageChange: null,
    topOffset : -70
  };

  $.scrollIt = function(options) {

    /*
     * DECLARATIONS
     */
    var settings = $.extend(defaults, options),
      active = 0,
      lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');
    /*
     * METHODS
     */

    /**
     * navigate
     *
     * sets up navigation animation
     */
    var navigate = function(ndx) {
      if(ndx < 0 || ndx > lastIndex){ return; }

      var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
      $('html,body').animate({
        scrollTop: targetTop,
        easing: settings.easing
      }, settings.scrollTime);
    };

    /**
     * doScroll
     *
     * runs navigation() when criteria are met
     */
    var doScroll = function (e) {
      var target = $(e.target).closest("[href]").attr('href') ||
      $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
      navigate(parseInt(target,10));
    };

    /**
     * keyNavigation
     *
     * sets up keyboard navigation behavior
     */
    var keyNavigation = function (e) {
      var key = e.which;
      if($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
        return false;
      }
      if(key == settings.upKey && active > 0) {
        navigate(parseInt(active,10) - 1);
        return false;
      } else if(key == settings.downKey && active < lastIndex) {
        navigate(parseInt(active,10) + 1);
        return false;
      }
      return true;
    };

    /**
     * updateActive
     *
     * sets the currently active item
     */
    var updateActive = function(ndx) {
      if(settings.onPageChange && ndx && (active != ndx)) {settings.onPageChange(ndx); }

      active = ndx;
      $('[href]').removeClass(settings.activeClass);
      $('[href=' + ndx + ']').addClass(settings.activeClass);
    };

    /**
     * watchActive
     *
     * watches currently active item and updates accordingly
     */
    var watchActive = function() {
      var winTop = $(window).scrollTop();

      var visible = $('[data-scroll-index]').filter(function(ndx, div) {
        return winTop >= $(div).offset().top + settings.topOffset &&
        winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight();
      });
      var newActive = visible.first().attr('data-scroll-index');
      updateActive(newActive);
    };

    /*
     * runs methods
     */
    $(window).on('scroll',watchActive).scroll();

    $(window).on('keydown', keyNavigation);

    $('.bs_scroll_menu').on('click','[href], [data-scroll-goto]', function(e){
      e.preventDefault();
      doScroll(e);
    });

  };
    // Contact Form Submition
  function checkRequire(formId , targetResp){
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object')? $(formId):$('#'+formId);
    target.find('input , textarea , select').each(function(){
      if($(this).hasClass('require')){
        if($(this).val().trim() == ''){
          check = 1;
          $(this).focus();
          targetResp.html('You missed out some fields.');
          $(this).addClass('error');
          return false;
        }else{
          $(this).removeClass('error');
        }
      }
      if($(this).val().trim() != ''){
        var valid = $(this).attr('data-valid');
        if(typeof valid != 'undefined'){
          if(!eval(valid).test($(this).val().trim())){
            $(this).addClass('error');
            $(this).focus();
            check = 1;
            targetResp.html($(this).attr('data-error'));
            return false;
          }else{
            $(this).removeClass('error');
          }
        }
      }
    });
    return check;
  }
  $(".submitForm").on("click", function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm , errroTarget);
    if(check == 0){
      var formDetail = new FormData(targetForm[0]);
      formDetail.append('form_type' , _this.attr('form-type'));
      $.ajax({
        method : 'post',
        url : 'ajax.php',
        data:formDetail,
        cache:false,
        contentType: false,
        processData: false
      }).done(function(resp){
        if(resp == 1){
          targetForm.find('input').val('');
          targetForm.find('textarea').val('');
          errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
        }else{
          errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
        }
      });
    }
  });
