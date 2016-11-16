webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		alert(1);
	
		// faq
	
		(0, _jquery2.default)('.faq-item__title .js-toggle').on('click', function (event) {
			var $toggle = (0, _jquery2.default)(this);
			var $item = (0, _jquery2.default)(this).parents('.faq-item:first');
			var $collapse = (0, _jquery2.default)(this).next('.collapse');
	
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
//# sourceMappingURL=0.ba63be30d29e3d88ab32.hot-update.js.map