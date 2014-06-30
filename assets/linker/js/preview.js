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
        $(LOADER_SELECTOR).show();
        var url = $(this).attr(DATA_URL);
        var container = $(this).attr(CONTAINER_DIV);
        $("." + container).html("");
        var templateSelector = "[data-slider=" + $(this).attr(TEMPLATE_DATA) + "]";
        var itemsSelector = "." + $(this).attr(ITEMS_CLASS);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json'
        }).retry({times:3, timeout:3000}).then(function(data){
            console.log("done");
            fillContainer(data, container, templateSelector);
            $(document).trigger("slider-reload", {containerSelector: '.js-content-events', itemSelector: itemsSelector, itemsCount: 3});
        }).always( function() {
            $(LOADER_SELECTOR).hide();
        });
    };

    var fillContainer = function(data, container, templateSelector) {
        var templateSource = $(templateSelector).html();
        var template = Handlebars.compile(templateSource);
        $("." + container).html(template(data));
    };

    $(RELOAD_BUTTON).on("click", reload);
    $(RELOAD_BUTTON).trigger("click");
});