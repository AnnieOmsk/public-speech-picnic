$(document).ready(function () {
    var RELOAD_BROADCAST = '.js-reload-broadcast';
    var CONTAINER = ".js-wrap-broadcast";
    var DATA_NEWS_ID = "data-news-id";
    var LIKES = ".js-likes-wrap";
    var LIKES_HEART = ".js-news-likes";
    var LIKES_COUNTER = ".js-counter";
    var DATA_FROM = "data-from";
    var BROADCAST_URL = "/broadcast";

    var reload = function(url, from) {
        var params = {};
        if (from != undefined) {
            params.from = from;
        }
        var source = $("#broadcast-template").html();
        var template = Handlebars.compile(source);
        $.get(url, params, 'json')
            .retry({times:3, timeout:3000}).then(function(data){
                $(CONTAINER).empty();
                drawBroadcast({broadcasts: data.broadcasts, next: data.next}, CONTAINER, template);
            })
            .fail(function(jqXHR, textStatus) {
                console.log("fail:" + textStatus);
            });
    };

    var drawBroadcast = function(data, container, template) {
        var html = template(data);
        $(container).html(html);
    };

    var likeNews = function(event) {
        var id = event.target.attributes[DATA_NEWS_ID].value;
        var clicked = $(event.target);
        clicked.addClass('like-active');
        var url = '/broadcast/' + id + '/like';
        $.post(url, 'json')
            .done(function(data){
                if (data.changed) {
                    $(event.target).parents(LIKES).find(LIKES_COUNTER).html(data.likes);
                }
            })
            .fail(function(jqXHR, textStatus) {
                console.log("fail:" + textStatus);
            })
            .always(function() {
                setTimeout(function() {
                    clicked.removeClass('like-active')
                }, 300);
            });
        return false;
    };

    $(RELOAD_BROADCAST).on("click", function(event) {
        var broadcastElem = $(CONTAINER);
        var from = broadcastElem.attr(DATA_FROM);
        broadcastElem.removeAttr(DATA_FROM);
        reload(BROADCAST_URL, from);
        return false;
    });
    $(RELOAD_BROADCAST).trigger("click");
    $(document).on("click", LIKES_HEART, likeNews);


    $(document).on('click', '.js-news-more', function () {
      $(this).hide('300');
      $(this).parent().siblings('.js-news-full').addClass('showed');
      $(this).parent().siblings('.js-news-full').animate({opacity: 1},1500);

  });
  $(document).on('click', '.js-news-less', function () {
      
      $(this).parent().siblings('.js-news-summary').find('.js-news-more').show('300');
      $(this).parent().animate({opacity: 0},100);
      $(this).parent().hide(200);
      $(this).parent().removeClass('showed');

  });
});