/**
 * Preview (events) javascript
 */
$(function(){
    var RELOAD_BUTTON = ".js-reload-timeline";
    var DATA_URL = "data-url";
    var CONTAINER_DIV = "data-container";
    var LOADER_SELECTOR = ".js-loader[data-container='timeline']";
    var timeline;

    var reload = function(event) {
        event.preventDefault();
        $(document).find(LOADER_SELECTOR).show();
        var url = event.target.attributes[DATA_URL].value;
        var containerSelector = "." + event.target.attributes[CONTAINER_DIV].value;
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json'
        }).done(function(data) {
            console.log("done");
            reloadTimeline(data, containerSelector);
        }).fail(function(jqXHR, textStatus){
            console.log("fail:" + textStatus);
        }).always( function() {
            $(document).find(LOADER_SELECTOR).hide();
        });
    };

    var reloadTimeline = function(data, containerSelector) {
        var compiledData = [];
        for (var i = 0; i < data.length; i++) {
            compiledData.push({
                start: new Date(data[i].start),
                end: new Date(data[i].end),
                content: data[i].content,
                id: data[i].id
            });
        }
        var items = new vis.DataSet(compiledData);
        if (timeline == null) {
            var container = $(document).find(containerSelector)[0];
            $(container).html("");
            var options = {
                autoResize: false,
                start: '2014-07-01 12:00:00',
                zoomable: false,
                zoomMin: 10000000,
                zoomMax: 10000000
            };

            // Create a Timeline
            timeline = new vis.Timeline(container, items, options);
        } else {
            timeline.setItems(items);
        }

    };

    $(RELOAD_BUTTON).on("click", reload);
    $(document).find(RELOAD_BUTTON).trigger("click");
});