$(document).ready(function () {
  var stickyTop = $('.js-nav-fixed').offset().top-80;
  var stickyNav = $('.js-nav-fixed').offset().top;
  var topMenu = $(".js-nav-fixed"),
      topMenuHeight = topMenu.outerHeight()+120, /*+15*/
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });
        
        $(window).scroll(function(){               

                if( $(window).scrollTop() > stickyTop ) {
                        // $('.js-nav-static').addClass('hide');
                        $('.js-nav-fixed').removeClass('un-visible');
                        if ($(window).scrollTop() > stickyNav ) {
                          $('.js-nav-fixed').addClass('fixed');
                          $('.js-nav-fixed').addClass('nav-shadow');
                          $('.js-social-news').addClass('padding-top');
                          var fromTop = $(this).scrollTop()+topMenuHeight;
                          // Get id of current scroll item
                          var cur = scrollItems.map(function(){
                            if ($(this).offset().top < fromTop)
                              return this;
                          });
                          // Get the id of the current element
                          cur = cur[cur.length-1];
                          var id = cur && cur.length ? cur[0].id : "";
                          // Set/remove active class
                          menuItems
                            .removeClass("active-link")
                            .filter("[href=#"+id+"]").addClass("active-link");
                        } else {
                          $('.js-nav-fixed').removeClass('fixed');
                          $('.js-social-news').removeClass('padding-top');
                        }
                } else {
                        $('.js-nav-fixed').addClass('un-visible');
                        $('.js-nav-fixed').addClass('nav-shadow');
                }


        });

});