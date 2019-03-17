$(function() {
    "use strict";
    // PAGE SCROLL
    $('body').on('click', '.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // NUMBER INPUT
    $("input[type='number']").stepper();

    // FULLWIDTH SEARCH
    $(".ss-trigger").on('click', function() {
        $(".ss-content").addClass("ss-content-act");
        $(".bn-reserve").removeClass("bn-reserve-act");
    });
    $(".ss-close").on('click', function() {
        $(".ss-content").removeClass("ss-content-act");
    });

    $(".bn-trigger").on('click', function() {
        $(".bn-reserve").addClass("bn-reserve-act");
        $(".bn-overlay").addClass("active");
    });

    $(".bn-close").on('click', function() {
        $(".bn-reserve").removeClass("bn-reserve-act");
        $(".bn-overlay").removeClass("active");
    });

    $(".fixed-bn").on('click', function() {
        $(".bn-reserve").addClass("bn-reserve-act");
        $(".bn-overlay").addClass("active");
    });

    // FLEXSLIDER - ROOM 1 COL
    $('.rb-slider').flexslider({
        animation: "fade",
        controlNav: true,
        directionNav: true,
        controlNav: false,
        smoothHeight: true
    });

    // DATE PICKER
    $('#datetimepicker1').datetimepicker({
        format: 'DD/MM/YYYY'
    });

    $('#datetimepicker2').datetimepicker({
        format: 'DD/MM/YYYY'
    });

    // FLEXSLIDER
    // FLEXSLIDER
    $('#gal-slider1').flexslider({
        animation: "fade",
        slideshow: false,
        directionNav: true,
        controlsContainer: ".dining-block",
        controlNav: true,
        manualControls: ".gal-nav1 li"
    });

    $('.flex-prev1').on('click', function() {
        $('#gal-slider1').flexslider('prev')
        return false;
    })

    $('.flex-next1').on('click', function() {
        $('#gal-slider1').flexslider('next')
        return false;
    })

    $('#gal-slider2').flexslider({
        animation: "fade",
        slideshow: false,
        directionNav: true,
        controlsContainer: ".dining-block",
        controlNav: true,
        manualControls: ".gal-nav2 li"
    });

    $('.flex-prev2').on('click', function() {
        $('#gal-slider2').flexslider('prev')
        return false;
    })

    $('.flex-next2').on('click', function() {
        $('#gal-slider2').flexslider('next')
        return false;
    })

    $('#gal-slider3').flexslider({
        animation: "fade",
        slideshow: false,
        directionNav: true,
        controlsContainer: ".dining-block",
        controlNav: true,
        manualControls: ".gal-nav3 li"
    });

    $('.flex-prev3').on('click', function() {
        $('#gal-slider3').flexslider('prev')
        return false;
    })

    $('.flex-next3').on('click', function() {
        $('#gal-slider3').flexslider('next')
        return false;
    })

    $('.spa-block #gal-slider').flexslider({
        animation: "fade",
        slideshow: false,
        directionNav: true,
        controlsContainer: ".spa-block",
        controlNav: true,
        manualControls: ".spa-block .gal-nav li"
    });

    $('.spa-block .flex-prev').on('click', function() {
        $('.spa-block #gal-slider').flexslider('prev')
        return false;
    })

    $('.spa-block .flex-next').on('click', function() {
        $('.spa-block #gal-slider').flexslider('next')
        return false;
    })

    $('.entertain-block #gal-slider').flexslider({
        animation: "fade",
        slideshow: false,
        directionNav: true,
        controlsContainer: ".entertain-block",
        controlNav: true,
        manualControls: ".entertain-block .gal-nav li"
    });

    $('.entertain-block .flex-prev').on('click', function() {
        $('.entertain-block #gal-slider').flexslider('prev')
        return false;
    })

    $('.entertain-block .flex-next').on('click', function() {
        $('.entertain-block #gal-slider').flexslider('next')
        return false;
    })

    $('.expert-tip .slider-block #gal-slider').flexslider({
        animation: "fade",
        slideshow: false,
        directionNav: true,
        controlNav: true,
        manualControls: ".expert-tip .slider-block .gal-nav li",
        sync: ".expert-tip .slider-block #carousel",
        start: function(slider) {
            $(".slide-current-slide").text(slider.currentSlide + 1);
            $(".slide-total-slides").text("of" + slider.count)
        },
        before: function(slider) {
            $(".slide-current-slide").text(slider.animatingTo + 1)
        },
    });

    $('.expert-tip .slider-block .flex-prev').on('click', function() {
        $('.expert-tip .slider-block #gal-slider').flexslider('prev')
        return false;
    })

    $('.expert-tip .slider-block .flex-next').on('click', function() {
        $('.expert-tip .slider-block #gal-slider').flexslider('next')
        return false;
    })

    $('.expert-tip .slider-block #carousel').flexslider({
        animation: "slide",
        controlNav: true,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        controlsContainer: $(".expert-tip .custom-controls-container"),
        customDirectionNav: $(".expert-tip .custom-navigation a"),
        asNavFor: '.expert-tip .slider-block #gal-slider',
    });

    // FLEXSLIDER
    $(".expert-tip .slider-block #gal-slider").flexslider({
        start: function(slider) {
            $(".slide-current-slide").text(slider.currentSlide + 1);
            $(".slide-total-slides").text("of" + slider.count)
        },
        before: function(slider) {
            $(".slide-current-slide").text(slider.animatingTo + 1)
        }
    });

    // OWL CAROUSEL
    var owl = $("#home-gallery");

    owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [767, 2], //2 items between 600 and 0
        itemsMobile: [600, 1]
    });

    $(".next").on('click', function() {
        owl.trigger('owl.next');
    })
    $(".prev").on('click', function() {
        owl.trigger('owl.prev');
    })

    var owl = $("#gallery-villa");

    owl.owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds

        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 2],
            [1000, 3],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ]

    });
    $(".next").on('click', function() {
        owl.trigger('owl.next');
    })
    $(".prev").on('click', function() {
        owl.trigger('owl.prev');
    })

    var owl = $("#ab-carousel");
    owl.owlCarousel({

        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 1],
            [1000, 3],
            [1200, 3],
            [1400, 3],
            [1600, 3]
        ],
        navigation: false
    });
    $(".next").on('click', function() {
        owl.trigger('owl.next');
    })
    $(".prev").on('click', function() {
        owl.trigger('owl.prev');
    })

    // CUSTOM SELECT

    $('.main-grid .reservation #get_value').selectric();
    $('#get_value').selectric();
    $('#get_value1').selectric();
    $('#get_value2').selectric();
    $('#get_value3').selectric();
    $('#get_value6').selectric();
    $('#get_value7').selectric();
    $('#sel_property').selectric();
    $('#basic').selectric();
    $('#basic1').selectric();

    // TOOLTIP


    $('.img-tooltip').popover({
        'trigger': 'hover',
        'html': true,
        'content': function() {
            return "<img src='" + $(this).data('imageUrl') + "'>";
        }
    });

    $('[data-toggle="tooltip"]').tooltip({
        'container': 'body'
    });

    // FLEXSLIDER

    $('#gal-slider').flexslider({
        animation: "slide",
        slideshow: false,
        directionNav: true,
        controlsContainer: ".bloggal-slider",
        controlNav: true,
        manualControls: ".bloggal-slider .gal-nav li",
        startAt: 0,
    });

    $('.room-gallery .bloggal-slider .flex-prev').on('click', function() {
        $('.room-gallery .bloggal-slider #gal-slider').flexslider('prev')
        return false;
    })

    $('.room-gallery .bloggal-slider .flex-next').on('click', function() {
        $('.room-gallery .bloggal-slider #gal-slider').flexslider('next')
        return false;
    })

    // FLEXSLIDER

    $('#gal-slider1').flexslider({
        animation: "fade",
        slideshow: false,
        controlsContainer: $(".villadetail .ocean-breeze .bloggal-slider .custom-controls-container"),
        customDirectionNav: $(".villadetail .ocean-breeze .bloggal-slider .custom-navigation a"),
        directionNav: true,
        controlsContainer: ".bloggal-slider",
        controlNav: true,
        manualControls: ".villadetail .ocean-breeze .bloggal-slider .gal-nav li",
        startAt: 0,

    });

    $('.villadetail .ocean-breeze .bloggal-slider .flex-prev').on('click', function() {
        $('#gal-slider').flexslider('prev')
        return false;
    })

    $('.villadetail .ocean-breeze .bloggal-slider .flex-next').on('click', function() {
        $('#gal-slider').flexslider('next')
        return false;
    })

    // PRETTYPHOTO

    $("a[class^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default'
    });

    // VIDEO
    $('.custom-th').on('click', function() {
        $('.custom-th').fadeOut('fast', function() {
            $("#thevideo").css("display", "block");
            $("video").click();
        });
    });

    // TWEETS
    $('#tweetcool').tweecool({
        profile_image: false,
        username: 'envato',
        limit: 1
    });
});

// RESPONSIVE MENU
$(window).on('load', function() {
    $('#mobnav-btn').on('click', function() {
            $('.sf-menu').toggleClass("xactive");
    });

    $('.mobnav-subarrow').on('click', function() {
            $(this).parent().toggleClass("xpopdrop");
    });
});

$(window).load(function() {
    "use strict";

    // FLEXSLIDER
    $('#top-slider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: true,
        smoothHeight: true
    });

    $('.b-slider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: true,
        smoothHeight: true
    });

    // ISOTOPE - MASONRY BLOG
    var $container = $('#masonry-feed');
    $container.isotope({
        itemSelector: '.masonry-item'
    });
    var $optionSets = $('#portfolio-section .filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.on('click', function() {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            $container.isotope(options);
        }
        return false;
    });

    // ISOTOPE - ROOMS 1 2 3
    var $container = $('#rooms-mason');
    $container.isotope({
        itemSelector: '.rm-item'
    });
    var $optionSets = $('.rm-filter'),
        $optionLinks = $optionSets.find('li a');
    $optionLinks.on('click', function() {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.rm-filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            $container.isotope(options);
        }
        return false;
    });
});

// EXTRAS
$(".menu-trigger").on('click', function() {
    $(".navbar-default").addClass("nav-active");
    $(".menu-trigger").addClass("mt-hide");
    $(".header").css("z-index", "999999");
    $(".pre-header").addClass("ph-hide");
});

$(".menu-close").on('click', function() {
    $(".navbar-default").removeClass("nav-active");
    $(".menu-trigger").removeClass("mt-hide");
    $(".header").css("z-index", "999");
    $(".pre-header").removeClass("ph-hide");
    $(".bn-reserve").removeClass("bn-reserve-act");
});

$(".offers_1 .offer-expand").on('click', function() {
    $(this).parent().toggleClass("active");
    $(this).toggleClass("active");
    $(".offers_1 .offer-expand i").toggleClass("fa-caret-up fa-caret-down");
    $(".offers_2 , .offers_3 , .offers_4 ").removeClass("active");
    $(".offers_2 .offer-expand i, .offers_3 .offer-expand i, .offers_4 .offer-expand i").addClass("fa-caret-down");
    $(".offers_2 .offer-expand i, .offers_3 .offer-expand i, .offers_4 .offer-expand i").removeClass("fa-caret-up");
});

$(".offers_2 .offer-expand").on('click', function() {
    $(this).parent().toggleClass("active");
    $(this).toggleClass("active");
    $(".offers_2 .offer-expand i").toggleClass("fa-caret-up fa-caret-down");
    $(".offers_1 , .offers_3 , .offers_4 ").removeClass("active");
    $(".offers_1 .offer-expand i, .offers_3 .offer-expand i, .offers_4 .offer-expand i").addClass("fa-caret-down");
    $(".offers_1 .offer-expand i, .offers_3 .offer-expand i, .offers_4 .offer-expand i").removeClass("fa-caret-up");

});

$(".offers_3 .offer-expand").on('click', function() {
    $(this).parent().toggleClass("active");
    $(this).toggleClass("active");
    $(".offers_3 .offer-expand i").toggleClass("fa-caret-up fa-caret-down");
    $(".offers_1 , .offers_2 , .offers_4 ").removeClass("active");
    $(".offers_1 .offer-expand i, .offers_2 .offer-expand i, .offers_4 .offer-expand i").addClass("fa-caret-down");
    $(".offers_1 .offer-expand i, .offers_2 .offer-expand i, .offers_4 .offer-expand i").removeClass("fa-caret-up");
});

$(".offers_4 .offer-expand").on('click', function() {
    $(this).parent().toggleClass("active");
    $(this).toggleClass("active");
    $(".offers_4 .offer-expand i").toggleClass("fa-caret-up fa-caret-down");
    $(".offers_1 , .offers_2 , .offers_3").removeClass("active");
    $(".offers_2 .offer-expand i, .offers_3 .offer-expand i, .offers_1 .offer-expand i").addClass("fa-caret-down");
    $(".offers_2 .offer-expand i, .offers_3 .offer-expand i, .offers_1 .offer-expand i").removeClass("fa-caret-up");
});

$(".offers_1 .btn-active").on('click', function() {
    $(".offers_1").toggleClass("active");
    $("offers_1 .offer-expand").toggleClass("active");
    $(".offers_1 .offer-expand i").toggleClass("fa-caret-up fa-caret-down");
    $(".offers_2 , .offers_3 , .offers_4 ").removeClass("active");
    $(".offers_2 .offer-expand i, .offers_3 .offer-expand i, .offers_4 .offer-expand i").addClass("fa-caret-down");
    $(".offers_2 .offer-expand i, .offers_3 .offer-expand i, .offers_4 .offer-expand i").removeClass("fa-caret-up");
});

$(".offers_2 .btn-active").on('click', function() {
    $(".offers_2").toggleClass("active");
    $("offers_2 .offer-expand").toggleClass("active");
    $(".offers_2 .offer-expand i").toggleClass("fa-caret-up fa-caret-down");
    $(".offers_1 , .offers_3 , .offers_4 ").removeClass("active");
    $(".offers_1 .offer-expand i, .offers_3 .offer-expand i, .offers_4 .offer-expand i").addClass("fa-caret-down");
    $(".offers_1 .offer-expand i, .offers_3 .offer-expand i, .offers_4 .offer-expand i").removeClass("fa-caret-up");

});

$(".offers_3 .btn-active").on('click', function() {
    $(".offers_3").toggleClass("active");
    $("offers_3 .offer-expand").toggleClass("active");
    $(".offers_3 .offer-expand i").toggleClass("fa-caret-up fa-caret-down");
    $(".offers_1 , .offers_2 , .offers_4 ").removeClass("active");
    $(".offers_1 .offer-expand i, .offers_2 .offer-expand i, .offers_4 .offer-expand i").addClass("fa-caret-down");
    $(".offers_1 .offer-expand i, .offers_2 .offer-expand i, .offers_4 .offer-expand i").removeClass("fa-caret-up");
});

$(".offers_4 .btn-active").on('click', function() {
    $(".offers_4").toggleClass("active");
    $("offers_4 .offer-expand").toggleClass("active");
    $(".offers_4 .offer-expand i").toggleClass("fa-caret-up fa-caret-down");
    $(".offers_1 , .offers_2 , .offers_3").removeClass("active");
    $(".offers_2 .offer-expand i, .offers_3 .offer-expand i, .offers_1 .offer-expand i").addClass("fa-caret-down");
    $(".offers_2 .offer-expand i, .offers_3 .offer-expand i, .offers_1 .offer-expand i").removeClass("fa-caret-up");
});