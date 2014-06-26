var q = require('q');
var dateTime = require('./DateTimeUtils');
var journalistService = require('./JournalistService');

/**
 * Finds all broadcasts in database
 * @param journalistId    Journalist id, can be omitted
 */
exports.findBroadcasts = function(journalistId) {
    var deferred = q.defer();
    console.log("Searching for broadcasts");
    var options = {};
    if (journalistId != null) {
        options = {
            journalistId: journalistId
        };
    }
    Broadcast.find(options).sort("time DESC").done(function(err, broadcasts){
        if (err) {
            console.log("BroadcastService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(broadcasts);
        }
    });
    return deferred.promise;
};

/**
 * Creates and saves Broadcast with following parameters
 * @param journalistId     Journalist id
 * @param title            Title
 * @param lead             Lead
 * @param content          Content
 * @param images           group uuid from uploadcare
 * @param imagesCount      count of images in group
 * @returns created broadcast
 */
exports.save = function(journalistId, title, lead, content, images, imagesCount) {
    var deferred = q.defer();
    console.log("Saving broadcast with following params. JournalistId:" + journalistId + " title:" + title +
        " lead:" + lead + " content:" + content);
    var broadcast = {
        time: dateTime.now(),
        journalistId: journalistId,
        title: title,
        content: content,
        lead: lead,
        images: images,
        imagesCount: imagesCount
    };
    if (images != undefined && images != null && images != '') {
        broadcast.imagesLink = 'http://ucarecdn.com/' + images + '/gallery/-/nav/thumbs/-/fit/cover/-/loop/true/-/allowfullscreen/native/-/thumbwidth/100/';
    }
    Broadcast.create(broadcast).done(function(err, broadcast) {
        if (err) {
            console.log("BroadcastService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(broadcast);
        }
    });
    return deferred.promise;
};

/**
 * Finds n broadcasts from given time
 * @param time string in format yyyy-mm-dd[ hh:mm:ss]
 * @param n limit
 */
exports.findBroadcastsFrom = function(time, n) {
    var deferred = q.defer();
    var query = Broadcast.find();
    if (time != null && time != undefined) {
        query = query.where({time: {'<=': time}});
    }
    if (n != null && n != undefined) {
        query = query.limit(n);
    }
    query.sort("time DESC").exec(function(err, broadcasts){
        if (err) {
            console.log("BroadcastService error:" + err);
            deferred.reject(err);
        } else {
            var journalistsPromises = [];
            for (var i = 0; i < broadcasts.length; i++) {
                var broadcast = broadcasts[i];
                broadcast.pptime = dateTime.dateTime(broadcast.time);
                broadcast.imagesLinks = buildImagesLinks(broadcast.images);
                journalistsPromises[i] = journalistService.findJournalistById(broadcast.journalistId);

            }
            q.all(journalistsPromises).then(function(data) {
                for(var i = 0; i < broadcasts.length; i++) {
                    broadcasts[i].journalist = data[i];
                }
                deferred.resolve(broadcasts);
            });
        }
    });
    return deferred.promise;
};

var buildImagesLinks = function(guuid) {
    var links = [];
    if (guuid != null && guuid != undefined) {
        var imagesCountStr = guuid.substr(guuid.lastIndexOf('~') + 1, guuid.length);
        var imagesCount = parseInt(imagesCountStr);
        for (var i = 0; i < imagesCount; i++) {
            links[i] = {
                preview: 'http://ucarecdn.com/' + guuid + '/nth/' + i + '/-/preview/306x204/',
                original: 'http://ucarecdn.com/' + guuid + '/nth/' + i + '/'
            };
        }
    }
    return links;
}