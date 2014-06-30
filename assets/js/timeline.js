/**
 * Timeline javascript
 */
$(function(){
    var DATA_SELECTOR = ".js-timeline-data";
    var DATA_URL = "data-url";
    var CONTAINER_DIV = "data-container";
    var LOADER_SELECTOR = ".js-loader[data-container='timeline']";
    var timeline;

    var reload = function() {
        var element = $(document).find(DATA_SELECTOR)[0];
        $(document).find(LOADER_SELECTOR).show();
        var url = element.attributes[DATA_URL].value;
        var containerSelector = "." + element.attributes[CONTAINER_DIV].value;
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json'
        }).retry({times:3, timeout:3000}).then(function(data){
            console.log("done");
            reloadTimeline(data, containerSelector);
        }).always( function() {
            $(document).find(LOADER_SELECTOR).hide();
        });
    };

    var reloadTimeline = function(data, containerSelector) {
        var timelines = [];
        var start = new Date(data.timelines[0].start);
        var current = new Date();
        if (start == null || current > start) {
            start = current;
        }
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
            var name = "<span class=''></span>" + currentZone.name;
            groups.push({
               id: currentZone.id,
               content: name
            });
        }
        if (timeline == null) {
            var container = $(document).find(containerSelector)[0];
            timeline = new vis.Timeline(container);
        } else {
            timeline.clear();
        }
        var min = new Date(new Date(start).setDate(start.getDate()-2)).setMinutes(start.getMinutes() + 45);
        var max = new Date(new Date(start).setDate(start.getDate()+2)).setMinutes(start.getMinutes() + 45);
        var options = {
            autoResize: false,
            start: min,
            end: max,
            zoomable: false,
            selectable: false,
            stack: false,
            zoomMin: 7000000,
            zoomMax: 7000000,
            orientation: 'top',
            showCurrentTime: true,
            showMajorLabels: false,
            height: 610
        };
        timeline.setGroups(groups);
        timeline.setItems(items);
        timeline.setOptions(options);
    };

    reload();
});