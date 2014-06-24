var LEFT_ARROW = ".js-arrow-left";
var RIGHT_ARROW = ".js-arrow-right";
var ELEMENTS = ".social-container";
var ITEMS = ".js-instagram-item";
var SHOWED_CLASS = "active";
var ITEMS_TO_SHOW = 4;
var ITEM_WIDTH_IN_PERCENTS = 24;
var ANIMATION_TIME = 250;


$(function(){
    var scrollLeft = function(event) {
        var items = $(document).find(ELEMENTS).find(ITEMS);
        var firstFind = false;
        var activeOver = false;
        var first = {};
        var last = {};
        for (i=items.length; i>0; i--) {
            if (items.eq(i).hasClass(SHOWED_CLASS)) {
                if (!firstFind) {
                    firstFind = true;
                    first = items.eq(i);
                }
            }
            if (firstFind && !items.eq(i).hasClass(SHOWED_CLASS) && !activeOver) {
                activeOver = true;
                last = items.eq(i);
                i = 0;
            }
        }
        if (activeOver) {
            last.css("margin-left", "-" + ITEM_WIDTH_IN_PERCENTS + "%");
            last.show();
            last.addClass(SHOWED_CLASS);
            for (var i=ITEM_WIDTH_IN_PERCENTS-1; i>=0; i--) {
                animate(i, last, first, true);
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
        var initialDelay = ANIMATION_TIME/ITEM_WIDTH_IN_PERCENTS;
        var delayStep = initialDelay/ITEM_WIDTH_IN_PERCENTS;
        var j = ITEM_WIDTH_IN_PERCENTS - i;
        var delay = initialDelay*(j+1) + delayStep*j*(j+1)/2;
        setTimeout(function() {
            if (i!=0) {
                last.css(lastMargin, "-" + i + "%");
                first.css(firstMargin, "-" + (ITEM_WIDTH_IN_PERCENTS-i) + "%");
            }
            if (i==0) {
                last.css(lastMargin, "");
                first.css(firstMargin, "");
                first.hide();
                first.removeClass(SHOWED_CLASS);
            }
        }, delay);
    };

    var scrollRight = function(event) {
        var items = $(document).find(ELEMENTS).find(ITEMS);
        var firstFind = false;
        var activeOver = false;
        var first = {};
        var last = {};
        for (i=0; i<items.length; i++) {
            if (items.eq(i).hasClass(SHOWED_CLASS)) {
                if (!firstFind) {
                    firstFind = true;
                    first = items.eq(i);
                }
            }
            if (firstFind && !items.eq(i).hasClass(SHOWED_CLASS) && !activeOver) {
                activeOver = true;
                last = items.eq(i);
                i = items.length;
            }
        }
        if (activeOver) {
            last.css("margin-right", "-" + ITEM_WIDTH_IN_PERCENTS + "%");
            last.show();
            last.addClass(SHOWED_CLASS);
            for (var i=ITEM_WIDTH_IN_PERCENTS-1; i>=0; i--) {
                animate(i, last, first, false);
            }
        }
    };

    var init = function() {
        console.log("init");
        var items = $(document).find(ELEMENTS).find(ITEMS);
        for (i=0; i<items.length; i++) {
            if (i<ITEMS_TO_SHOW) {
                items.eq(i).show();
                items.eq(i).addClass(SHOWED_CLASS);
            }
        }
    };

    $(document).on("click", LEFT_ARROW, scrollLeft);
    $(document).on("click", RIGHT_ARROW, scrollRight);
    init();
});
