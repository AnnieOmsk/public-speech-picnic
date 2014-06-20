/**
 * JournalistController
 */

module.exports = {
  
  /**
   *    `/journalist/login`
   */
   login: function (req, res) {

      if (req.method == 'POST') {
          var login = req.param('login');
          var password = req.param('password');
          if (login === undefined || password === undefined || login == null || password == null) {
              return res.view({
                  error: 'Введите имя пользователя и пароль'
              });
          } else {
              var promise = JournalistService.findJournalist(login, password);
              promise.then(
                  function(journalist){
                      console.log(journalist);
                      if (journalist !== undefined) {
                          req.session.user = journalist;
                          return res.redirect('/journalist/create');
                      } else {
                          return res.view({
                              error: 'Пароль и имя пользвателя некорректны'
                          });
                      }
                  },
                  function(err){
                      console.log("Cannot lookup journalist:" + err);
                      return res.view({
                          error: 'Ошибка сервиса, пожалуйста, повторите попозже'
                      });
                  });
          }
      } else {
          if (req.session.user != null) {
              return res.redirect('/journalist/create');
          }
          return res.view();
      }
  },


  /**
   *    `/journalist/create`
   */
   create: function (req, res) {
      if (req.session.user != null) {
          return res.view();
      } else {
          return res.send("Не авторизован", 500);
      }
  },


    /**
     *    `/journalist/logout`
     */
    logout: function (req, res) {
        if (req.session.user != null) {
            req.session.user = undefined;
            return res.redirect('/journalist/login');
        } else {
            return res.send("Не авторизован", 500);
        }
    },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to JournalistController)
   */
  _config: {}

  
};
