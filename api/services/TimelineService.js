var q = require('q');

/**
 * Finds all timelines in database
 */
exports.findTimelines = function() {
    var deferred = q.defer();
    console.log("Searching for timelines");
    Timeline.find({}).sort("start ASC").done(function(err, timelines){
        if (err) {
            console.log("TimelineService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(timelines);
        }
    });
    return deferred.promise;
};
