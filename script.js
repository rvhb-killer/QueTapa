$(document).ready(function() {
  var tlIntro = new TimelineMax();
  tlIntro.from('.para', 1, { opacity: 0, delay: 0.5, y: '10px', ease: Power1.easeInOut });
  tlIntro.from('.bg__text', 1.5, { opacity: 0, ease: Power1.easeInOut }, ['-.08']);
  tlIntro.to('.para', 1, { opacity: 0, y: '-10px', delay: 0.5, ease: Power1.easeInOut });
  tlIntro.from('.rect', 1, { width: '0', ease: Power1.easeInOut });
  tlIntro.to('.rect', 0.7, { height: '100vh', ease: Power1.easeInOut });
  tlIntro.to('.overlay', 0.5, { opacity: 0, onComplete: removeOverlay });
  tlIntro.from('.header__title', 1, { opacity: 0, y: '50px', ease: Power1.easeInOut });
  tlIntro.from('.header__para', 1, { opacity: 0, x: '-25px', ease: Power1.easeInOut });

  function removeOverlay() {
    $('.wrapper').remove();
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
    setTimeout(function() {
      window.location = "https://codepen.io/ryangled/full/LwMENY";
    }, 500);
  });

  var str = '#len';
  var i = 1;
  var stop = 4;
  setInterval(function() {
    if (i > stop) {
      return;
    }
    $(str + i).toggleClass('bounce');
    i++;
  }, 500);

  $(function() {
    var str = '#len';
    $(document).ready(function() {
      var i, stop;
      i = 1;
      stop = 4;
      setInterval(function() {
        if (i > stop) {
          return;
        }
        $('#len' + (i++)).toggleClass('bounce');
      }, 500)
    });
  });
});