// Lightbox initialization
;(function() {
	buildLightBox($('.lightbox__holder'));

	function buildLightBox($item) {
		if($item.length === 0) return;
		$item.each(function() {
			var $self = $(this);
			$self.lightGallery({
				loadYoutubeThumbnail: true,
			    youtubeThumbSize: 'default',
			    loadVimeoThumbnail: true,
			    vimeoThumbSize: 'thumbnail_medium',
			    videoMaxWidth: '78%',
				youtubePlayerParams: {
			        modestbranding: 1,
			        showinfo: 0,
			        rel: 0,
			        controls: 0
			    },
			    vimeoPlayerParams: {
			        byline : 0,
			        portrait : 0,
			        color : 'A90707'     
			    }
			});
		});
	}
})(jQuery);