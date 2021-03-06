jQuery(function ($) {
	
	'use strict';
	
	
	//PRELOADER
    $(window).load(function() {    
        $("#status").fadeOut();
        $("#preloader").delay(1000).fadeOut("slow");
    });
	
	
	//NAVBAR SLIDEDOWN
	$(".navbar-default").cbSlideDownHeader({
    	boxShadow: "0 2px 2px #333",
    	slidePoint: 500
  	});
	
	//VIDEO BG
	$(function(){
			$('.video-player').mb_YTPlayer();
	});
	
	//SLIDE SHOW BG
	$(".slideshow-bg").backstretch([
		"images/slideshow-image/bg1.jpg",
		"images/slideshow-image/bg2.jpg",
		"images/slideshow-image/bg3.jpg",
		"images/slideshow-image/bg4.jpg"    
	  ], {duration: 4000,fade: "slow"});
	
	
	//FITVID
	$(".video").fitVids();
	
	
	//OWLCAROUSEL SLIDER (SCREENSHOTS)
	$("#s-slider").owlCarousel({ 
		autoPlay: 4000, //Set AutoPlay to 4 seconds	 
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet : [768,2],
		itemsMobile	: [479,1],
		pagination	: true,
	});
	
	
	//OWLCAROUSEL SLIDER (TESTIMONIALS)
	$("#t-slider").owlCarousel({ 
		autoPlay: 3000, //Set AutoPlay to 4 seconds	 
		items : 2,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [979,2],
		itemsTablet : [768,2],
		itemsMobile	: [479,1],
		pagination	: false,
		navigation: false
	});
	
	
	//MAIL CHIMP INTEGRATION
  	$('#mc-form').ajaxChimp({
  		language: 'cm',
    	url: 'http://appengg.us12.list-manage2.com/subscribe/post?u=1262aa2502f3201fcdc20da64&amp;id=547618041b'// type your subcribe post id
  	});
    
  	$.ajaxChimp.translations.cm = {
  		'submit': 'Please Wait few sec.......',
     	0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
     	1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
     	2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
     	3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
     	4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
     	5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
  	};
	
	
	//CONTACT FORM
	$('#contact-form').validate({
    	rules: {
      		name: {
            required: true,
            minlength: 2
        },
		
        email: {
            required: true,
            email: true
        },
						
		phone: {
            required: true,
            minlength: 2
        },
            
        message: {
            required: true,
            minlength: 10
        }
      },
					
     messages: {
            name: "<i class='fa fa-exclamation-triangle'></i>Please specify your name.",
			
            email: {
                required: "<i class='fa fa-exclamation-triangle'></i>We need your email address to contact you.",
                email: "<i class='fa fa-exclamation-triangle'></i>Please enter a valid email address."
            },
			phone:"<i class='fa fa-exclamation-triangle'></i>Please enter a valid email address.",
						
            message: "<i class='fa fa-exclamation-triangle'></i>Please enter your message."
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "php/contact.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('.success-cf').fadeIn();
                    });
                    $('#contact-form')[0].reset();
                },
                error: function() {
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $('.error-cf').fadeIn();
                    });
                }
            });
        }
    });
		
	//SMOOTHSCROLL
    $('a[href*=#]:not([href=#], #schedule-days a, .event-speaker a)').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                return false;
            }
        }
    });
	
	//SCROLL TOP
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top a').fadeIn(200);
        } else {
            $('.scroll-top a').fadeOut(200);
        }
    });
    
    $('.scroll-top a').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
	
	});	