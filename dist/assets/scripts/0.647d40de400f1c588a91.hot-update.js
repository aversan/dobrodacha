webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	$(function () {
	
		// faq
	
		$('.faq-item__title .js-toggle').on('click', function (event) {
			var $toggle = $(this);
			var $item = $(this).parents('.faq-item:first');
			var $collapse = $(this).next('.collapse');
	
			if ($item.hasClass('open')) {
				$item.removeClass('open');
				$collapse.collapse('hide');
			} else {
				$item.addClass('open');
				$collapse.collapse('show');
			}
	
			return false;
		});
	
		// index
	
		// $(".tabs").lightTabs();
		// $('#cn-slideshow').slideshow();
		// $(".owl-carousel").owlCarousel();
	
		// owl
	
		var owl = $('.owl-carousel');
		try {
			owl.owlCarousel({
				loop: true,
				nav: true,
				margin: 10,
				responsive: {
					0: {
						items: 1
					},
					430: {
						items: 2
					},
					480: {
						items: 2
					},
					600: {
						items: 2
					},
					768: {
						items: 3
					},
					991: {
						items: 3
					},
					1200: {
						items: 4
					}
				}
			});
		} catch (error) {
			console.log('owl error');
		};
	});

/***/ }
])
//# sourceMappingURL=0.647d40de400f1c588a91.hot-update.js.map