var configuration = require('./Configuration');
var q = require('q');
var twitter = require('twitter');
var twit = new twitter({
    consumer_key: configuration.TWITTER_AUTH_CONSUMER_KEY,
    consumer_secret: configuration.TWITTER_AUTH_CONSUMER_SECRET,
    access_token_key: configuration.TWITTER_AUTH_ACCESS_TOKEN_KEY,
    access_token_secret: configuration.TWITTER_AUTH_ACCESS_TOKEN_SECRET
});

/**
 * Finds tweets with setup search parameters
 * @param query     Query to search for
 * @param count     Number of tweets
 * @returns Array of tweets from Twitter API
 */
exports.findTweets = function(query, count) {
    var deferred = q.defer();
    console.log("Searching for twitter messages");
    twit.search(query, {
        count: count
    }, function(data) {
        deferred.resolve(data.statuses);
    });
    return deferred.promise;
};

/**
 * Finds favorite tweets for user
 * @param username     User account name
 * @param count        Number of tweets
 * @returns Array of tweets from Twitter API
 */
exports.findFavoriteTweets = function(username, count) {
    var deferred = q.defer();
    console.log("Searching for favorite twitter messages");
    twit.getFavorites({user_id: username, count: count}, function(data) {
        deferred.resolve(data);
    });
    return deferred.promise;
};

