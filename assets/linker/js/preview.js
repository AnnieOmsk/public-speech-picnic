/**
 * Preview (events) javascript
 */
$(function(){
    var RELOAD_BUTTON = ".js-reload-preview";
    var DATA_URL = "data-url";
    var CONTAINER_DIV = "data-container";
    var TEMPLATE_DATA = "data-template";
    var ITEMS_CLASS = "data-items";
    var LOADER_SELECTOR = ".js-loader[data-container='preview']";

    var reload = function(event) {
        event.preventDefault();
        $(document).find(LOADER_SELECTOR).show();
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
            console.log("done");
            fillContainer(data, container, templateSelector);
            $(document).trigger("slider-reload", {containerSelector: '.js-content-events', itemSelector: itemsSelector, itemsCount: 3});
        }).always( function() {
            $(document).find(LOADER_SELECTOR).hide();
        });
    };

    var fillContainer = function(data, container, templateSelector) {
        var templateSource = $(document).find(templateSelector).html();
        var template = Handlebars.compile(templateSource);
          $(document).find("." + container).html(template(data));
    };

    $(RELOAD_BUTTON).on("click", reload);
    $(document).find(RELOAD_BUTTON).trigger("click");
});