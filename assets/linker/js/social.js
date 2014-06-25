/**
 * Social(instagram + twitter) javascript
 */
var RELOAD_BUTTON = ".js-reload";
var DATA_URL = "data-url";
var CONTAINER_DIV = "data-container";
var TEMPLATE_DATA = "data-template";

$(function(){

    var reload = function(event) {
        event.preventDefault();
        var url = event.target.attributes[DATA_URL].value;
        var container = event.target.attributes[CONTAINER_DIV].value;
        var templateSelector = "[data-slider=" + event.target.attributes[TEMPLATE_DATA].value + "]";
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json'
        }).done(function(data) {
            console.log("done");
            fillContainer(data, container, templateSelector);
            $(document).trigger("slider-reload");
        }).fail(function(jqXHR, textStatus){
            console.log("fail:" + textStatus);
        });
    };

    var fillContainer = function(data, container, templateSelector) {
        var templateSource = $(document).find(templateSelector).html();
        var template = Handlebars.compile(templateSource);
        $(document).find("." + container).html(template(data));
    };

    $(document).on("click", RELOAD_BUTTON, reload);
    $(document).find(RELOAD_BUTTON).trigger("click");
});