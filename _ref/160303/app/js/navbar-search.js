function loadSearch() {
    
    $('a[href="#toggle-search"], .navbar-bootsnipp .bootsnipp-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
		event.preventDefault();
		$('.navbar-bootsnipp .bootsnipp-search .input-group > input').val('');
		$('.navbar-bootsnipp .bootsnipp-search').toggleClass('open');
		$('a[href="#toggle-search"]').closest('li').toggleClass('active');

		if ($('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
			/* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
			setTimeout(function() { 
				$('.navbar-bootsnipp .bootsnipp-search .form-control').focus();
			}, 100);
		}			
	});

	$(document).on('keyup', function(event) {
		if (event.which == 27 && $('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
			$('a[href="#toggle-search"]').trigger('click');
		}
	});
    
    //loadInitScroll();
}

/*! Main */
//jQuery(document).ready(function($) {
  
function loadInitScroll(){
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar-main');    
    distance = navbar.offset().top;
    //alert(navbar + ': ' + distance);
    $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	//$("body").css("padding-top", "70px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            //$("body").css("padding-top", "0px");
        }
    });
}
//});

//navbar-fixed-top