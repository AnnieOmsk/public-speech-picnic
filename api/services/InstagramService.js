var configuration = require('./Configuration');
var q = require('q');
var dateTimeUtils = require('./DateTimeUtils');
var ig = require('instagram-node').instagram();
ig.use({ client_id: configuration.INSTAGRAM_AUTH_CLIENT_ID,
    client_secret: configuration.INSTAGRAM_AUTH_CLIENT_SECRET});

/**
 * Parse Instagram API list of instagrams
 * @param instagramsArray Array of instagram medias
 */
var parseInstagrams = function(instagramsArray) {
    if (instagramsArray == null) {
        return null;
    }
    var instagrams = [];
    for(var i=0; i<instagramsArray.length; i++) {
        var item = {};
        var inputMedia = instagramsArray[i];
        item.id = inputMedia.id;
        item.username = inputMedia.user.username;
        item.time = dateTimeUtils.dateMonthTS(inputMedia.created_time);
        if (inputMedia.caption != null) {
            var text = inputMedia.caption.text;
            if (text.length > 102) {
                text = text.substr(0, 100) + "...";
            }
            item.text = text.replace(/(#[^\s#]+)/g, "<span>$1</span>");
        }
        item.likesCount = inputMedia.likes.count;
        item.commentsCount = inputMedia.comments.count;
        item.url = inputMedia.link;
        item.imageUrl = inputMedia.images.low_resolution.url;
        instagrams.push(item);
    }
    return instagrams;
};

/**
 * Finds instagram media with setup search parameters
 * @param tag       Tag to search for
 * @param count     Number of instagram medias
 * @returns Array of instagram medias prepared with following params:
 * id, username, time, text, likesCount, commentsCount, url, imageUrl
 */
exports.findInstagrams = function(tag, count) {
    var deferred = q.defer();
    console.log("Searching for instagram messages");
    ig.tag_media_recent(tag, {count: count}, function(err, result, limit) {
        if (err) {
            deferred.reject(err);
            console.error("Cannot retrieve instagram medias:" + err);
        }
        deferred.resolve(parseInstagrams(result));
    });
    return deferred.promise;
};