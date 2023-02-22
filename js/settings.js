/*
	Author: nicdark
	Author URI: http://www.nicdarkthemes.com/
*/


(function($) {
	"use strict";



	//isotope
	$( window ).load(function() {
		
		$('.nicdark_masonry_btns div a').click( function() {
			var filterValue = $( this ).attr('data-filter');
			$container.isotope({ filter: filterValue });
		});
		  
		var $container = $('.nicdark_masonry_container').isotope({
			itemSelector: '.nicdark_masonry_item'
		});

		$( '.nicdark_simulate_click' ).trigger( "click" );
		
		$('#company').click( function() {
			if(jQuery('.company-hide').length >0){
				jQuery('.company-hide').addClass('company-show');
				jQuery('.company-show').removeClass('company-hide');
			}else{
				jQuery('.company-show').addClass('company-hide');
				jQuery('.company-hide').removeClass('company-show');
			}
		});

		$('#save').click( function() {
			let email = jQuery('#email').val();
			let name = jQuery('#name').val();
			let lastName = jQuery('#lastName').val();
			let phone = jQuery('#phone').val();
			let msg = jQuery('#msg').val();
			let diet = jQuery('#diet').val();
			let transport = jQuery('input:radio[name=transport]:checked').val();
			let email_comp = jQuery('#email-comp').val();
			let name_comp = jQuery('#name-comp').val();
			let phone_comp = jQuery('#phone-comp').val();
			let diet_comp = jQuery('#diet-comp').val();
			let mainFormValid = false;
			let compFormValid = false;
			if(email && name && lastName && phone && msg && diet && transport){
				mainFormValid = true
			}
			if((email_comp && name_comp && phone_comp && diet_comp)){
				compFormValid = true;
			}	
			if((mainFormValid && !$("#company-container").is(":visible") ) 
			|| (mainFormValid && $("#company-container").is(":visible") && compFormValid) ){
				//TODO send data to api 
			}else{
				checkMandatoryFields();
			}

		});

		function checkMandatoryFields(){
			let email = jQuery('#email').val();
			let name = jQuery('#name').val();
			let lastName = jQuery('#lastName').val();
			let phone = jQuery('#phone').val();
			let transport = jQuery('input:radio[name=transport]:checked').val();
			if(!email){
				jQuery('#email-alert').removeClass('hidden');
				jQuery('#email').removeClass('nicdark_border_white');
				jQuery('#email').addClass('nicdark_border_red');
			}else{
				jQuery('#email-alert').addClass('hidden');
				jQuery('#email').removeClass('nicdark_border_red');
				jQuery('#email').addClass('nicdark_border_white');
			}
			if(!name){
				jQuery('#name-alert').removeClass('hidden');
				jQuery('#name').removeClass('nicdark_border_white');
				jQuery('#name').addClass('nicdark_border_red');
			}else{
				jQuery('#name-alert').addClass('hidden');
				jQuery('#name').removeClass('nicdark_border_red');
				jQuery('#name').addClass('nicdark_border_white');
			}
			if(!lastName){
				jQuery('#lastName-alert').removeClass('hidden');
				jQuery('#lastName').removeClass('nicdark_border_white');
				jQuery('#lastName').addClass('nicdark_border_red');
			}else{
				jQuery('#lastName-alert').addClass('hidden');
				jQuery('#lastName').removeClass('nicdark_border_red');
				jQuery('#lastName').addClass('nicdark_border_white');
			}
			if(!phone){
				jQuery('#phone-alert').removeClass('hidden');
				jQuery('#phone').removeClass('nicdark_border_white');
				jQuery('#phone').addClass('nicdark_border_red');
			}else{
				jQuery('#phone-alert').addClass('hidden');
				jQuery('#phone').removeClass('nicdark_border_red');
				jQuery('#phone').addClass('nicdark_border_white');
			}
			if(!transport){
				jQuery('#transport-alert').removeClass('hidden');
			}else{
				jQuery('#transport-alert').addClass('hidden');
			}

			if($("#company-container").is(":visible")){
				let email_comp = jQuery('#email-comp').val();
				let name_comp = jQuery('#name-comp').val();
				let lastName_comp = jQuery('#lastName-comp').val();
				let phone_comp = jQuery('#phone-comp').val();
				if(!email_comp){
					jQuery('#email-comp-alert').removeClass('hidden');
					jQuery('#email-comp').removeClass('nicdark_border_white');
					jQuery('#email-comp').addClass('nicdark_border_red');
				}else{
					jQuery('#email-comp-alert').addClass('hidden');
					jQuery('#email-comp').removeClass('nicdark_border_red');
					jQuery('#email-comp').addClass('nicdark_border_white');
				}
				if(!name_comp){
					jQuery('#name-comp-alert').removeClass('hidden');
					jQuery('#name-comp').removeClass('nicdark_border_white');
					jQuery('#name-comp').addClass('nicdark_border_red');
				}else{
					jQuery('#name-comp-alert').addClass('hidden');
					jQuery('#name-comp').removeClass('nicdark_border_red');
					jQuery('#name-comp').addClass('nicdark_border_white');
				}
				if(!lastName_comp){
					jQuery('#lastName-comp-alert').removeClass('hidden');
					jQuery('#lastName-comp').removeClass('nicdark_border_white');
					jQuery('#lastName-comp').addClass('nicdark_border_red');
				}else{
					jQuery('#lastName-comp-alert').addClass('hidden');
					jQuery('#lastName-comp').removeClass('nicdark_border_red');
					jQuery('#lastName-comp').addClass('nicdark_border_white');
				}
				if(!phone_comp){
					jQuery('#phone-comp-alert').removeClass('hidden');
					jQuery('#phone-comp').removeClass('nicdark_border_white');
					jQuery('#phone-comp').addClass('nicdark_border_red');
				}else{
					jQuery('#phone-comp-alert').addClass('hidden');
					jQuery('#phone-comp').removeClass('nicdark_border_red');
					jQuery('#phone-comp').addClass('nicdark_border_white');
				}
		}

	
	}

	$('#email').keyup(function(){
		let email = jQuery('#email').val();
		if(!email){
			jQuery('#email-alert').removeClass('hidden');
			jQuery('#email').removeClass('nicdark_border_white');
			jQuery('#email').addClass('nicdark_border_red');
		}else{
			jQuery('#email-alert').addClass('hidden');
			jQuery('#email').removeClass('nicdark_border_red');
			jQuery('#email').addClass('nicdark_border_white');
		}
	});
	$('#name').keyup(function(){
		let name = jQuery('#name').val();
		if(!name){
			jQuery('#name-alert').removeClass('hidden');
			jQuery('#name').removeClass('nicdark_border_white');
			jQuery('#name').addClass('nicdark_border_red');
		}else{
			jQuery('#name-alert').addClass('hidden');
			jQuery('#name').removeClass('nicdark_border_red');
			jQuery('#name').addClass('nicdark_border_white');
		}
	});
	$('#lastName').keyup(function(){
		let lastName = jQuery('#lastName').val();
		if(!lastName){
			jQuery('#lastName-alert').removeClass('hidden');
			jQuery('#lastName').removeClass('nicdark_border_white');
			jQuery('#lastName').addClass('nicdark_border_red');
		}else{
			jQuery('#lastName-alert').addClass('hidden');
			jQuery('#lastName').removeClass('nicdark_border_red');
			jQuery('#lastName').addClass('nicdark_border_white');
		}
	});
	$('#phone').keyup(function(){
		let phone = jQuery('#phone').val();
		if(!phone){
			jQuery('#phone-alert').removeClass('hidden');
			jQuery('#phone').removeClass('nicdark_border_white');
			jQuery('#phone').addClass('nicdark_border_red');
		}else{
			jQuery('#phone-alert').addClass('hidden');
			jQuery('#phone').removeClass('nicdark_border_red');
			jQuery('#phone').addClass('nicdark_border_white');
		}
	});
	$('#email-comp').keyup(function(){
		let email_comp = jQuery('#email-comp').val();
		if(!email_comp){
			jQuery('#email-comp-alert').removeClass('hidden');
			jQuery('#email-comp').removeClass('nicdark_border_white');
			jQuery('#email-comp').addClass('nicdark_border_red');
		}else{
			jQuery('#email-comp-alert').addClass('hidden');
			jQuery('#email-comp').removeClass('nicdark_border_red');
			jQuery('#email-comp').addClass('nicdark_border_white');
		}
	});
	$('#name-comp').keyup(function(){
		let name_comp = jQuery('#name-comp').val();
		if(!name_comp){
			jQuery('#name-comp-alert').removeClass('hidden');
			jQuery('#name-comp').removeClass('nicdark_border_white');
			jQuery('#name-comp').addClass('nicdark_border_red');
		}else{
			jQuery('#name-comp-alert').addClass('hidden');
			jQuery('#name-comp').removeClass('nicdark_border_red');
			jQuery('#name-comp').addClass('nicdark_border_white');
		}
	});
	$('#lastName-comp').keyup(function(){
		let lastName_comp = jQuery('#lastName-comp').val();
		if(!lastName_comp){
			jQuery('#lastName-comp-alert').removeClass('hidden');
			jQuery('#lastName-comp').removeClass('nicdark_border_white');
			jQuery('#lastName-comp').addClass('nicdark_border_red');
		}else{
			jQuery('#lastName-comp-alert').addClass('hidden');
			jQuery('#lastName-comp').removeClass('nicdark_border_red');
			jQuery('#lastName-comp').addClass('nicdark_border_white');
		}
	});
	$('#phone-comp').keyup(function(){
		let phone_comp = jQuery('#phone-comp').val();
		if(!phone_comp){
			jQuery('#phone-comp-alert').removeClass('hidden');
			jQuery('#phone-comp').removeClass('nicdark_border_white');
			jQuery('#phone-comp').addClass('nicdark_border_red');
		}else{
			jQuery('#phone-comp-alert').addClass('hidden');
			jQuery('#phone-comp').removeClass('nicdark_border_red');
			jQuery('#phone-comp').addClass('nicdark_border_white');
		}
	});
	
	
	});
	///////////


	

	//inview
	var windowWidth = $(window).width(); 

	if (windowWidth < 400){
		
		$('.fade-left, .fade-up, .fade-down, .fade-right, .bounce-in, .rotate-In-Down-Left, .rotate-In-Down-Right').css('opacity','1');
			
	}else{
		
		$('.fade-up').bind('inview', function(event, visible) { if (visible == true) { $(this).addClass('animated fadeInUp'); } });
		$('.fade-down').bind('inview', function(event, visible) { if (visible == true) { $(this).addClass('animated fadeInDown'); } });
		$('.fade-left').bind('inview', function(event, visible) { if (visible == true) { $(this).addClass('animated fadeInLeft'); } });
		$('.fade-right').bind('inview', function(event, visible) { if (visible == true) { $(this).addClass('animated fadeInRight'); } });
		$('.bounce-in').bind('inview', function(event, visible) { if (visible == true) { $(this).addClass('animated bounceIn'); } });
		$('.rotate-In-Down-Left').bind('inview', function(event, visible) { if (visible == true) { $(this).addClass('animated rotateInDownLeft'); } });
		$('.rotate-In-Down-Right').bind('inview', function(event, visible) { if (visible == true) { $(this).addClass('animated rotateInDownRight'); } });	

	}
	///////////
		

	//menu	
	$('.nicdark_menu').superfish({});	
	//megamenu
	$('.nicdark_megamenu ul a').removeClass('sf-with-ul');
	$($('.nicdark_megamenu ul li').find('ul').get().reverse()).each(function(){
	  $(this).replaceWith($('<ol>'+$(this).html()+'</ol>'))
	})
	//responsive
	$('.nicdark_menu').tinyNav({
		active: 'selected',
		header: 'MENU'
	});
	///////////


	//fixed menu
	jQuery(window).scroll(function(){
		add_class_scroll();
	});
	add_class_scroll();
	function add_class_scroll() {
		if(jQuery(window).scrollTop() > 100) {
			jQuery('.nicdark_navigation').addClass('slowup');
			jQuery('.nicdark_navigation').removeClass('slowdown');
			jQuery('.nicdark_transparent_navigation').removeClass('nicdark_transparent_menu');
			jQuery('.nicdark_transparent_navigation .nicdark_logo .nicdark_logo_transparent').css('display','none');
			jQuery('.nicdark_transparent_navigation .nicdark_logo .nicdark_logo_normal').css('display','block');
		} else {
			jQuery('.nicdark_navigation').addClass('slowdown');
			jQuery('.nicdark_transparent_navigation').addClass('nicdark_transparent_menu');
			jQuery('.nicdark_navigation').removeClass('slowup');
			jQuery('.nicdark_transparent_navigation .nicdark_logo .nicdark_logo_transparent').css('display','block');
			jQuery('.nicdark_transparent_navigation .nicdark_logo .nicdark_logo_normal').css('display','none');
		}
	}
	///////////
	

	
	//tooltip
    $( '.nicdark_tooltip' ).tooltip({ 
    	position: {
    		my: "center top",
    		at: "center+0 top-50"
  		}
    });
    //calendar
	$( '.nicdark_calendar' ).datepicker({ });
	//tab
	$('.nicdark_tab').tabs({show: 'fade', hide: 'fade'});
	//toogle
	$( '.nicdark_toogle' ).accordion({
		heightStyle: "content",
		collapsible: true,
		active: false
	}); 
	//accordion
	$( '.nicdark_accordion' ).accordion({
		heightStyle: "content"
	});
	//slider-range
	$( ".nicdark_slider_range" ).slider({
		range: true,
		min: 0,
		max: 1000,
		values: [ 200, 700 ],
		slide: function( event, ui ) {
			$( ".nicdark_slider_amount" ).val( "$ " + ui.values[ 0 ] + " - $ " + ui.values[ 1 ] );
		}
	});
	$( ".nicdark_slider_amount" ).val( "$ " + $( ".nicdark_slider_range" ).slider( "values", 0 ) + " - $ " + $( ".nicdark_slider_range" ).slider( "values", 1 ) );
	//nicdark_price_range
	$( ".nicdark_price_range" ).slider({
      range: true,
      min: 0,
      max: 5000,
      values: [ 800, 3800 ],
      slide: function( event, ui ) {
        $( ".nicdark_price_amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( ".nicdark_price_amount" ).val( "Price:  $ " + $( ".nicdark_price_range" ).slider( "values", 0 ) + " - $ " + $( ".nicdark_price_range" ).slider( "values", 1 ) );
	//alerts
	$('.nicdark_alerts').click(function(event){
		$(this).css({
			'display': 'none',
		});
	});
	//progressbar
	$('.animate_progressbar').bind('inview', function(event, visible) { if (visible == true) { $(this).removeClass('animate_progressbar'); } });
	///////////



	//internal-link
	$('.nicdark_internal_link').click(function(event){

		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
	
		$('html,body').animate({scrollTop:target_top -85}, 900);
	
	});
	///////////



	//counter
	$('.nicdark_counter').data('countToOptions', {
		formatter: function (value, options) {
			return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
		}
	});
	// start all the timers
	$('.nicdark_counter').bind('inview', function(event, visible) {
		if (visible == true) {
			$('.nicdark_counter').each(count);
		} 
	});
	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
	///////////


	//nicescrool
	$(".nicdark_nicescrool").niceScroll({
		touchbehavior:true,
		cursoropacitymax:1,
		cursorwidth:0,
		autohidemode:false,
		cursorborder:0
	});
	///////////

		

	//left sidebar OPEN		
	$('.nicdark_left_sidebar_btn_open').click(function(event){
		$('.nicdark_left_sidebar').css({
			'left': '0px',
		});
		$('.nicdark_site, .nicdark_navigation').css({
			'margin-left': '300px',
		});
		$('.nicdark_overlay').addClass('nicdark_overlay_on');
	});
	//left sidebar CLOSE	
	$('.nicdark_left_sidebar_btn_close, .nicdark_overlay').click(function(event){
		$('.nicdark_left_sidebar').css({
			'left': '-300px'
		});
		$('.nicdark_site, .nicdark_navigation').css({
			'margin-left': '0px'
		});
		$('.nicdark_overlay').removeClass('nicdark_overlay_on');
	});
	//right sidebar OPEN		
	$('.nicdark_right_sidebar_btn_open').click(function(event){
		$('.nicdark_right_sidebar').css({
			'right': '0px',
		});
		$('.nicdark_site, .nicdark_navigation').css({
			'margin-left': '-300px',
		});
		$('.nicdark_overlay').addClass('nicdark_overlay_on');
	});
	//right sidebar CLOSE	
	$('.nicdark_right_sidebar_btn_close, .nicdark_overlay').click(function(event){
		$('.nicdark_right_sidebar').css({
			'right': '-300px'
		});
		$('.nicdark_site, .nicdark_navigation').css({
			'margin-left': '0px'
		});
		$('.nicdark_overlay').removeClass('nicdark_overlay_on');
	});
	///////////
	


	//nicdark_mpopup_gallery
	$('.nicdark_mpopup_gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
	//nicdark_mpopup_iframe
	$('.nicdark_mpopup_iframe').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	//nicdark_mpopup_window
	$('.nicdark_mpopup_window').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	//nicdark_mpopup_ajax
	$('.nicdark_mpopup_ajax').magnificPopup({
		type: 'ajax',
		alignTop: false,
		overflowY: 'scroll'
	});
	//////////


})(jQuery);