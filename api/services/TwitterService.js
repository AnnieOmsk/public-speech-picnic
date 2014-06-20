var q = require('q');
var twitter = require('twitter');
/** TODO: Change in production to client's twitter production auth settings */
var twit = new twitter({
    consumer_key: 'Kl5X1fTkRsCPQrQqVXUZo3lyN',
    consumer_secret: 'XNVyyEqlS4oxl3AT5aEuBXhb3qeUmvmds6EVExAGHjkfPUO1LY',
    access_token_key: '14196672-wDH7kiSHaYijR7eMKsTky4rRVL1DV7omMPAsJRCaY',
    access_token_secret: 'nVJD9yjrEsz1kSpG1OxngNPosVCPpihYBAX4XhOUhfBp9'
});

/**
 * Parse Twitter API list of tweets
 * @param tweetsArray Array of tweets with parameters needed for our application
 */
var parseTweets = function(tweetsArray) {
    if (tweetsArray == null) {
        return null;
    }
    var tweets = [];
    for(var i=0; i<tweetsArray.length; i++) {
        var item = {};
        var inputTweet = tweetsArray[i];
        item.retweet_url = 'https://twitter.com/intent/retweet?tweet_id=' + inputTweet.id_str;
        item.retweet_count = inputTweet.retweet_count;
        item.favorite_url = 'https://twitter.com/intent/favorite?tweet_id=' + inputTweet.id_str;
        item.favorite_count = inputTweet.favorite_count;
        item.url = 'https://twitter.com/' + inputTweet.user.screen_name + '/status/' + inputTweet.id_str;
        item.user_account = inputTweet.user.screen_name;
        item.user_name = inputTweet.user.name;
        item.user_icon = inputTweet.user.profile_image_url;
        item.created_at = inputTweet.created_at;
        item.content = inputTweet.text;
        tweets.push(item);
    }
    return tweets;
};

/**
 * Finds tweets with setup search parameters
 */
exports.findTweets = function() {
    var deferred = q.defer();
    console.log("Searching for twitter messages");
    twit.search('#пикник', {
        count: 50
    }, function(data) {
        deferred.resolve(parseTweets(data.statuses));
    });
    return deferred.promise;
};

