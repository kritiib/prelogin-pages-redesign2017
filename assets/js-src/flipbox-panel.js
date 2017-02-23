;(function() {
	// flixBoxPanel
	flixBoxPanel($('.flipping__panel'));

	// Function to create flibox feature
	function flixBoxPanel($item) {
		if($item.length === 0) return;
		$item.each(function() {
			var $self = $(this);
			$self.hover(function() {
				$self.addClass('flipping__panel--hovered');
			}, function() {
				$self.removeClass('flipping__panel--hovered');
			});
		});
	}
})(jQuery);