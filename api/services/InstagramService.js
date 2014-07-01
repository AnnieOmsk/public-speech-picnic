var configuration = require('./Configuration');
var q = require('q');
var ig = require('instagram-node').instagram();
ig.use({ client_id: configuration.INSTAGRAM_AUTH_CLIENT_ID,
    client_secret: configuration.INSTAGRAM_AUTH_CLIENT_SECRET});

/**
 * Finds instagram media with setup search parameters
 * @param tag       Tag to search for
 * @param count     Number of instagram medias
 * @returns Array of instagram medias from Instagram API
 */
exports.findInstagrams = function(tag, count) {
    var deferred = q.defer();
    console.log("Searching for instagram medias by tag:" + tag);
    ig.tag_media_recent(tag, {count: count}, function(err, result, limit) {
        if (err) {
            deferred.reject(err);
            console.error("Cannot retrieve instagram medias:" + err);
        }
        deferred.resolve(result);
    });
    return deferred.promise;
};

/**
 * Finds instagram media in exact geo location
 * @param lat        Latitude
 * @param lng        Longitude
 * @param distance   Distance
 * @param count      Count
 * @returns Array of instagram medias from Instagram API
 */
exports.findInstagramsByGeo = function(lat, lng, distance, count) {
    var deferred = q.defer();
    console.log("Searching for instagram medias in geo location");
    ig.media_search(lat, lng, {
        distance: distance,
        count: count
    }, function(err, result, limit) {
        if (err) {
            deferred.reject(err);
            console.error("Cannot retrieve instagram medias in geo location:" + err);
        }
        deferred.resolve(result);
    });
    return deferred.promise;
};