var q = require('q');

/**
 * Finds all zones in database
 */
exports.findZones = function() {
    var deferred = q.defer();
    console.log("Searching for zones");
    Zone.find({}).sort("id ASC").done(function(err, zones){
        if (err) {
            console.log("ZoneService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(zones);
        }
    });
    return deferred.promise;
};
