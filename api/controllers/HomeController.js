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
var zoneService = require('../services/ZoneService');
var organizerService = require('../services/OrganizerService');
var broadcastService = require('../services/BroadcastService');
var twitterService = require('../services/TwitterService');
var instagramService = require('../services/InstagramService');
var presenterService = require('../services/PresenterService');

var injectedScripts = '<script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>\n' +
    '<script src="http://cdnjs.cloudflare.com/ajax/libs/vis/1.1.0/vis.min.js" type="text/javascript"></script>';

module.exports = {

    /**
    * Main controller for / page
    */
    index: function (req, res) {
      //Optional param for the broadcast
      var from = req.param('from');
      var allPromise = q.all([
          broadcastService.findBroadcasts()
      ]);
      allPromise.then(function(data){
          return res.view({
              broadcasts: data[0],
              injectedScripts: injectedScripts,
              from: from
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
        var from = req.param('from');
        var broadcastPromise = broadcastService.findAcceptedBroadcastsFrom(from, configuration.BROADCAST_SIZE);
        broadcastPromise.then(function(data) {
            return res.json(data);
        });
    },

    likeNews: function(req, res) {
        if (!req.session.broadcastLikes) {
            req.session.broadcastLikes = {};
        }
        var newsId = req.param('id');
        if (req.session.broadcastLikes.hasOwnProperty(newsId)) {
            res.json({changed: false});
        } else {
            var likePromise = broadcastService.like(newsId);
            likePromise.then(function(data) {
                req.session.broadcastLikes[newsId] = true;
                return res.json({changed: true, likes: data});
            })
        }
    },

    eventList: function (req, res) {
        var eventsPromise = teaserService.fetchTeasers();
        eventsPromise.then(function(data) {
            return res.send(presenterService.presentEvents(data));
        }, function(err) {
            console.error("Events promise error:" + err);
            return res.serverError(err);
        });
    },

    articleList: function (req, res) {
        var articlePromise = teaserService.fetchTeasers();
        articlePromise.then(function(data) {
            return res.send(presenterService.presentArticles(data));
        }, function(err) {
            console.error("Articles promise error:" + err);
            return res.serverError(err);
        });
    },

    timelineList: function (req, res) {
        var timelinePromises = q.all([timelineService.findTimelines(), zoneService.findZones()]);
        timelinePromises.then(function(data) {
            var organizerPromise = organizerService.findOrganizers();
            organizerPromise.then(function(organizers) {
                return res.send({
                    timelines: presenterService.presentTimelines(data[0], organizers),
                    zones: data[1]
                });
            }, function(err) {
                console.error("Organizer updating promise error:" + err);
                return res.serverError(err);
            });
        }, function(err) {
            console.error("Timeline list promise error:" + err);
            return res.serverError(err);
        });
    },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {}

  
};
