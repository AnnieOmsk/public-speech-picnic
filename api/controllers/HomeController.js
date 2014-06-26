/**
 * HomeController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
// CONFIGURATION BEGIN
var INSTAGRAM_KEYWORD = 'picnicomsk';
var INSTAGRAM_COUNT = 20;
var TWITTER_KEYWORD = 'picnicomsk';
var TWITTER_COUNT = 50;
// CONFIGURATION END
var q = require('q');
var teaserService = require('../services/TeaserService');
var timelineService = require('../services/TimelineService');
var broadcastService = require('../services/BroadcastService');
var twitterService = require('../services/TwitterService');
var instagramService = require('../services/InstagramService');

var injectedScripts = '<script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>';

module.exports = {

    /**
    * Main controller for / page
    */
    index: function (req, res) {
      var allPromise = q.all([
          teaserService.fetchTeasers(),
          timelineService.findTimelines(),
          broadcastService.findBroadcasts()
      ]);
      allPromise.then(function(data){
          return res.view({
              events: data[0].events,
              articles: data[0].articles,
              timelines: data[1],
              broadcasts: data[2],
              injectedScripts: injectedScripts
          });
      }, function(err) {
          console.error("Promise error:" + err);
          return res.serverError(err);
      });
    },

    instagramList: function (req, res) {
        var instagramPromise = instagramService.findInstagrams(INSTAGRAM_KEYWORD, INSTAGRAM_COUNT);
        instagramPromise.then(function(data) {
            return res.send(data);
        }, function(err) {
            console.error("Instagram promise error:" + err);
            return res.serverError(err);
        });
    },

    twitterList: function (req, res) {
        var twitterPromise = twitterService.findTweets(TWITTER_KEYWORD, TWITTER_COUNT);
        twitterPromise.then(function(data) {
            return res.send(data);
        }, function(err) {
            console.error("Twitter promise error:" + err);
            return res.serverError(err);
        });
    },

    broadcast: function(req, res) {
        var broadcastPromise = broadcastService.findBroadcastsFrom('2014-06-30 13:00', 3);
        broadcastPromise.then(function(data) {
            return res.json(data);
        });
    },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {}

  
};
