$(document).ready(function () {
    var RELOAD_BROADCAST = '.js-reload-broadcast';
    var DATA_URL = "data-url";
    var CONTAINER = ".js-wrap-broadcast";
    var DATA_NEWS_ID = "data-news-id";
    var LIKES_COUNTER = "js-news-likes";

    var reload = function(event) {
        var url = event.target.attributes[DATA_URL].value;
        var source   = $("#broadcast-template").html();
        var template = Handlebars.compile(source);
        $(CONTAINER).empty();
        $.get(url, 'json')
            .done(function(data){
                drawBroadcast({broadcast: data}, CONTAINER, template);
            })
            .fail(function(jqXHR, textStatus) {
                console.log("fail:" + textStatus);
            });
        return false;
    };

    var drawBroadcast = function(data, container, template) {
        var html = template(data);
        $(container).html(html);
    }

    var likeNews = function(event) {
        var id = event.target.attributes[DATA_NEWS_ID].value;
        var url = '/broadcast/' + id + '/like';
        $.post(url, 'json')
            .done(function(data){
                if (data.changed) {
                    $(event.target).find('js-counter').html(data.likes);
                }
            })
            .fail(function(jqXHR, textStatus) {
                console.log("fail:" + textStatus);
            });
        return false;
    }

    $(RELOAD_BROADCAST).on("click", reload);
    $(RELOAD_BROADCAST).trigger("click");
    $(document).on("click", LIKES_COUNTER, likeNews);


    $(document).on('click', '.js-news-more', function () {
      $(this).addClass('hide');
      $(this).parent().siblings('.js-news-full').removeClass('hide');
  });
  $(document).on('click', '.js-news-less', function () {
      $(this).parent().addClass('hide');
      $(this).parent().siblings('.js-news-summary').find('.js-news-more').removeClass('hide');
  });
});