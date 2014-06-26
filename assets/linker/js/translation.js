$(document).ready(function () {
  $(document).on('click', '.js-news-more', function () {
      $(this).addClass('hide');
      $(this).parent().siblings('.js-news-full').removeClass('hide');
  });
  $(document).on('click', '.js-news-less', function () {
      $(this).parent().addClass('hide');
      $(this).parent().siblings('.js-news-summary').find('.js-news-more').removeClass('hide');
  });
});