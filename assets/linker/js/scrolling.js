//this is where we apply opacity to the arrow
$(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multiply by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 0.5;
  
  //get height of window
  var windowHeight = $(window).height();
      
});

$(document).ready(function(){
   $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 2000);
      e.preventDefault();
   });
   return false;
});

// jQuery(function ($) {
//     var $doc = $('.js-scrolling-container'),
//         ratio = $('.js-scrolling-container').width() / $('.js-table-2').width()*6, //отношение окна к общей ширене блока, чтобы тянуть весь блок.
//         mousepos, to;
//     $doc.on('mousedown', '.js-scrolling-container', dragstart);

//     function dragstart(e) {
//         e.preventDefault();
//         mousepos = e.screenX;
//         $doc.on('mousemove.drag', drag);
//         $doc.on('mouseup.drag mouseout.drag', dragstop);
//     }

//     function drag(e) {
//         clearTimeout(to);
//         var delta = (e.screenX - mousepos) * ratio;
//         to = setTimeout(function () { // таймаут чтобы события от мыши не перекрывали друг друга, 
//             $('.js-scrolling-container').scroLeft($('.js-scrolling-container').scrollLeft() - delta);
//             mousepos = e.screenx;
//         }, 0);
//     }

//     function dragstop(e) {
//         $doc.off('mousemove.drag mouseup.drag mouseout.drag');
//     }
// });

$(document).ready(function () {
  $('.js-scrolling-container').mousedown(function (event) {
  $(this)
    .data('down', true)
    .data('x', event.clientX)
    .data('scrollLeft', this.scrollLeft);
    return false;})
      .mouseup(function (event) {
        $(this).data('down', false);})
          .hover(function() {}, function() {
            $(this).data('down', false);
        }).mousemove(function (event) {
          if ($(this).data('down') == true) {
            this.scrollLeft = $(this).data('scrollLeft') + $(this).data('x') - event.clientX;
          }
        })
});

$(window).mouseout(function (event) {
  if ($('.js-scrolling-container').data('down')) {
    try {
    if (event.originalTarget.nodeName == 'BODY' || event.originalTarget.nodeName == 'HTML') {
      $('.js-scrolling-container').data('down', false);
      }
    } catch (e) {}
  }
});