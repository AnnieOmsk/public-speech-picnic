/**
 * Social(instagram + twitter) javascript
 */
$(function(){
    var RELOAD_BUTTON = ".js-reload-social";
    var DATA_URL = "data-url";
    var CONTAINER_DIV = "data-container";
    var TEMPLATE_DATA = "data-template";
    var ITEMS_CLASS = "data-items";
    var INSTAGRAM_BUTTON = ".js-toggle-instagram";
    var TWITTER_BUTTON = ".js-toggle-twitter";
    var ARROWS_CLASS = ".js-arrow-social";
    var OFFICIAL_CLASS = ".js-social-official";
    var INSTAGRAM_OFFICIAL_LINK = "http://instagram.com/picnicomsk";
    var TWITTER_OFFICIAL_LINK = "https://twitter.com/picnicomsk";
    var ITEMS_COUNT_REPSONSIVE = [{
        start: 0,
        end:540,
        count: 1
    },{
        start: 541,
        end: 1000,
        count: 2
    }, {
        start: 1001,
        end: 1200,
        count: 3
    }, {
        start: 1201,
        end: 9999,
        count: 4
    }];

    var reload = function(event) {
        event.preventDefault();
        $(document).find(".js-loader[data-container='social']").show();
        var url = event.target.attributes[DATA_URL].value;
        var container = event.target.attributes[CONTAINER_DIV].value;
        $(document).find("." + container).html("");
        var templateSelector = "[data-slider=" + event.target.attributes[TEMPLATE_DATA].value + "]";
        var itemsSelector = "." + event.target.attributes[ITEMS_CLASS].value;

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json'
        }).retry({times:3, timeout:3000}).then(function(data){
            console.log("done social");
            fillContainer(data, container, templateSelector);
            var itemsCount = 4;
            for (var i=0; i<ITEMS_COUNT_REPSONSIVE.length; i++) {
                var currentSet = ITEMS_COUNT_REPSONSIVE[i];
                var width = $(window).width();
                if (width >= currentSet.start && width <= currentSet.end) {
                    itemsCount = currentSet.count;
                }
            }
            $(document).trigger("slider-reload", {containerSelector: '.js-social-container', itemSelector: itemsSelector, itemsCount:itemsCount});
        }).always(function(){
            $(document).find(".js-loader[data-container='social']").hide();
        });
    };

    var fillContainer = function(data, container, templateSelector) {
        var templateSource = $(document).find(templateSelector).html();
        var template = Handlebars.compile(templateSource);
        // NOTICE: never do such things
        if (data[0].retweetsCount != null) {
            var tweetsByTwo = [];
            for(var i=0;i<data.length/2;i++) {
                tweetsByTwo.push({first: data[i*2], second: data[i*2+1]});
            }
            data = tweetsByTwo;
        }
        $(document).find("." + container).html(template(data));
    };

    var toggleInstagram = function(event) {
        event.preventDefault();
        var $reloadButton = $(RELOAD_BUTTON);
        if ($reloadButton.attr(CONTAINER_DIV) != 'js-content-instagram') {
            $reloadButton.attr(CONTAINER_DIV, 'js-content-instagram');
            $reloadButton.attr(DATA_URL, 'instagram-list');
            $reloadButton.attr(TEMPLATE_DATA, 'instagram');
            $reloadButton.attr(ITEMS_CLASS, 'js-instagram-item');
            var $socialArrows = $(ARROWS_CLASS);
            for(var i=0; i<$socialArrows.length; i++) {
                $socialArrows.eq(i).attr(CONTAINER_DIV, 'js-content-instagram');
                $socialArrows.eq(i).attr(ITEMS_CLASS, 'js-instagram-item');
            }
            $('.js-content-twitter').hide();
            $('.js-content-instagram').show();
            $('.social-btn').removeClass('social-btn-active');
            $(event.target).addClass('social-btn-active');
            $(OFFICIAL_CLASS).attr('href', INSTAGRAM_OFFICIAL_LINK);
            $(RELOAD_BUTTON).trigger("click");
        }
    };

    var toggleTwitter = function(event) {
        event.preventDefault();
        var $reloadButton = $(RELOAD_BUTTON);
        if ($reloadButton.attr(CONTAINER_DIV) != 'js-content-twitter') {
            $reloadButton.attr(CONTAINER_DIV, 'js-content-twitter');
            $reloadButton.attr(DATA_URL, 'twitter-list');
            $reloadButton.attr(TEMPLATE_DATA, 'twitter');
            $reloadButton.attr(ITEMS_CLASS, 'js-twitter-item');
            var $socialArrows = $(ARROWS_CLASS);
            for(var i=0; i<$socialArrows.length; i++) {
                $socialArrows.eq(i).attr(CONTAINER_DIV, 'js-content-twitter');
                $socialArrows.eq(i).attr(ITEMS_CLASS, 'js-twitter-item');
            }
            $('.js-content-instagram').hide();
            $('.js-content-twitter').show();
            $('.social-btn').removeClass('social-btn-active');
            $(event.target).addClass('social-btn-active');
            $(OFFICIAL_CLASS).attr('href', TWITTER_OFFICIAL_LINK);
            $(RELOAD_BUTTON).trigger("click");
        }
    };

    $(document).on("click", RELOAD_BUTTON, reload);
    $(document).on("click", INSTAGRAM_BUTTON, toggleInstagram);
    $(document).on("click", TWITTER_BUTTON, toggleTwitter);
    $(RELOAD_BUTTON).trigger("click");
});