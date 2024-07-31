$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // Random Home Images
    var images = [
        {
            "src": "img/portfolio/18-neshan-2/neshan-2.jpg",
            "alt": "neshan-2"
        },
        {
            "src": "img/portfolio/14-lake/lake.jpg",
            "alt": "lake"
        },
        {
            "src": "img/portfolio/02-garden/garden.jpg",
            "alt": "garden"
        },
        {
            "src": "img/portfolio/04-narenj/narenj.jpg",
            "alt": "narenj"
        },
        {
            "src": "img/portfolio/21-neshan-5-shiraz/neshan-5-shiraz.jpg",
            "alt": "neshan-5-shiraz"
        },
    ]
    const array = [0, 1, 2, 3, 4];
    const shuffledArray = array.sort(function(a, b) { return 0.5 - Math.random() });

    $('.demo-box-img').each(function(index) {
        var img = $(this);
        img.attr('src', images[shuffledArray[index]].src);
        img.attr('alt', images[shuffledArray[index]].alt);
    });

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this);
        var id = $el.attr('href');

        if(!id.startsWith("#")) return true

        // in about section we have negative margin in design.
        var offset = (id === "#about") ? 200 : 2
        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + offset
        }, 600);
        
        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $("#top-navbar").addClass("bg-nav");
    } else {
        $("#top-navbar").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $("#top-navbar").addClass("bg-nav");
        } else {
            $("#top-navbar").removeClass("bg-nav");
        }
    });


    var $container = $('.portfolio_container');
    $('.portfolio_filter li').click(function () {
        var selector = $(this).attr('data-filter');

        $('.portfolio_filter .active').removeClass('active');
        $(this).addClass('active');

        if (selector === '*') {
            $('.portfolio_container > div').fadeIn(1000);
        } else {
            $('.portfolio_container > div').fadeOut(0);
            $('.portfolio_container div.'+selector).fadeIn(1000);
        }
    });
});