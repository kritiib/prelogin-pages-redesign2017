;(function() {
    // Function to add last col class to the last col
    window.calculateLastColInRow = function(container, elem) {
        if(container.length === 0) return;
        container.each(function() {
            var $self = $(this);
            var colInRow = 0;
            //var $container = null;
            $self.find(elem).each(function() {
                if($(this).prev().length > 0) {
                    if($(this).position().top != $(this).prev().position().top) return false;
                    colInRow++;
                }
                else {
                    colInRow++;
                }
                var colInLastRow = $self.find(elem).length % colInRow;
                if(colInLastRow == 0) colInLastRow = colInRow;
                $self.find(elem).removeClass('last-col')
                $self.find(elem).slice(-colInLastRow).addClass('last-col')
            });

        });
    }

    // Initialize calculateLastColInRow
    window.calculateLastColInRow($('.js-row'), $('.js-last-col'));

    // Resize actions
    var iresizer = null,
        idelay = 10;

    $(window).on('resize', function() {
        if(iresizer) clearTimeout(iresizer);
        iresizer = setTimeout(window.calculateLastColInRow($('.js-row'), $('.js-last-col')), idelay);
    });
})(jQuery);
