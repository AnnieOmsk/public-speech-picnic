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
 * Presents list of Instagram medias from Array of Instagram API responses for display
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
        item.tweetId = inputTweet.id_str;
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
        text = text.replace(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g, "<a href=\"$1\" target=\"_blank\">$1</a>");
        text = text.replace(/^(@([\w]+))/g, "<a href=\"https://twitter.com/$2\" target=\"_blank\">$1</a>");
        text = text.replace(/\W(@([\w]+))/g, "<a href=\"https://twitter.com/$2\" target=\"_blank\">$1</a>");
        text = text.replace(/([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)/g, "<a href=\"mailto:$1\" target=\"_blank\">$1</a>");
        item.text = text.replace(/(#([^\s#]+))/g, "<a href=\"https://twitter.com/hashtag/$2\" target=\"_blank\">$1</a>");
        tweets.push(item);
    }
    return tweets;
};

/**
 * Presents teasers to Events
 * @param teasersJson Teasers from remote Teasers API
 * @returns Events array
 */
exports.presentEvents = function(teasersJson) {
    var teasers = JSON.parse(teasersJson);
    var events = [];
    for (var i=0; i < teasers.length; i++) {
        var item = teasers[i];
        if (item.entity == 'event') {
            var newItem = JSON.parse(JSON.stringify(item));
            if (item.photo == '' || item.photo == 'http://ps.whereco.in/') {
                newItem.photo = '/images/default_pic.jpg';
            }
            newItem.start = dateTimeUtils.dateMonthTime(item.start);
            if (item.end != null) {
                newItem.end = dateTimeUtils.dateMonthTime(item.end);
            }
            events.push(newItem);
        }
    }
    return events;
};

/**
 * Presents teasers to Articles
 * @param teasersJson Teasers from remote Teasers API
 * @returns articles Array
 */
exports.presentArticles = function(teasersJson) {
    var teasers = JSON.parse(teasersJson);
    var articles = [];
    for (var i=0; i < teasers.length; i++) {
        var item = teasers[i];
        if (item.entity == 'article') {
            var newItem = JSON.parse(JSON.stringify(item));
            if (item.photo == '' || item.photo == 'http://ps.whereco.in/' || item.photo == null) {
                newItem.photo = '/images/default_pic.jpg';
            }
            newItem.published = dateTimeUtils.dateMonthYear(item.published);
            articles.push(newItem);
        }
    }
    return articles;
};

/**
 * Presents timelines for display
 * @returns array containing timelines with following fields:
 * id, start, end, content
 */
exports.presentTimelines = function(timelineArray, organizers) {
    if (timelineArray == null) {
        return null;
    }
    var timelines = [];
    for(var i=0; i<timelineArray.length; i++) {
        var item = {};
        var inputTimeline = timelineArray[i];
        item.id = inputTimeline.id;
        item.start = dateTimeUtils.timeToFullString(inputTimeline.start);
        item.end = dateTimeUtils.timeToFullString(inputTimeline.end);
        var id = "timeline-" + item.id;
        item.content = "<p class=\"timeline-popover\" data-bubble=\"" + id + "\" data-toggle=\"popover\">" + inputTimeline.title + "<span>" +
            organizers.filter(function(item) {return item.id == inputTimeline.organizerId})[0].name +
            "</span><span id=\"" + id +"\" style=\"display:none\">" + inputTimeline.description + "</span></p>";
        item.description = inputTimeline.description;
        item.group = inputTimeline.zoneId;
        timelines.push(item);
    }
    return timelines;
};

exports.presentBroadcastsJournalists = function(broadcasts, earlierBroadcast, journalists, broadcastsNumber) {
    if (broadcasts == null) {
        return null;
    }
    var broadcastsPresented = [];
    var nextLink;
    var prevLink;
    var displayBroadcasts = broadcastsNumber;
    if (displayBroadcasts >= broadcasts.length) {
        displayBroadcasts = broadcasts.length;
    }
    for (var i = 0; i < displayBroadcasts; i++) {
        var broadcast = broadcasts[i];
        broadcast.pptime = dateTimeUtils.dateTime(broadcast.time);
        broadcast.url = buildTimeUrl(broadcast.time);
        broadcast.journalist = journalists.filter(function(item){return item.id == broadcast.journalistId})[0];
        broadcastsPresented.push(broadcast);
    }
    if (displayBroadcasts == broadcastsNumber) {
        nextLink = buildTimeUrl(broadcasts[displayBroadcasts].time);
    }
    if (earlierBroadcast != null) {
        prevLink = buildTimeUrl(earlierBroadcast.time);
    }
    return {
        broadcasts: broadcastsPresented,
        next: nextLink,
        prev: prevLink
    };
};

var buildTimeUrl = function(date) {
    return "/?from=" + dateTimeUtils.timeToString(date) + "#translation";
};
