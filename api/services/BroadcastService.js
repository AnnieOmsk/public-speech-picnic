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
exports.save = function(journalistId, title, lead, content, images) {
    var deferred = q.defer();
    console.log("Saving broadcast with following params. JournalistId:" + journalistId + " title:" + title +
        " lead:" + lead + " content:" + content);
    var broadcast = {
        time: dateTime.now(),
        journalistId: journalistId,
        title: title,
        content: content,
        lead: lead,
        images: images
    };
    broadcast.directUrl = '?from=' + dateTime.dateFullTime(broadcast.time) + '#translation';
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
exports.findAcceptedBroadcastsFrom = function(time, n) {
    var deferred = q.defer();
    console.log("Searching for broadcasts");
    var query = Broadcast.find().where({accepted: 1});
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
            deferred.resolve(broadcasts);
        }
    });
    return deferred.promise;
};


/**
 * Finds n broadcast earlier from given time
 * @param time string in format yyyy-mm-dd[ hh:mm:ss]
 * @param n offest
 */
exports.findAcceptedBroadcastsEarlier = function(time, n) {
    var deferred = q.defer();
    console.log("Searching for earlier broadcasts");
    var query = Broadcast.find().where({accepted: 1});
    if (time != null) {
        query = query.where({time: {'>': time}});
    } else {
        deferred.resolve(null);
    }
    if (n != null && n != undefined) {
        query = query.limit(n);
    }
    query.sort("time DESC").exec(function(err, broadcasts){
        if (err) {
            console.log("BroadcastService error:" + err);
            deferred.reject(err);
        } else {
            if (broadcasts.length >0) {
                deferred.resolve(broadcasts[0]);
            } else {
                deferred.resolve(null);
            }
        }
    });
    return deferred.promise;
};

exports.like = function(id) {
    var deferred = q.defer();
    Broadcast.findOne(id).done(function(err, broadcast) {
        ++broadcast.likes;
        broadcast.save(function(err) {
            if (err) {
                console.log("BroadcastService error:" + err);
                deferred.reject(err);
            } else {
                deferred.resolve(broadcast.likes);
            }
        });
    });
    return deferred.promise;
};