var q = require('q');

/**
 * Finds all organizers in database
 */
exports.findOrganizers = function() {
    var deferred = q.defer();
    console.log("Searching for organizers");
    Organizer.find({}).done(function(err, organizers){
        if (err) {
            console.log("OrganizerService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(organizers);
        }
    });
    return deferred.promise;
};
