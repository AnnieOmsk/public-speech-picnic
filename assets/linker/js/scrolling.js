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
//     var $doc = $(document),
//         ratio = $doc.height() / $(window).height()*1, //отношение окна к общей ширене блока, чтобы тянуть весь блок.
//         mousepos, to;
//     $doc.on('mousedown', '.js-content-timeline', dragstart);

//     function dragstart(e) {
//         e.preventDefault();
//         mousepos = e.screenY;
//         $doc.on('mousemove.drag', drag);
//         $doc.on('mouseup.drag mouseout.drag', dragstop);
//     }

//     function drag(e) {
//         clearTimeout(to);
//         var delta = (e.screenY - mousepos) * ratio;
//         to = setTimeout(function () { // таймаут чтобы события от мыши не перекрывали друг друга, 
//             $doc.scrollTop($doc.scrollTop() - delta);
//             mousepos = e.screenY;
//         }, 0);
//     }

//     function dragstop(e) {
//         $doc.off('mousemove.drag mouseup.drag mouseout.drag');
//     }
// });