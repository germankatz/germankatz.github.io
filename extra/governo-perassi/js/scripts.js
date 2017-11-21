$(document).ready(function(){
    $('.cotizacion-cereales').load('http://fiddle.jshell.net/qAa4u/show/light #1 '); //#WebPartWPQ9
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

// More info
$(".group-1-btn").click(function() {
    $(".group-5").hide();
    $(".group-4").hide();
    $(".group-3").hide();
    $(".group-2").hide();
    $(".group-1").hide();
    $(".all").css('display', 'block');
    $(".group-1").css('display','block');
    $(".more-info").fadeIn();
    return false;
});
$(".group-2-btn").click(function() {
    $(".group-5").hide();
    $(".group-4").hide();
    $(".group-3").hide();
    $(".group-2").hide();
    $(".group-1").hide();
    $(".all").css('display', 'block');
    $(".group-2").css('display','block');
    $(".more-info").fadeIn();
    return false;
});
$(".group-3-btn").click(function() {
    $(".group-5").hide();
    $(".group-4").hide();
    $(".group-3").hide();
    $(".group-2").hide();
    $(".group-1").hide();
    $(".all").css('display', 'block');
    $(".group-3").css('display','block');
    $(".more-info").fadeIn();
    return false;
});
$(".group-4-btn").click(function() {
    $(".group-5").hide();
    $(".group-4").hide();
    $(".group-3").hide();
    $(".group-2").hide();
    $(".group-1").hide();
    $(".all").css('display', 'block');
    $(".group-4").css('display','block');
    $(".more-info").fadeIn();
    return false;
});
$(".group-5-btn").click(function() {
    $(".group-5").hide();
    $(".group-4").hide();
    $(".group-3").hide();
    $(".group-2").hide();
    $(".group-1").hide();
    $(".all").css('display', 'block');
    $(".group-5").css('display','block');
    $(".more-info").fadeIn();
    return false;
});

$(".close").click(function() {
    $(".group-5").hide();
    $(".group-4").hide();
    $(".group-3").hide();
    $(".group-2").hide();
    $(".group-1").hide();
    $(".all").css('display', 'none');
    $(".more-info").fadeOut();
});

$(".all").click(function() {
    $(".group-5").hide();
    $(".group-4").hide();
    $(".group-3").hide();
    $(".group-2").hide();
    $(".group-1").hide();
    $(".all").css('display', 'none');
    $(".more-info").fadeOut();
    
});


// Fix for the home
$(".dropbtn").click(function() {
    return false;
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