webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _jquery2.default)('.faq-item__title .js-toggle').on('click', function () {
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
	});

/***/ }
])
//# sourceMappingURL=0.510cbe73038c931404d6.hot-update.js.map