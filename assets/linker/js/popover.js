$(document).ready(function() {
  $(function(){
    var lastPopup = null;
      $('.js-what-is-it').popover({
          content: 'Это первый городской праздник организованный горожанами, без администраций, организаций и корпораций. ' +
              'Это живой концерт лучших омских групп, десятки выставок и перфомансов, игры, лекции и кино под открытым небом. ' +
              'И все это омичи делают сами для себя.',
          template: '<div id="hbs" class="popover " role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
          placement: 'top',
          animation: true
          // 
      });
      $(document).on('click', '.popover', function() {
        $('.js-what-is-it').popover('hide');
      });
      $(document).on('touchstart', '.popover', function() {
        $('.js-what-is-it').popover('hide');
      });

      $(document).on('touchstart', '.timeline-popover', function() {
        var data = $(this).attr('data-bubble');
        $('[data-bubble='+data).popover('show');
        console.log('sucseess');
      });
      $(document).on('touchstart', '.timeline-popover', function() {
        if (this === lastPopup) {
          var data = $(this).attr('data-bubble');
          $('[data-bubble='+data).popover('hide');
          lastPopup=null;
        } else {
        lastPopup = this;
        var data = $(this).attr('data-bubble');
        $('[data-bubble='+data).popover('show');
        console.log('sucseess');
      }
      });
  });
});