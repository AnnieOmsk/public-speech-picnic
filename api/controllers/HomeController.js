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
var q = require('q');
module.exports = {
    
  
  /**
   * Main controller for / page
   */
  index: function (req, res) {
      var allPromise = q.all([
          TeasersService.fetchTeasers(),
          TimelineService.findTimelines(),
          BroadcastService.findBroadcasts(),
          TwitterService.findTwits()
      ]);
      allPromise.then(function(data){
          return res.view({
              events: data[0].events,
              articles: data[0].articles,
              timelines: data[1],
              broadcasts: data[2],
              twits: data[3]
          });
      }, function(err) {
          console.error("Promise error:" + err);
          return res.send(err, 500)
      });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {}

  
};
