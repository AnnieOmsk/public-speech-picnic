var q = require('q');
var dateTimeUtils = require('./DateTimeUtils');
var ig = require('instagram-node').instagram();
/** TODO: Change in production to client's instagram auth settings */
ig.use({ client_id: '73df4600dba14edfadb5e34f38eb3a56',
    client_secret: 'b689283affa845858ac7804484c20e4f' });

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
        item.time = dateTimeUtils.dateMonth(inputMedia.created_time);
        if (inputMedia.caption != null) {
            item.text = inputMedia.caption.text;
        }
        item.likesCount = inputMedia.likes.count;
        item.commentsCount = inputMedia.comments.count;
        item.link = inputMedia.link;
        item.imageUrl = inputMedia.images.low_resolution;
        instagrams.push(item);
    }
    return instagrams;
};

/**
 * Finds instagram media with setup search parameters
 * @param tag       Tag to search for
 * @param count     Number of instagram medias
 * @returns Array of instagram medias prepared with following params:
 * id, username, time, text, likesCount, commentsCount, link, imageUrl
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