/**
 * Finds all broadcasts in database
 */
var q = require('q');
exports.findBroadcasts = function() {
    var deferred = q.defer();
    console.log("Searching for broadcasts");
    Broadcast.find({}).sort("time ASC").done(function(err, broadcasts){
        if (err) {
            console.log("BroadcastService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(broadcasts);
        }
    });
    return deferred.promise;
};