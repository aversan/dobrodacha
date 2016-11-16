$(() => {

	// faq

	$('.faq-item').each(function(){
		var $item = $(this);
		var $toggle = $item.find('.faq-item__title .js-toggle');
		var $collapse = $item.find('.collapse');
		var $close = $item.find('.faq-item__close');

		$toggle.on('click', function(event){
			if ($item.hasClass('open')) {
			 	$item.removeClass('open');
			} else {
				$item.addClass('open');
			}

			return false;
		});

		$close.on('click', function(event){
			$item.removeClass('open');

			return false;
		});
	});
});
