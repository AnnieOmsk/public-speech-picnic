var dateTimeUtils = require('./DateTimeUtils');

/**
 * Presents broadcasts to human readable style
 */
exports.presentBroadcasts = function(broadcasts) {
    var presentedBroadcasts = [];
    for(var i=0; i<broadcasts.length; i++) {
        var item = {};
        var broadcast = broadcasts[i];
        item.time = dateTimeUtils.dateMonthTime(broadcast.time);
        item.title = broadcast.title;
        item.lead = broadcast.lead;
        item.content = broadcast.content;
        item.imagesLink = broadcast.imagesLink;
        if (broadcast.accepted == null) {
            item.accepted = 'Не рассмотрено';
        } else if (broadcast.accepted == true){
            item.accepted = 'Опубликовано';
        } else {
            item.accepted = 'Отклонено';
        }
        item.images = broadcast.images;
        presentedBroadcasts.push(item);
    }
    return presentedBroadcasts;
};

/**
 * Presents list of Instagram medias from Instagram API for display
 * @returns array containing instagram objects with following fields:
 * id, username, time, text, likesCount, commentsCount, url, imageUrl
 */
exports.presentInstagrams = function(instagramsArray) {
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
 * Presents list of Tweets from Twitter API for display
 * @returns array containing tweet objects with following fields:
 * id, retweetUrl, retweetsCount, favoriteUrl, favoritesCount,
 * replyUrl, url, userAccount, userName, userIcon, createdAt, text
 */
exports.presentTweets = function(tweetsArray) {
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