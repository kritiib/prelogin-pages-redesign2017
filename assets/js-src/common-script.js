// Init wow plugin
 wow = new WOW({
	boxClass:     'wow',      // default
	animateClass: 'animated', // default
	offset:       0,          // default
	mobile:       false,       // default
	live:         true        // default
});
wow.init();

// Keep card position aligned
;(function() {
	// Keep card and stacked image aligned
	window.jsCardOffset = function($item, gap) {
		if($item.length === 0) return;
		$item.each(function() {
			var $self = $(this),
				selfPositionType = $self.attr('data-card-position'),
				$target = $self.next('.stacked__picture');

			if(selfPositionType === 'left') {
				var selfLeftOffset = $self.position().left;
				$target.css({
					left: selfLeftOffset + gap
				});
			}else if(selfPositionType === 'right') {
				var selfLeftOffset = $self.position().left;
				$target.css({
					right: selfLeftOffset + gap
				});
			}
		});
	}

	// Init window.jsCardOffset($('.js-card'), 50)
	window.jsCardOffset($('.js-card'), 55);

	var winTimer = null, delay = 10;
	$(window).on('resize', function() {
		if(winTimer) clearTimeout(winTimer);
		winTimer = setTimeout(window.jsCardOffset($('.js-card'), 55), delay);
	});
})(jQuery);

// Back to top 
;(function() {
	// scrollPageTop($('.backTop__trigger'));
	scrollPageTop($('.backTop__trigger'));
	
	function scrollPageTop($elem) {
	    if($elem.length === 0) return;
	    var $window = $(window),
	        winScrollTop,
	        winHeight = $window.height();

	    $window.on('scroll', function() {
	        winScrollTop = $window.scrollTop();
	        if(winScrollTop >= 150) {
	            $elem.closest('.backTop-wrapper').addClass('animated');
	        }else {
	            $elem.closest('.backTop-wrapper').removeClass('animated');
	        }
	    });

	    $elem.each(function() {
	        var $self = $(this);
	        //Attach click event on current object
	        $self.on('click', function(e) {
	            $('html, body').animate({scrollTop: 0}, {duration: 700,easing: 'easeInOutExpo'});
	            // Prevent the default behavior of the anchor tag
	            e.preventDefault();
	        });
	    });
	}
})(jQuery);