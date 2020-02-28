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

var Modal = (function() {

  var trigger = $qsa('.modal__trigger'); // what you click to activate the modal
  var modals = $qsa('.modal'); // the entire modal (takes up entire window)
  var modalsbg = $qsa('.modal__bg'); // the entire modal (takes up entire window)
  var content = $qsa('.modal__content'); // the inner content of the modal
  var closers = $qsa('.modal__close'); // an element used to close the modal
  var w = window;
  var isOpen = false;
  var contentDelay = 400; // duration after you click the button and wait for the content to show
  var len = trigger.length;

  // make it easier for yourself by not having to type as much to select an element
  function $qsa(el) {
    return document.querySelectorAll(el);
  }

  var getId = function(event) {

    event.preventDefault();
    var self = this;
    // get the value of the data-modal attribute from the button
    var modalId = self.dataset.modal;
    var len = modalId.length;
    // remove the '#' from the string
    var modalIdTrimmed = modalId.substring(1, len);
    // select the modal we want to activate
    var modal = document.getElementById(modalIdTrimmed);
    // execute function that creates the temporary expanding div
    makeDiv(self, modal);
  };

  var makeDiv = function(self, modal) {

    var fakediv = document.getElementById('modal__temp');

    /**
     * if there isn't a 'fakediv', create one and append it to the button that was
     * clicked. after that execute the function 'moveTrig' which handles the animations.
     */

    if (fakediv === null) {
      var div = document.createElement('div');
      div.id = 'modal__temp';
      self.appendChild(div);
      moveTrig(self, modal, div);
    }
  };

  var moveTrig = function(trig, modal, div) {
    var trigProps = trig.getBoundingClientRect();
    var m = modal;
    var mProps = m.querySelector('.modal__content').getBoundingClientRect();
    var transX, transY, scaleX, scaleY;
    var xc = w.innerWidth / 2;
    var yc = w.innerHeight / 2;

    // this class increases z-index value so the button goes overtop the other buttons
    trig.classList.add('modal__trigger--active');

    // these values are used for scale the temporary div to the same size as the modal
    scaleX = mProps.width / trigProps.width;
    scaleY = mProps.height / trigProps.height;

    scaleX = scaleX.toFixed(3); // round to 3 decimal places
    scaleY = scaleY.toFixed(3);


    // these values are used to move the button to the center of the window
    transX = Math.round(xc - trigProps.left - trigProps.width / 2);
    transY = Math.round(yc - trigProps.top - trigProps.height / 2);

    // if the modal is aligned to the top then move the button to the center-y of the modal instead of the window
    if (m.classList.contains('modal--align-top')) {
      transY = Math.round(mProps.height / 2 + mProps.top - trigProps.top - trigProps.height / 2);
    }


    // translate button to center of screen
    trig.style.transform = 'translate(' + transX + 'px, ' + transY + 'px)';
    trig.style.webkitTransform = 'translate(' + transX + 'px, ' + transY + 'px)';
    // expand temporary div to the same size as the modal
    div.style.transform = 'scale(' + scaleX + ',' + scaleY + ')';
    div.style.webkitTransform = 'scale(' + scaleX + ',' + scaleY + ')';


    window.setTimeout(function() {
      window.requestAnimationFrame(function() {
        open(m, div);
      });
    }, contentDelay);

  };

  var open = function(m, div) {

    if (!isOpen) {
      // select the content inside the modal
      var content = m.querySelector('.modal__content');
      // reveal the modal
      m.classList.add('modal--active');
      // reveal the modal content
      content.classList.add('modal__content--active');

      /**
       * when the modal content is finished transitioning, fadeout the temporary
       * expanding div so when the window resizes it isn't visible ( it doesn't
       * move with the window).
       */

      content.addEventListener('transitionend', hideDiv, false);

      isOpen = true;
    }

    function hideDiv() {
      // fadeout div so that it can't be seen when the window is resized
      div.style.opacity = '0';
      content.removeEventListener('transitionend', hideDiv, false);
    }
  };

  var close = function(event) {

    event.preventDefault();
    event.stopImmediatePropagation();

    var target = event.target;
    var div = document.getElementById('modal__temp');

    /**
     * make sure the modal__bg or modal__close was clicked, we don't want to be able to click
     * inside the modal and have it close.
     */

    if (isOpen && target.classList.contains('modal__bg') || target.classList.contains('modal__close')) {

      // make the hidden div visible again and remove the transforms so it scales back to its original size
      div.style.opacity = '1';
      div.removeAttribute('style');

      /**
      * iterate through the modals and modal contents and triggers to remove their active classes.
      * remove the inline css from the trigger to move it back into its original position.
      */

      for (var i = 0; i < len; i++) {
        modals[i].classList.remove('modal--active');
        content[i].classList.remove('modal__content--active');
        trigger[i].style.transform = 'none';
        trigger[i].style.webkitTransform = 'none';
        trigger[i].classList.remove('modal__trigger--active');
      }

      // when the temporary div is opacity:1 again, we want to remove it from the dom
      div.addEventListener('transitionend', removeDiv, false);

      isOpen = false;

    }

    function removeDiv() {
      setTimeout(function() {
        window.requestAnimationFrame(function() {
          // remove the temp div from the dom with a slight delay so the animation looks good
          div.remove();
        });
      }, contentDelay - 50);
    }

  };

  var bindActions = function() {
    for (var i = 0; i < len; i++) {
      trigger[i].addEventListener('click', getId, false);
      closers[i].addEventListener('click', close, false);
      modalsbg[i].addEventListener('click', close, false);
    }
  };

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

}());

Modal.init();
