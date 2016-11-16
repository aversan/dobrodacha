webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
	
		// faq
	
		(0, _jquery2.default)('.faq-item').each(function () {
			var $item = (0, _jquery2.default)(this);
			var $toggle = $item.find('.faq-item__title .js-toggle');
			var $collapse = $item.find('.collapse');
			var $close = $item.find('.faq-item__close');
	
			$toggle.on('click', function (event) {
				if ($item.hasClass('open')) {
					$item.removeClass('open');
				} else {
					$item.addClass('open');
				}
	
				return false;
			});
	
			$close.on('click', function (event) {
				$item.removeClass('open');
	
				return false;
			});
		});
	
		// index
	
		// $(".tabs").lightTabs();
		// $('#cn-slideshow').slideshow();
		// $(".owl-carousel").owlCarousel();
	
		// owl
	
		var owl = (0, _jquery2.default)('.owl-carousel');
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
//# sourceMappingURL=0.cf154be7a6b8a19027b1.hot-update.js.map