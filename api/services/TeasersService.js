var http = require('http');
var dateTime = require('./DateTimeUtils');

/**
 * Parsing teasers json
 * @param json Json with teasers
 * @returns {{events: Array, articles: Array}}
 */
var parseTeasers = function(json) {
    var teasers = JSON.parse(json);
    var events = [];
    var articles = [];
    for (var i=0; i < teasers.length; i++) {
        var item = teasers[i];
        if (item.entity == 'event') {
            item.start = dateTime.dateMonthTime(item.start);
            if (item.end != null) {
                item.end = dateTime.dateMonthTime(item.end);
            }
            events.push(item);
        }
        if (item.entity == 'article') {
            item.published = dateTime.dateMonthYear(item.published);
            articles.push(item);
        }

    }
    return {
        events: events,
        articles: articles
    };
};

/**
 * Fetching teasers from remote host
 * @param func Function to call with parsed teasers object
 */
exports.fetchTeasers = function(func) {
    var json = "";
    http.get("http://ps.whereco.in/api/teasers", function(res) {
        res.on('data', function (data){
            json = json + data;
        }).on('end', function () {
            func(parseTeasers(json));
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
};
