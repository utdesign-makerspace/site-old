(function ($) {
    "use strict";
     var menuToggler = $('.menu_toggler'),
        offsetMenu = $('.offset_menu'),
        menuQuit = $('.cross');
    menuToggler.on('click', function (e) {
        e.preventDefault();
        offsetMenu.addClass('visible');
    });
    menuQuit.on('click', function () {
        offsetMenu.removeClass('visible');
    });
    

    function foo() {
        'use strict';

        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(200); // Fade in the arrow
            } else {
                $('#return-to-top').fadeOut(200); // Else fade out the arrow
            }
        });
        $('#return-to-top').on(function () { // When arrow is clicked
            $('body,html').animate({
                scrollTop: 0 // Scroll to top of body
            }, 500);
        });

    }
    foo();
  

    $('body').scrollspy({
        target: '#bs-example-navbar-collapse-1',
    });
    var nav = $('nav'),
        navOffset = nav.offset().top,
        $window = $(window);
    
    

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 60
                }, 1000);
                return false;
            }
        }
    });

    var bc2top = $('.back-top-btn');
    bc2top.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        var bc2top = $(".back-top-btn");
        if ($scrolling > 200) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });
    
    /* -------------------------------------- Preloader jQuary --------------------------------- */

    $(window).load(function () {
         $('.preloader').delay(2000).fadeOut();
        
    });

    $window.on('scroll', function () {

        var scrollPos = $window.scrollTop();

        if (scrollPos >= navOffset) {
            $('header nav').addClass('navbar-position');
        } else {
            $('header nav').removeClass('navbar-position');
        }


    });


    //$('.slider').slick()

    $('.banner_slider').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        navText: ['<i class="icofont icofont-curved-left"></i>', '<i class="icofont icofont-curved-right"></i>']
    });
    $('.bnr_content').addClass('slideInDown animated').show();
    $('.banner_slider').on('translate.owl.carousel', function () {
        $('.banner_cell .banner_total p').removeClass('slideInLeft animated').hide();
        $('.banner_cell .banner_total h1').removeClass('slideInRight animated').hide();
        $('.banner_cell .banner_total .banner_btn .btn_one').removeClass('slideInLeft animated').hide();
        $('.banner_cell .banner_total .banner_btn .btn_two').removeClass('slideInRight animated').hide();
        $('.bnr_content').removeClass('slideInDown animated').hide();
    });
    $('.banner_slider').on('translated.owl.carousel', function () {
        $('.owl-item.active .banner_cell .banner_total p').addClass('slideInLeft animated').show();
        $('.owl-item.active .banner_cell .banner_total h1').addClass('slideInRight animated').show();
        $('.owl-item.active .banner_cell .banner_total .banner_btn .btn_one').addClass('slideInLeft animated').show();
        $('.owl-item.active .banner_cell .banner_total .banner_btn .btn_two').addClass('slideInRight animated').show();
        $('.bnr_content').addClass('slideInDown animated').show();
    });


    //    Brand slick
    $('.achive-content').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //testimonial

    $('.testimonial_slick').slick({

        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
    }
  ]
    });

    // classes slick 

    $('.classes-details').slick({
        infinite: true,
        speed: 1500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fa fa fa-chevron-right slidNext"></i>',
        nextArrow: '<i class="fa fa fa-chevron-left slidprev"></i>',
        cssEase: "ease",
        asNavFor: '.classes-slider-img',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
			},
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                     arrows: false,
                    horizontal: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
			}
		  ]
    });

    $('.classes-slider-img').slick({
        infinite: true,
        autoplaySpeed: 2500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical: true,
                    slidesToShow: 4
                }
		}
	],
        asNavFor: '.classes-details',
        dots: false,
        arrows: false,
        cssEase: "linear",
        vertical: true,
        verticalSwiping: true,
        centerPadding: '0px',
        centerMode: true,
        focusOnSelect: true,
    });
 //typed js
    var typed = new Typed("#typed", {
        stringsElement: '#typed-strings',
        typeSpeed: 80,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 1000,
        loop: true
    });


    // youtube video js start here

    jQuery("a.bla-1").YouTubePopUp({
        autoplay: 0
    }); // Disable autoplay


    $('#bootstrap-touch-slider').bsTouchSlider();


    // feature design hover js ends     

})(jQuery);
