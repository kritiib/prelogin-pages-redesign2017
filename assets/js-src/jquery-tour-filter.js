;(function() {
	// Product tour filter
	if($('#product-tour-container').length === 0) return;
	var $tourFilterContainer = $('#product-tour-container'),
		$filterSelector = $tourFilterContainer.find('.product-tour-filter__cols'),
		$filterBtn = $('.product-tour-filter__item').find('.btn'),
		$filterBtnIsActive = $('.product-tour-filter__item.isActive').find('.btn'),
		preFiltered = $filterBtnIsActive.attr('data-filter');

	filterItems(preFiltered, $filterSelector, $tourFilterContainer);

	function filterItems(_params, _selector, _container) {
		if(_params === 'all') {
			_params = '*'		
		}else {
			_params = '.' + _params;
		}

		$filterSelector.removeClass('filtered-col');
		$(_params).addClass('filtered-col');

		_container.isotope({
			isInitLayout: true,
			itemSelector: '.product-tour-filter__cols',
			isAnimated: true,
			filter: _params
		});

		// Call isotope filter
		_selector.imagesLoaded().progress(function() {
			_container.isotope('layout');
		});
	}

	$filterBtn.each(function() {
		var $self = $(this);
		$self.on('click', function(event) {
			var filterParam = $self.attr('data-filter');
			var $parent = $self.closest('.product-tour-filter__item');

			filterItems(filterParam, $filterSelector, $tourFilterContainer);

			// Add remove active class from parent
			$parent.siblings().removeClass('isActive');
			$parent.addClass('isActive');

			event.preventDefault();
		});
	});

})(jQuery);