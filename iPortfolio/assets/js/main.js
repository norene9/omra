/**
 * Template Name: iPortfolio - v1.1.0
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  "use strict";

  // Hero typed
  var typed_strings = $(".typed").data('typed-items');
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function (e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 10;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });

})(jQuery);



function openForm() {
  document.getElementById("login-wrap").style.display = "block";
}

function closeForm() {
  document.getElementById("login-wrap").style.display = "none";
}
$(document).ready(function () {
  $(".btn1").click(function () {
    $('#popup').fadeOut();
  });
  $(".mybtn").click(function () {
    $('#popup').fadeIn();
  });
});


const button = document.querySelectorAll('a');
button.forEach(btn => {
  btn.addEventListener('click', function (e) {
    let X = e.clientX - e.target.offsetLeft;
    let Y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = X + 'px';
    ripples.style.top = Y + 'px';
    this.appendChild(ripples);
    setTimeout(() => {


      ripples.remove()
    }, 1000)
  })
})

//for login 
var $name1 = jQuery('.username1');
var $pass1 = jQuery('.password1');
var $submit1 = jQuery('.submit-form1');

function empty($input) {
  return $input.val() == '';
}

function checkPasswordConfirmation() {
  return $pass2.val() == $reppass.val();
}
function ValidateEmail($input) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.$email)) {
    return (true);
  }
  return (false);
}


$name1.parent().children('.error').fadeOut();
$pass1.parent().children('.error').fadeOut();

$submit1.on('click', function (e) {
  e.preventDefault();

  if (empty($name1)) {
    $name1.parent().children('.error').fadeIn();
    return;

  } else { $name1.parent().children('.error').fadeOut(); }

  if (empty($pass1)) {
    $pass1.parent().children('.error').fadeIn();
    return;

  } else { $pass1.parent().children('.error').fadeOut(); }
})


//for signup
var $name2 = jQuery('.username2');
var $pass2 = jQuery('.password2');
var $reppass = jQuery('.repeatpass');
var $email = jQuery('.email');
var $submit2 = jQuery('.submit-form2');

$name2.parent().children('.error').fadeOut();
$pass2.parent().children('.error').fadeOut();
$reppass.parent().children('.error').fadeOut();
$email.parent().children('.error').fadeOut();
$reppass.parent().children('.pasword_match').fadeOut();
$email.parent().children('.error-email').fadeOut();
$submit2.on('click', function (e) {
  e.preventDefault();

  if (empty($name2)) {
    $name2.parent().children('.error').fadeIn();
    return;

  } else { $name2.parent().children('.error').fadeOut(); }

  if (empty($pass2)) {
    $pass2.parent().children('.error').fadeIn();
    return;
  } else { $pass2.parent().children('.error').fadeOut(); }

  if (empty($reppass)) {
    $reppass.parent().children('.error').fadeIn();
    return;
  } else { $reppass.parent().children('.error').fadeOut(); }
  if (!checkPasswordConfirmation()) {
    $reppass.parent().children('.pasword_match').fadeIn();
    return;
  } else {
    $reppass.parent().children('.pasword_match').fadeOut();

  }

  if (empty($email)) {
    $email.parent().children('.error').fadeIn();
    return;
  } else { $email.parent().children('.error').fadeOut(); }
  if (ValidateEmail($email)) {
    $email.parent().children('.error-email').fadeIn();
    return;
  } else {
    $email.parent().children('.error-email').fadeOut();
  }
  if ($($email).val().indexOf('@') > -1 && $($email).val().indexOf('.') > -1) {

    $('.status').html("Valid Email");
  } else {
    $('.status').html("Your email is invalid please try again");
  }

  //



  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );



  $(".hover2").on('hover', function () {


    red = [0, 100, 63];
    orange = [40, 100, 60];
    green = [75, 100, 40];
    blue = [196, 77, 55];
    purple = [280, 50, 60];

    message = 'Change the color!';

    drawName(message, red);
    bounceBubbles();

  });

  $(document).ready(function () {
    $(".hero-container").onmouseover(function () {
      $('.hover2').fadeIn();
    });
    $(".hero-container").onmouseout(function () {
      $('.hover2').fadeOut();
    });
  });



  function openForm2() {
    document.getElementById("prop").style.display = "block";
  }

  function closeForm2() {
    document.getElementById("prop").style.display = "none";
  }


  //pour loisir





});

