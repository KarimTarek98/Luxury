$(function () {
    // add class to navbar if we scroll
    $(window).scroll(function () {
       var  nav = $('header nav.navbar');
       if ( $(window).scrollTop() > nav.height() )
       {
           if ( !nav.hasClass('scrolled') )
           {
               nav.addClass('scrolled');
           }
       }
       else
       {
           if ( nav.hasClass('scrolled') )
           {
               nav.removeClass('scrolled');
           }
       }

       // scroll to top
        var scrollTop = $('.scroll-top');
        if ( $(window).scrollTop() >= 1000 )
        {
            if (scrollTop.is(':hidden'))
            {
                scrollTop.fadeIn(500);
            }
        }
        else
        {
            scrollTop.fadeOut(500);
        }
    });

    // scroll top
    $('.scroll-top').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    // scroll to element
    $('.navbar-nav > li > a').click(function (e) {
       e.preventDefault();
       $('html , body').animate({
           scrollTop: $($(this).data('scroll')).offset().top
       }, 1000);
    });

    // initialize counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // portofolio
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on( 'click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
    new WOW().init();

});
$(window).on("load",function () {
    $('.preload').fadeOut(2000,function () {
        $('body').css('overflow' , 'auto');
        $(this).remove();
    });
});