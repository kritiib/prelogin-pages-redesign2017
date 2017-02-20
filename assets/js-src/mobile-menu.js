/**
 * Created by bobaminions on 10/21/2016.
 */

/**
 * Mobile menu
 */

/* ============================================================= */
/*     Initializing Function/Methods before page/window load     */
/* ============================================================= */

// Init mobile menu toggle
mobileMenuOpener($('.navbar__toggle'));
//Init function to add span to mobile menu
addSpanToMobileMenu($('.menu--primary .has-submenu'));
//Init mobile menu
mobileMenu($('li.has-submenu span.opener'));

//Function to create mobile menu
function mobileMenuOpener($menu) {
    if($menu.length === 0) return;
    var $self = $($menu),
        $html = $('html');
    //Attch click event
    $self.on('click', function(e) {
        var $target = $('.' + $self.attr('data-toggle-target'));

        $self.toggleClass('closer opener');
        $target.addClass('active-menu').stop(true).slideToggle({
            duration: 700,
            easing: 'easeInOutExpo'
        });
        $html.toggleClass('lock-html-x no-scroll-x');
        e.preventDefault();
    });
}

// Function to add span to mobile menu
function addSpanToMobileMenu($dropdown) {
    if($dropdown.length === 0) return;
    $dropdown.each(function() {
        var $self = $(this),
            $span = $('<span>', {'class': 'opener opener-item visible-xs'});
        $span.insertBefore($self.find('> .menu__dropdown'));
    });
}
// Function to make mobile menu
function mobileMenu($item) {
    if($item.length === 0) return;
    $item.each(function() {
        var $self = $(this),
            $selfParent = $self.closest('li.has-submenu'),
            $target = $self.next('.menu__dropdown');
        if($(window).innerWidth() > 767 - 17) {
            $target.removeAttr('style');			}
        else if($(window).innerWidth() <= 767 - 17) {
            //$target.hide();
        }
        $('.menu--primary').on('click', function(e) {
            e.stopPropagation();
        });
        $self.on('click', function(e) {
            $self.toggleClass('closer opener');
            $target.stop(true).slideToggle({
                duration: 800,
                easing: 'easeInOutExpo'
            });
            e.stopPropagation();
        });
    });
}