;(function($) {

	
	var scrollWidth = scrollbarWidth();
	var $searchField = $('.search-form--medium-screen');
	var $navMenu = $('.navigation');

	$(function() {

		//Init WOW
		new WOW().init({   
            mobile: false 
		});

		//Init smoothscroll
		SmoothScroll({
			touchpadSupport: true
		});

		// Slider
		$('.client-slider').slick({
			arrows: false,
			dots: true,
			slide: '.client-slide',
			speed: 1200
		});

		//Scroll page to need section
		$(document).on('click', '.navigation__link', function(event) {
			event.preventDefault();

			var elementId = $(this).attr('href');

			if( $(elementId).length > 2 ) {
				var top = $(elementId).offset().top;

				$('body').animate({
					scrollTop: top
				}, 1200);
			}
		});// end click

		$(document).on('click', '.menu-toggle', function(event) {
			event.preventDefault();

			if ( $searchField.css('display') == 'block') {
				$searchField.slideUp(300);

				setTimeout(function() {
					$navMenu.toggleClass('js-nav-open');
				}, 500);

			} else {
				$navMenu.toggleClass('js-nav-open');
			}

		}); // end click

		$(document).on('click', '.search-form__btn--toggle', function(event) {
			event.preventDefault();

			if ( $navMenu.hasClass('js-nav-open') ) {
				$navMenu.removeClass('js-nav-open');

				setTimeout(function() {
					$searchField.slideDown();
				}, 500);

			} else {
				$searchField.slideToggle();
			}
		}); // end click
	}); // end ready

	$(window).resize(function(event) {

		var windowWidth = $(window).width();

		$navMenu.removeClass('js-nav-open');
		$searchField.slideUp();

		if(windowWidth <= (768 - scrollWidth) ) {
			
		} else {
			

		}
	}); // end resize

	$(window).scroll(function(event) {

		var windowWidth = $(window).width();

		$searchField.slideUp();

		//Hide mobile menu
		if(windowWidth <= (768 - scrollWidth) ) {
			$navMenu.removeClass('js-nav-open');
		}
	}); // end scroll

	function scrollbarWidth() {
  		var documentWidth = parseInt(document.documentElement.clientWidth);
  		var windowsWidth = parseInt(window.innerWidth);
  		var scrollbarWidth = windowsWidth - documentWidth;
  		return scrollbarWidth;
	}

})(jQuery);