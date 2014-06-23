var q = require('q');
var dateTime = require('./DateTimeUtils');

/**
 * Finds all broadcasts in database
 * @param journalistId    Journalist id, can be omitted
 */
exports.findBroadcasts = function(journalistId) {
    var deferred = q.defer();
    console.log("Searching for broadcasts");
    var options = {};
    if (journalistId != null) {
        options = {
            journalistId: journalistId
        };
    }
    Broadcast.find(options).sort("time ASC").done(function(err, broadcasts){
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
 * @param title            Title
 * @param lead             Lead
 * @param content          Content
 * @param images           group uuid from uploadcare
 * @param imagesCount      count of images in group
 * @returns created broadcast
 */
exports.save = function(journalistId, title, lead, content, images, imagesCount) {
    var deferred = q.defer();
    console.log("Saving broadcast with following params. JournalistId:" + journalistId + " title:" + title +
        " lead:" + lead + " content:" + content);
    Broadcast.create({
        time: dateTime.now(),
        journalistId: journalistId,
        title: title,
        content: content,
        lead: lead,
        images: images,
        imagesCount: imagesCount
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