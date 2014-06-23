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
