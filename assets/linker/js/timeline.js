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
        var timelines = [];
        for (var i = 0; i < data.timelines.length; i++) {
            var currentTimeline = data.timelines[i];
            timelines.push({
                start: new Date(currentTimeline.start),
                end: new Date(currentTimeline.end),
                content: currentTimeline.content,
                id: currentTimeline.id,
                group: currentTimeline.group
            });
        }
        var items = new vis.DataSet(timelines);
        var groups = [];
        for (var i = 0; i < data.zones.length; i++) {
            var currentZone = data.zones[i];
            groups.push({
               id: currentZone.id,
               content: currentZone.name
            });
        }
        if (timeline == null) {
            var container = $(document).find(containerSelector)[0];
            timeline = new vis.Timeline(container);
        } else {
            timeline.clear();
        }
        var options = {
            autoResize: false,
            min: '2014-07-01 00:00:00',
            start: '2014-07-01 12:00:00',
            max: '2014-07-06 00:00:00',
            zoomable: false,
            selectable: false,
            stack: false,
            zoomMin: 10000000,
            zoomMax: 10000000,
            height: 600
        };
        timeline.setOptions(options);
        timeline.setGroups(groups);
        timeline.setItems(items);

    };

    $(RELOAD_BUTTON).on("click", reload);
    $(document).find(RELOAD_BUTTON).trigger("click");
});