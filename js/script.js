/* Sm nav function */


$(function () {
    $('.bars').click(function () {
        $('.sm-nav').fadeIn();
        $('body').css({
            overflowY:'hidden'
        })
    });

    $('.times').click(function () {
        $('.sm-nav').fadeOut();
        $('body').css({
            overflowY:'visible'
        })
    });
});


$(document).ready(function () {
    $('.egypt-li-sm').click(function () {
        $('.egypt-ul-sm').slideToggle();

        $('.travel-ul-sm').slideUp();
        $('.programs-ul-sm').slideUp();
        $('.dest-ul-sm').slideUp();
    });

    $('.travel-li-sm').click(function () {
        $('.travel-ul-sm').slideToggle();

        $('.egypt-ul-sm').slideUp();
        $('.programs-ul-sm').slideUp();
        $('.dest-ul-sm').slideUp();
    });

    $('.programs-li-sm').click(function () {
        $('.programs-ul-sm').slideToggle();


        
        $('.egypt-ul-sm').slideUp();
        $('.travel-ul-sm').slideUp();
        $('.dest-ul-sm').slideUp();
    });

    $('.dest-li-sm').click(function () {
        $('.dest-ul-sm').slideToggle();

        $('.egypt-ul-sm').slideUp();
        $('.travel-ul-sm').slideUp();
        $('.programs-ul-sm').slideUp();
    });
});

/* Sm nav function */


/* Start Scrolling to top */
$(document).ready(function () {
    $('.scrolltop').click(function() {
        $('html, body').animate({
            scrollTop : $('#top').offset().top
        }, 1000);
    });
});

/* End Scrolling To top */