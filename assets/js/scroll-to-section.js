;(function() {
	scrollToSection($('[data-scroll-target]'));

	function scrollToSection($item) {
		if($item.length === 0) return;

		var $win = $(window),
			winScrollTop = 0,
			$page = $('html, body'),
			$header = $('#masthead'),
			headerHeight = $header.outerHeight(),
			resizer = null, resizerDelay = 10, targetOffsetTop = 0;

		$item.each(function() {
			var $self = $(this),
				$target = $('.' + $self.attr('data-scroll-target')),
				targetOffsetTop = $target.offset().top;

			$win.on('resize', function() {
				if(resizer) clearTimeout(resizer);
				resizer = setTimeout(function() {
					headerHeight = $header.outerHeight();
					targetOffsetTop = $target.offset().top;
				}, resizerDelay);
			});

			$self.on('click', function(event) {
				event.preventDefault();

				$page.animate({
					scrollTop: targetOffsetTop - headerHeight
				}, {
					duration: 1200,
					easing: 'easeInOutExpo'
				});
			});
		});
	}
})(jQuery);