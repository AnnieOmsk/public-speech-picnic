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
var configuration = require('../services/Configuration');
var q = require('q');
var teaserService = require('../services/TeaserService');
var timelineService = require('../services/TimelineService');
var broadcastService = require('../services/BroadcastService');
var twitterService = require('../services/TwitterService');
var instagramService = require('../services/InstagramService');
var presenterService = require('../services/PresenterService');

var injectedScripts = '<script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>';

module.exports = {

    /**
    * Main controller for / page
    */
    index: function (req, res) {
      var allPromise = q.all([
          timelineService.findTimelines(),
          broadcastService.findBroadcasts()
      ]);
      allPromise.then(function(data){
          return res.view({
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
        var instagramPromise = instagramService.findInstagrams(configuration.INSTAGRAM_KEYWORD, configuration.INSTAGRAM_COUNT);
        instagramPromise.then(function(data) {
            return res.send(presenterService.presentInstagrams(data));
        }, function(err) {
            console.error("Instagram promise error:" + err);
            return res.serverError(err);
        });
    },

    twitterList: function (req, res) {
        var twitterPromise = twitterService.findTweets(configuration.TWITTER_KEYWORD, configuration.TWITTER_COUNT);
        twitterPromise.then(function(data) {
            return res.send(presenterService.presentTweets(data));
        }, function(err) {
            console.error("Twitter promise error:" + err);
            return res.serverError(err);
        });
    },

    broadcast: function(req, res) {
        var broadcastPromise = broadcastService.findBroadcastsFrom(null, 6);
        broadcastPromise.then(function(data) {
            return res.json(data);
        });
    },

    eventList: function (req, res) {
        var eventsPromise = teaserService.fetchTeasers();
        eventsPromise.then(function(data) {
            return res.send(presenterService.presentTeasers(data).events);
        }, function(err) {
            console.error("Events promise error:" + err);
            return res.serverError(err);
        });
    },

    articleList: function (req, res) {
        var articlePromise = teaserService.fetchTeasers();
        articlePromise.then(function(data) {
            return res.send(presenterService.presentTeasers(data).articles);
        }, function(err) {
            console.error("Articles promise error:" + err);
            return res.serverError(err);
        });
    },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {}

  
};
