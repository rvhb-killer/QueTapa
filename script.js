$(document).ready(function() {
    var tlIntro = new TimelineMax();
    tlIntro.from('.para', 1, { opacity: 0, delay: 0.5, y: '10px', ease: Power1.easeInOut });
    tlIntro.from('.bg__text', 1.5, { opacity: 0, ease: Power1.easeInOut }, ['-.08']);
    tlIntro.to('.para', 1, { opacity: 0, y: '-10px', delay: 0.5, ease: Power1.easeInOut });
    tlIntro.from('.rect', 1, { width: '0', ease: Power1.easeInOut });
    tlIntro.to('.rect', 0.7, { height: '100vh', ease: Power1.easeInOut });
    tlIntro.to('.overlay_intro', 0.5, { opacity: 0, onComplete: removeOverlay });

    function removeOverlay() {
        $('.overlay').remove();
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
  });
