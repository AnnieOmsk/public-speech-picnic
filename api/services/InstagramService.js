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

/**
 * Finds instagram medias by its shortcode
 * @param shortcode  Shortcode
 * @returns Array of instagram medias from Instagram API
 */
exports.findInstagramsByCode = function(shortcode) {
    var deferred = q.defer();
    console.log("Searching for instagram media by shortcode");
    ig.media_shortcode(shortcode, function(err, result, limit) {
        if (err) {
            deferred.reject(err);
            console.error("Cannot retrieve instagram media by shortcode:" + err);
        }
        deferred.resolve(result);
    });
    return deferred.promise;
};

/**
 * Finds instagram blacklist in database
 */
exports.findBlacklist = function() {
    var deferred = q.defer();
    console.log("Searching for instagram blacklist");
    InstagramBlacklist.find({}).done(function(err, instagramBlacklists){
        if (err) {
            console.log("Error finding all instagram blacklist:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(instagramBlacklists);
        }
    });
    return deferred.promise;
};

/**
 * Finds instagram whitelist in database
 */
exports.findWhitelist = function() {
    var deferred = q.defer();
    console.log("Searching for instagram whitelist");
    InstagramWhitelist.find({}).done(function(err, instagramWhitelist){
        if (err) {
            console.log("Error finding all instagram whitelist:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(instagramWhitelist);
        }
    });
    return deferred.promise;
};

/**
 * Creates and saves Instagram
 * @param instagramPresented     Instagram
 * @returns created instagram
 */
exports.save = function(instagramPresented) {
    var deferred = q.defer();
    console.log("Saving instagram");
    var instagram = {
        commentsCount: instagramPresented.commentsCount,
        likesCount: instagramPresented.likesCount,
        mediaId: instagramPresented.id,
        imageUrl: instagramPresented.imageUrl,
        text: instagramPresented.text,
        time: instagramPresented.time,
        url: instagramPresented.url,
        username: instagramPresented.username
    };
    Instagram.create(instagram).done(function(err, instagram) {
        if (err) {
            console.log("InstagramService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(instagram);
        }
    });
    return deferred.promise;
};

/**
 * Finds instagrams in database
 */
exports.findInstagramsInDB = function() {
    var deferred = q.defer();
    console.log("Searching for instagrams");
    Instagram.find({}).done(function(err, instagram){
        if (err) {
            console.log("Error finding all instagram:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(instagram);
        }
    });
    return deferred.promise;
};
