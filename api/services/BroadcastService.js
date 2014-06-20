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

/**
 * Creates and saves Broadcast with following parameters
 * @param journalistId     Journalist id
 * @param lead             Lead
 * @param content          Content
 * @returns created broadcast
 */
exports.save = function(journalistId, lead, content) {
    var deferred = q.defer();
    console.log("Saving broadcast with following params. JournalistId:" + journalistId + " lead:" + lead + " content:" + content);
    Broadcast.create({
        time: new Date(),
        journalistId: journalistId,
        content: content,
        lead: lead
    }).done(function(err, broadcast) {
        if (err) {
            console.log("BroadcastService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(broadcast);
        }
    });
    return deferred.promise;
};