var LEFT_ARROW = ".js-arrow-left";
var RIGHT_ARROW = ".js-arrow-right";
var ELEMENTS = ".social-container";
var ITEMS = ".js-instagram-item";
var SHOWED_CLASS = "active";
var ITEMS_TO_SHOW = 4;


$(function(){
    var scrollLeft = function(event) {
        var items = $(document).find(ELEMENTS).find(ITEMS);
        var firstFind = false;
        var activeOver = false;
        var first = {};
        for (i=items.length; i>0; i--) {
            if (items.eq(i).hasClass(SHOWED_CLASS)) {
                if (!firstFind) {
                    firstFind = true;
                    first = items.eq(i);
                }
            }
            if (firstFind && !items.eq(i).hasClass(SHOWED_CLASS) && !activeOver) {
                activeOver = true;
                items.eq(i).show();
                items.eq(i).addClass(SHOWED_CLASS);
                i = 0;
            }
        }
        if (activeOver) {
            first.hide();
            first.removeClass(SHOWED_CLASS);
        }
    };

    var scrollRight = function(event) {
        var items = $(document).find(ELEMENTS).find(ITEMS);
        var firstFind = false;
        var activeOver = false;
        var first = {};
        for (i=0; i<items.length; i++) {
            if (items.eq(i).hasClass(SHOWED_CLASS)) {
                if (!firstFind) {
                    firstFind = true;
                    first = items.eq(i);
                }
            }
            if (firstFind && !items.eq(i).hasClass(SHOWED_CLASS) && !activeOver) {
                activeOver = true;
                items.eq(i).show();
                items.eq(i).addClass(SHOWED_CLASS);
                i = items.length;
            }
        }
        if (activeOver) {
            first.hide();
            first.removeClass(SHOWED_CLASS);
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
