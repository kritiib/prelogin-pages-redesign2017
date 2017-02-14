;(function() {
	stickyFooter($('.footer--is-sticky'));

	function stickyFooter($item) {
		if($item.length === 0) return;

		var $main = $('.site-wrapper'),
			$win = $(window),
			resizer = null, resizerDelay = 10;

		$item.each(function() {
			var $self = $(this),
				selfHeight = $self.outerHeight();

			$win.on('resize', function() {
				if(resizer) clearTimeout(resizer);
				resizer = setTimeout(function() {
					selfHeight = $self.outerHeight();
					$main.css({
						marginBottom: selfHeight
					});
				}, resizerDelay);
			}).trigger('resize');
		});
	}
})(jQuery);