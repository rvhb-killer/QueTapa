$(document).ready(function() {
    var tlIntro = new TimelineMax();
    tlIntro.from('.para', 1, { opacity: 0, delay: 0.5, y: '10px', ease: Power1.easeInOut });
    tlIntro.from('.bg__text', 1.5, { opacity: 0, ease: Power1.easeInOut }, ['-.08']);
    tlIntro.to('.para', 1, { opacity: 0, y: '-10px', delay: 0.5, ease: Power1.easeInOut });
    tlIntro.from('.rect', 1, { width: '0', ease: Power1.easeInOut });
    tlIntro.to('.rect', 0.7, { height: '100vh', ease: Power1.easeInOut });
    tlIntro.to('.overlay_intro', 0.5, { opacity: 0, onComplete: removeOverlay });

    function removeOverlay() {
        $('.overlay').fadeOut('slow', function() {
            $(this).remove();
        });
    }

    $(".header__cta").mouseenter(function() {
        let tlOut = new TimelineMax();
        tlOut.to('.header__title, .header__para', 0.5);
    });

    $(".header__cta").mouseleave(function() {
        let tlOut = new TimelineMax();
        tlOut.to('.header__title, .header__para', 0.5, { x: '-5px', ease: Power1.easeInOut });
    });

    $(".header__cta").click(function() {
        let tlOut = new TimelineMax();
        tlOut.to('.header__title, .header__para', 0.7, { opacity: 0, y: '-10px', ease: Power1.easeInOut });
        $('body').addClass('no-scroll');
        tlIntro.eventCallback('onComplete', function() {
            $('body').removeClass('no-scroll');
            $('body').css('overflow', 'auto');
            // Add your scroll-related code here
        });
    });


  /** ---------------------------- //
   *  @group viewport trigger script 
   * for adding or removing classes from elements in view within viewport
   */

  var $animationElements = $('.animation-element');
  var $window = $(window);

  // ps: Let's FIRST disable triggering on small devices!
  var isMobile = window.matchMedia("only screen and (max-width: 768px)");
  if (isMobile.matches) {
    $animationElements.removeClass('animation-element');
  }

  function checkIfInView() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animationElements, function() {
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      // check to see if this current container is within viewport
      if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
        $element.addClass('heading-largeoverlay');
      } else {
        $element.removeClass('heading-largeoverlay');
      }
    });
  }

  // Bind the scroll and resize events outside the $.each loop
  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});
