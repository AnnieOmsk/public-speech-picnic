var configuration = require('./Configuration');
var http = require('http');
var q = require('q');

/**
 * Fetching teasers from remote host
 */
exports.fetchTeasers = function() {
    var deferred = q.defer();
    var json = "";
    http.get(configuration.TEASERS_API_URL, function(res) {
        res.on('data', function (data){
            json = json + data;
        }).on('end', function () {
            deferred.resolve(json);
        });
    }).on('error', function(e) {
        console.log("TeaserService error: " + e.message);
        deferred.reject(e);
    });
    return deferred.promise;
};
