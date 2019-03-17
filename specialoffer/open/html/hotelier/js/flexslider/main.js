	
	/* ----------------------------------------------------------- */
    /*  3. Flax Slider For TOP Main Pages
    /* ----------------------------------------------------------- */
	
	$(document).ready(function() {
		$(window).load(function() {
		  $('.bungalow .flexslider').flexslider({
			animation: "slide",
			prevText: "Previous",
			nextText: "Next"
		  });
		});
		
		
		/* scroll to another slider*/
		$('a[href*=#go-block1]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
		});
		
		
		$('a[href*=#go-block2]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
		});


		$('a[href*=#go-block3]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
		});	
			
		$('a[href*=#go-block4]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
		});	
	
		/* scroll to another slider*/
		
	});
	
	
	$(document).ready(function() {
		$(window).load(function() {
		  $('.top-slider .flexslider').flexslider({
			animation: "slide",
			prevText: "Previous",
			nextText: "Next"
		  });
		});
	});
	
	$(document).ready(function($) {
		$('.room-onecol .room-block .flexslider').flexslider({
			animation: "slide",
			slideshow: false,                
			directionNav: true,
			
			controlNav:false,
			startAt:0,
		});
	
	});
	
		
	
	


$(document).ready(function($) {
	$('.dining-block #gal-slider').flexslider({
		animation: "fade",
		slideshow: false,                
		directionNav: true,
		controlsContainer: ".dining-block",
		controlNav: true,
		manualControls: ".dining-block .gal-nav li"
	});
	
	$('.dining-block .flex-prev').on('click', function(){
    $('.dining-block #gal-slider').flexslider('prev')
    return false;
	})

	$('.dining-block .flex-next').on('click', function(){
		$('.dining-block #gal-slider').flexslider('next')
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


	$('.spa-block .flex-prev').on('click', function(){
		$('.spa-block #gal-slider').flexslider('prev')
		return false;
	})
	
	$('.spa-block .flex-next').on('click', function(){
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


	$('.entertain-block .flex-prev').on('click', function(){
		$('.entertain-block #gal-slider').flexslider('prev')
		return false;
	})
	
	$('.entertain-block .flex-next').on('click', function(){
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
		start:function(slider){
            $(".slide-current-slide").text(slider.currentSlide+1);
            $(".slide-total-slides").text("of"+slider.count)
        },
        before:function(slider){
            $(".slide-current-slide").text(slider.animatingTo+1)
        },
	});
	
	$('.expert-tip .slider-block .flex-prev').on('click', function(){
    $('.expert-tip .slider-block #gal-slider').flexslider('prev')
    return false;
	})

	$('.expert-tip .slider-block .flex-next').on('click', function(){
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
	controlsContainer:$(".expert-tip .custom-controls-container"),
	customDirectionNav: $(".expert-tip .custom-navigation a"),
    asNavFor: '.expert-tip .slider-block #gal-slider',
  });
  
  $(".expert-tip .slider-block #gal-slider").flexslider({
        // options
        start:function(slider){
            $(".slide-current-slide").text(slider.currentSlide+1);
            $(".slide-total-slides").text("of"+slider.count)
        },
        before:function(slider){
            $(".slide-current-slide").text(slider.animatingTo+1)
        }
    });

});



$(document).ready(function($) {
	$('.room-gallery .bloggal-slider .flexslider').flexslider({
		animation: "slide",
		slideshow: false,                
		directionNav: true,
		controlsContainer: ".bloggal-slider",
		controlNav: true,
		manualControls: ".bloggal-slider .gal-nav li",
		startAt:0,
	});

$('.room-gallery .bloggal-slider .flex-prev').on('click', function(){
    $('.room-gallery .bloggal-slider #gal-slider').flexslider('prev')
    return false;
})

$('.room-gallery .bloggal-slider .flex-next').on('click', function(){
    $('.room-gallery .bloggal-slider #gal-slider').flexslider('next')
    return false;
})

});

$(document).ready(function($) {
	$('.villadetail .ocean-breeze .bloggal-slider .flexslider').flexslider({
		animation:"fade",
		slideshow:false,
		controlsContainer: $(".villadetail .ocean-breeze .bloggal-slider .custom-controls-container"),
    	customDirectionNav: $(".villadetail .ocean-breeze .bloggal-slider .custom-navigation a"),
		directionNav:true,
		controlsContainer:".bloggal-slider",
		controlNav:true,
		manualControls:".villadetail .ocean-breeze .bloggal-slider .gal-nav li",
		startAt:0,
		
	});

$('.villadetail .ocean-breeze .bloggal-slider .flex-prev').on('click', function(){
    $('.villadetail .ocean-breeze .bloggal-slider #gal-slider').flexslider('prev')
    return false;
})

$('..villadetail .ocean-breeze .bloggal-slider .flex-next').on('click', function(){
    $('.villadetail .ocean-breeze .bloggal-slider #gal-slider').flexslider('next')
    return false;
})

});


$(document).ready(function($) {
	$('.sidepanel .dining-block #gal-slider').flexslider({
		animation: "fade",
		slideshow: false,                
		directionNav: true,
		controlsContainer: ".dining-block",
		controlNav: true,
		manualControls: ".sidepanel .dining-block .gal-nav li"
	});
	
	$('.sidepanel .dining-block .flex-prev').on('click', function(){
    $('.sidepanel .dining-block #gal-slider').flexslider('prev')
    return false;
	})

	$('.sidepanel .dining-block .flex-next').on('click', function(){
		$('.sidepanel .dining-block #gal-slider').flexslider('next')
		return false;
	})

});

	
	$(document).ready(function($) {
		$('.blogpost-single .blogsingle-cont .bloggal-slider .flexslider').flexslider({
			animation: "slide",
			slideshow: false,                
			directionNav: true,
			controlsContainer: ".bloggal-slider",
			controlNav: true,
			manualControls: ".bloggal-slider .gal-nav li",
			startAt:0,
		});
	
	$('.blogpost-single .blogsingle-cont .bloggal-slider .flex-prev').on('click', function(){
		$('.blogpost-single .blogsingle-cont .bloggal-slider #gal-slider').flexslider('prev')
		return false;
	})
	
	$('.blogpost-single .blogsingle-cont .bloggal-slider .flex-next').on('click', function(){
		$('.blogpost-single .blogsingle-cont .bloggal-slider #gal-slider').flexslider('next')
		return false;
	})

});
	
	/* ----------------------------------------------------------- */
    /*  5. Selectric Picker
    /* ----------------------------------------------------------- */
	$(document).ready(function($) {
		$('.main-grid .reservation #get_value').selectric();
		$('#get_value').selectric();
		$('#get_value1').selectric();
		$('#get_value2').selectric();
		$('#get_value3').selectric();
		$('#get_value6').selectric();
		$('#get_value7').selectric();
		$('#basic').selectric();
		$('#basic1').selectric();	
	});
	
	
	/* ----------------------------------------------------------- */
    /*  1. popover
    /* ----------------------------------------------------------- */
	
	$(document).ready(function(e) {
	 $('.img-tooltip').popover({
		'trigger':'hover',
		'html':true,
		'content':function(){
		return "<img src='"+$(this).data('imageUrl')+"'>";
    }
	});
	});
	
	
	/* ----------------------------------------------------------- */
    /*  1. Tooltip Sticky Menu
    /* ----------------------------------------------------------- */
	
	$(document).ready(function() {
		  $('[data-toggle="tooltip"]').tooltip({
		  	'container':'body'
		  });
		
	});
	
	
/* ----------------------------------------------------------- */
    /*  1. OWL Carousal
    /* ----------------------------------------------------------- */

	$(document).ready(function() {
     	var owl = $(".availability #owl-demo");
	          owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 3],
        [1200, 3],
        [1400, 3],
        [1600, 3]
      ],
      navigation : false
  });
  	$(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
     	
    });

  	$(document).ready(function() {
     
        var owl = $("#owl-demo");
 
		  owl.owlCarousel({
			  items : 4, //10 items above 1000px browser width
			  itemsDesktop : [1000,4], //5 items between 1000px and 901px
			  itemsDesktopSmall : [900,3], // betweem 900px and 601px
			  itemsTablet: [767,2], //2 items between 600 and 0
			  itemsMobile: [479,1]
		  });
	  
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
     
    });
	
    $(document).ready(function() {
     
      $(".villas .gallery-villa #owl-demo").owlCarousel({
     		navigation : true,
          autoPlay: 3000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
     		
      });
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	  
     	
    });

