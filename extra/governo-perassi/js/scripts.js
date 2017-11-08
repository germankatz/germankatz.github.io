$(document).ready(function(){
  	$('.carousel').slick({
		slidesToShow: 6,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false
	});	
});

$("#cont").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});
	
var fixmeTop = $('.home-nav').offset().top;    // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.home-nav').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            left: '0'
        });
        $('#home-pubs').css("margin-top", "75px");
    } else {                                   // apply position: static
        $('.home-nav').css({                      // if you scroll above it
            position: 'static'
        });
        $('#home-pubs').css("margin-top", "0px");
    }

});