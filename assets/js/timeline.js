/**
 * Timeline javascript
 */
$(function(){
    var DATA_SELECTOR = ".js-timeline-data";
    var DATA_URL = "data-url";
    var CONTAINER_DIV = "data-container";
    var HIDE_CONTAINER_DIV = "data-hide-container";
    var LOADER_SELECTOR = ".js-loader[data-container='timeline']";
    var LEFT_ARROW_SELECTOR = ".js-timeline-left";
    var RIGHT_ARROW_SELECTOR = ".js-timeline-right";
    var timeline;

    var load = function() {
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
            drawTimeline(data, containerSelector);
        }).always( function() {
            $(document).find(LOADER_SELECTOR).hide();
        });
    };

    var drawTimeline = function(data, containerSelector) {
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
        var height = groups.length*110+60;
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
            showMajorLabels: true,
            height: height
        };
        timeline.setGroups(groups);
        timeline.setItems(items);
        timeline.setOptions(options);
    };

    var toOld = function(event) {
        var oldContainerSelector = "." + $(this).attr(CONTAINER_DIV);
        var newContainerSelector = "." + $(this).attr(HIDE_CONTAINER_DIV);
        $(newContainerSelector).animate({
            opacity: 0,
            marginLeft: "-=50px"
        }, 500, function() {
            $(newContainerSelector).hide();
            $(newContainerSelector).css({ marginLeft: "" });
            $(oldContainerSelector).css({ opacity: 0 });
            $(oldContainerSelector).css({ marginLeft: "-50px" });
            $(oldContainerSelector).show();
            $(oldContainerSelector).animate({
                opacity: 1,
                marginLeft: "+=50px"
            }, 500)
        });
        $(oldContainerSelector).css({ marginLeft: "" });
        $(this).hide();
        $(RIGHT_ARROW_SELECTOR).show();
    };

    var toNew = function(event) {
        var newContainerSelector = "." + $(this).attr(CONTAINER_DIV);
        var oldContainerSelector = "." + $(this).attr(HIDE_CONTAINER_DIV);
        $(oldContainerSelector).animate({
            opacity: 0,
            marginLeft: "+=50px"
        }, 500, function() {
            $(oldContainerSelector).hide();
            $(oldContainerSelector).css({ marginRight: "" });
            $(newContainerSelector).css({ opacity: 0 });
            $(newContainerSelector).css({ marginRight: "50px" });
            $(newContainerSelector).show();
            $(newContainerSelector).animate({
                opacity: 1,
                marginRight: "-=50px"
            }, 500)
        });
        $(newContainerSelector).css({ marginRight: "" });
        $(this).hide();
        $(LEFT_ARROW_SELECTOR).show();
    };

    load();
    $(LEFT_ARROW_SELECTOR).on("click", toOld);
    $(RIGHT_ARROW_SELECTOR).on("click", toNew);
});