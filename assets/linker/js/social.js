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
        }).done(function(data) {
            console.log("done");
            fillContainer(data, container, templateSelector);
            $(document).trigger("slider-reload", {containerSelector: '.js-social-container', itemSelector: itemsSelector, itemsCount:4});
        }).fail(function(jqXHR, textStatus){
            console.log("fail:" + textStatus);
        }).always( function() {
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
        var reloadButton = $(document).find(RELOAD_BUTTON)[0];
        if (reloadButton.attributes[CONTAINER_DIV].value != 'js-content-instagram') {
            reloadButton.attributes[CONTAINER_DIV].value = 'js-content-instagram';
            reloadButton.attributes[DATA_URL].value = 'instagram-list';
            reloadButton.attributes[TEMPLATE_DATA].value  = 'instagram';
            reloadButton.attributes[ITEMS_CLASS].value  = 'js-instagram-item';
            var socialArrows = $(document).find(ARROWS_CLASS);
            for(var i=0; i<socialArrows.length; i++) {
                socialArrows[i].attributes[CONTAINER_DIV].value = 'js-content-instagram';
                socialArrows[i].attributes[ITEMS_CLASS].value  = 'js-instagram-item';
            }
            $(document).find('.js-content-twitter').hide();
            $(document).find('.js-content-instagram').show();
            $(document).find('.social-btn').removeClass('social-btn-active');
            $(event.target).addClass('social-btn-active');
            $(document).find(RELOAD_BUTTON).trigger("click");
        }
    };

    var toggleTwitter = function(event) {
        event.preventDefault();
        var reloadButton = $(document).find(RELOAD_BUTTON)[0];
        if (reloadButton.attributes[CONTAINER_DIV].value != 'js-content-twitter') {
            reloadButton.attributes[CONTAINER_DIV].value = 'js-content-twitter';
            reloadButton.attributes[DATA_URL].value = 'twitter-list';
            reloadButton.attributes[TEMPLATE_DATA].value  = 'twitter';
            reloadButton.attributes[ITEMS_CLASS].value  = 'js-twitter-item';
            var socialArrows = $(document).find(ARROWS_CLASS);
            for(var i=0; i<socialArrows.length; i++) {
                socialArrows[i].attributes[CONTAINER_DIV].value = 'js-content-twitter';
                socialArrows[i].attributes[ITEMS_CLASS].value = 'js-twitter-item';
            }
            $(document).find('.js-content-instagram').hide();
            $(document).find('.js-content-twitter').show();
            $(document).find('.social-btn').removeClass('social-btn-active');
            $(event.target).addClass('social-btn-active');
            $(document).find(RELOAD_BUTTON).trigger("click");
        }
    };

    $(document).on("click", RELOAD_BUTTON, reload);
    $(document).on("click", INSTAGRAM_BUTTON, toggleInstagram);
    $(document).on("click", TWITTER_BUTTON, toggleTwitter);
    $(document).find(RELOAD_BUTTON).trigger("click");
});