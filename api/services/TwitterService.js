var q = require('q');
var twitter = require('twitter');
var dateTimeUtils = require('./DateTimeUtils');
/** TODO: Change in production to client's twitter auth settings */
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
        item.id = inputTweet.id_str;
        item.retweetUrl = 'https://twitter.com/intent/retweet?tweet_id=' + inputTweet.id_str;
        item.retweetsCount = inputTweet.retweet_count;
        item.favoriteUrl = 'https://twitter.com/intent/favorite?tweet_id=' + inputTweet.id_str;
        item.favoritesCount = inputTweet.favorite_count;
        item.replyUrl = 'https://twitter.com/intent/tweet?in_reply_to=' + inputTweet.id_str;
        item.url = 'https://twitter.com/' + inputTweet.user.screen_name + '/status/' + inputTweet.id_str;
        item.userAccount = inputTweet.user.screen_name;
        item.userName = inputTweet.user.name;
        item.userIcon = inputTweet.user.profile_image_url;
        item.createdAt = dateTimeUtils.dateMonth(inputTweet.created_at);
        var text = inputTweet.text;
        text = text.replace(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g, "<a href=\"$1\">$1</a>");
        item.text = text.replace(/(#([^\s#]+))/g, "<a href=\"https://twitter.com/hashtag/$2\">$1</a>");
        tweets.push(item);
    }
    return tweets;
};

/**
 * Finds tweets with setup search parameters
 * Each tweet contains: id, retweetUrl, retweetsCount, favoriteUrl, favoritesCount,
 * replyUrl, url, userAccount, userName, userIcon, createdAt, text
 */
exports.findTweets = function(query, count) {
    var deferred = q.defer();
    console.log("Searching for twitter messages");
    twit.search(query, {
        count: count
    }, function(data) {
        deferred.resolve(parseTweets(data.statuses));
    });
    return deferred.promise;
};

