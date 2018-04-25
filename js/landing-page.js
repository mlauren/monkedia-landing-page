(function($) {
	$(function() {
		$('.testimonials-container').slick({
			slidesToShow: 1,
	  		slidesToScroll: 1,
	  		dots: false
		});

		$('.add-product').on('submit', function(e) {
			document.location.href='https://paul-tripp.myshopify.com/cart';
		});
	});
}) (jQuery);