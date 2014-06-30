$(function(){
    var LEFT_ARROW = ".js-arrow-left";
    var RIGHT_ARROW = ".js-arrow-right";
    var CONTAINER_DIV = "data-container";
    var ITEMS_CLASS = "data-items";
    var SHOWED_CLASS = "js-active";
    var TRANSITION_CLASS = "js-animating";
    var ANIMATION_TIME = 200;
    var STEPS = 25;

    var scrollLeft = function(event) {
        var containerSelector = "." + event.target.attributes[CONTAINER_DIV].value;
        var itemsSelector = "." + event.target.attributes[ITEMS_CLASS].value;
        scroll(true, containerSelector, itemsSelector);
    };

    var scrollRight = function(event) {
        var containerSelector = "." + event.target.attributes[CONTAINER_DIV].value;
        var itemsSelector = "." + event.target.attributes[ITEMS_CLASS].value;
        scroll(false, containerSelector, itemsSelector);
    };

    var scroll = function(left, containerSelector, itemsSelector) {
        var items = $(document).find(containerSelector).find(itemsSelector);
        var firstFind = false;
        var activeOver = false;
        var first = {};
        var last = {};
        // Variables that are different for left and right scrolling
        var start;
        var end;
        var increment;
        var test;
        // Setting up them depending on left or right scrolling
        if (!left) {
            start = 0;
            end = items.length;
            increment = 1;
            test = function (i, end) {
                return i<end;
            }
        } else {
            start = items.length;
            end = 0;
            increment = -1;
            test = function (i, end) {
                return i>=end;
            }
        }

        i = start;
        while (test(i, end)) {
            var currentItem = items.eq(i);
            if (currentItem.hasClass(SHOWED_CLASS)) {
                if (!firstFind) {
                    firstFind = true;
                    first = items.eq(i);
                }
            }
            if (firstFind && !currentItem.hasClass(SHOWED_CLASS) && !activeOver) {
                activeOver = true;
                last = items.eq(i);
                i = end;
            }
            if (currentItem.hasClass(TRANSITION_CLASS)) {
                activeOver = false;
                i = end;
            }
            i+=increment;
        }

        if (activeOver) {
            for (var i=STEPS-1; i>=0; i--) {
                animate(i, last, first, left);
            }
        }
    };

    var animate = function(i, last, first, left) {
        var lastMargin;
        var firstMargin;
        if (left) {
            lastMargin = "margin-left";
            firstMargin = "margin-right";
        } else {
            lastMargin = "margin-right";
            firstMargin = "margin-left";
        }
        var initialDelay = ANIMATION_TIME/STEPS;
        var delayStep = initialDelay/STEPS;
        var j = STEPS - i;
        var delay = initialDelay*(j+1) + delayStep*j*(j+1)/2;
        var ITEM_WIDTH = first.css('width').match(/[0-9]*/)[0];
        setTimeout(function() {
            if (i==(STEPS - 1)) {
                if (last.find("img[src='']")[0] != null) {
                    last.find("img[src='']")[0].attributes["src"].value =
                        last.find("img[src='']")[0].attributes["data-src"].value;
                }
                last.show();
                last.addClass(SHOWED_CLASS);
                last.addClass(TRANSITION_CLASS);
                first.addClass(TRANSITION_CLASS);
            }
            if (i!=0) {
                var pixelOffset = Math.round(i*ITEM_WIDTH/STEPS);
                last.css(lastMargin, "-" + pixelOffset + "px");
                first.css(firstMargin, "-" + (ITEM_WIDTH-pixelOffset) + "px");
            }
            if (i==0) {
                last.css(lastMargin, "");
                first.css(firstMargin, "");
                first.hide();
                first.removeClass(SHOWED_CLASS);
                first.removeClass(TRANSITION_CLASS);
                last.removeClass(TRANSITION_CLASS);
            }
        }, delay);
    };

    var init = function(containerSelector, itemSelector, itemsCount) {
        console.log("init");
        var items = $(document).find(containerSelector).find(itemSelector);
        for (i=0; i<itemsCount; i++) {
            var currentItem = items.eq(i);
            if (currentItem.find("img[src='']")[0] != null) {
                currentItem.find("img[src='']")[0].attributes['src'].value =
                    currentItem.find("img[src='']")[0].attributes['data-src'].value;
            }
            currentItem.show();
            currentItem.addClass(SHOWED_CLASS);
        }
    };

    var reload = function(event, data) {
        init(data.containerSelector, data.itemSelector, data.itemsCount);
    };

    $(document).on("click", LEFT_ARROW, scrollLeft);
    $(document).on("click", RIGHT_ARROW, scrollRight);
    $(document).on("slider-reload", reload);
});
