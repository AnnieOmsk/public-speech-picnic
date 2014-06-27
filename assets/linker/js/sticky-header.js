$(document).ready(function () {
  var stickyTop = $('.js-promo').offset().top;
  var stickyNav = $('.js-nav-fixed').offset().top;
          
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyTop ) {
                        // $('.js-nav-static').addClass('hide');
                        $('.js-nav-fixed').removeClass('un-visible');
                        if ($(window).scrollTop() >= stickyNav ) {
                          $('.js-nav-fixed').addClass('fixed');
                          $('.js-nav-fixed').addClass('nav-shadow');
                        } else {
                          $('.js-nav-fixed').removeClass('fixed');
                        }
                } else {
                        // $('.js-nav-static').removeClass('hide');
                        $('.js-nav-fixed').addClass('un-visible');
                        $('.js-nav-fixed').addClass('nav-shadow');
                }
        });
});