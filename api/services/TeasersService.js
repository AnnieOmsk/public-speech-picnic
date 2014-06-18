var http = require('http');

exports.fetchTeasers = function(callback) {
    http.get("http://ps.whereco.in/api/teasers", function(res) {
        res.on('data', callback);
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
}