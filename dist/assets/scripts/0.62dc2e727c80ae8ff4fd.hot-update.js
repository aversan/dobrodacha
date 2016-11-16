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
	});

/***/ }
])
//# sourceMappingURL=0.62dc2e727c80ae8ff4fd.hot-update.js.map