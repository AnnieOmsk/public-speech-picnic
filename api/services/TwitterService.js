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

/**
 * Finds all twitter blacklists in database
 */
exports.findBlacklist = function() {
    var deferred = q.defer();
    console.log("Searching for twitter blacklists");
    TwitterBlacklist.find({}).done(function(err, twitterBlacklists){
        if (err) {
            console.log("Error finding all twitter blacklists:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(twitterBlacklists);
        }
    });
    return deferred.promise;
};


/**
 * Creates and saves Twitter message
 * @param tweetPresented     Twitter message, presented
 * @returns created twitter message
 */
exports.save = function(tweetPresented) {
    var deferred = q.defer();
    console.log("Saving tweet");
    Twitter.create(tweetPresented).done(function(err, instagram) {
        if (err) {
            console.log("Twitter saving Service error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(instagram);
        }
    });
    return deferred.promise;
};

/**
 * Finds tweets in database
 */
exports.findTweetsInDB = function() {
    var deferred = q.defer();
    console.log("Searching for tweets");
    Twitter.find({}).done(function(err, tweets){
        if (err) {
            console.log("Error finding all tweets:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(tweets);
        }
    });
    return deferred.promise;
};
