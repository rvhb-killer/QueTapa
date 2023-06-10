$(document).ready(function() {
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
        $element.addClass('header_text-move');
      } else {
        $element.removeClass('header_text-move');
      }
    });
  }

  // Bind the scroll and resize events outside the $.each loop
  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});
