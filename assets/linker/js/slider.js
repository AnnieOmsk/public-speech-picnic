var LEFT_ARROW = ".js-arrow-left";
var RIGHT_ARROW = ".js-arrow-right";
var ELEMENT1 = ".social-container";


$(function(){
    var scrollLeft = function(event) {

    };

    var scrollRight = function(event) {

    };

    var init = function() {
        console.log("init");
//        $(document).find()
    };

    $(document).on("click", LEFT_ARROW, scrollLeft);
    $(document).on("click", RIGHT_ARROW, scrollRight);
    init();
});
