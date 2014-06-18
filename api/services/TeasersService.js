var http = require('http');

var parseTeasers = function(json) {
    var teasers = JSON.parse(json);
    var events = [];
    var articles = [];
    for (var i=0; i < teasers.length; i++) {
        var item = teasers[i];
        if (item.entity == 'event') {
            events.push(item);
        }
        if (item.entity == 'article') {
            articles.push(item);
        }

    }
    return {
        events: events,
        articles: articles
    };
};

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
