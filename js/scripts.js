/*!
 * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    $('.portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });



//
//    var fontSize = 72;
//    if (window.screen.width < 700)
//        fontSize = 32;
//    else if (window.screen.width < 1200)
//        fontSize = 56;
//    var vara = new Vara(
//        "#container",
//        "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
//  [
//            {
//                text: "English Centre GO",
//                y: 50,
//                fromCurrentPosition: {
//                    y: false
//                },
//                duration: 3000
//    },
//  ], {
//            strokeWidth: 2,
//            color: "#fff",
//            fontSize: fontSize,
//            textAlign: "center"
//
//        }
//    );
//    vara.ready(function () {
//        var erase = true;
//        vara.animationEnd(function (i, o) {
//            if (i == "no_erase") erase = false;
//            if (erase) {
//                o.container.style.transition = "opacity 1s 1s";
////                o.container.style.opacity = 0;
//            }
//        });
//        vara.get("github").container.onclick = function () {
//            document.querySelector("#link").click();
//        };
//    });



})(jQuery); // End of use strict
