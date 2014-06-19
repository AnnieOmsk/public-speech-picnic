/**
 * JournalistController
 */
var q = require('q');

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/journalist/login`
   */
   login: function (req, res) {

      if (req.method == 'POST') {
          var login = req.param('login');
          var password = req.param('password');
          if (login === undefined || password === undefined || login == null || password == null) {
              return res.view({
                  error: 'Enter login and password'
              });
          } else {
              var promise = JournalistService.findJournalist(login);
              promise.then(
                  function(journalist){
                      console.log(journalist);
                      if (journalist !== undefined && journalist.password == password) {
                          req.session.user = journalist;
                          return res.redirect('/journalist/create');
                      } else {
                          return res.view({
                              error: 'Incorrect login and password'
                          });
                      }
                  },
                  function(err){
                      console.log("Cannot lookup journalist:" + err);
                      return res.view({
                          error: 'Database error'
                      });
                  });
          }
      } else {
          return res.view({
              hello: 'world'
          });
      }
  },


  /**
   * Action blueprints:
   *    `/journalist/create`
   */
   create: function (req, res) {
      if (req.session.user != null) {
          return res.view({
              hello: 'world'
          });
      } else {
          return res.send("Not authorized", 500);
      }
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to JournalistController)
   */
  _config: {}

  
};
