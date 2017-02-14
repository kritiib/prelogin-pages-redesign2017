;(function() {
	stickyHeader($('[data-sticky="true"]'));

	function stickyHeader($item) {
		if($item.length === 0) return;

		var $win = $(window), winScrollTop = 0;

		$item.each(function() {
			var $self = $(this),
				selfHeight = $self.outerHeight();
			$win.on('scroll', function() {
				winScrollTop = $win.scrollTop();
				if(winScrollTop > selfHeight) {
					$self.addClass('sticky-enabled');
				}else {
					$self.removeClass('sticky-enabled');
				}
			});
		});
	}
})(jQuery);