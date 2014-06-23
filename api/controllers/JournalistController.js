/**
 * JournalistController
 */
var broadcastService = require('../services/BroadcastService');

module.exports = {

    /**
    *   GET `/journalist/`
    */
    login: function (req, res) {
        if (req.session.user != null) {
          return res.redirect('/journalist/create');
        }
        return res.view({form: {}});
    },


    /**
     *   POST `/journalist/`
     */
    loginPost: function (req, res) {
        var login = req.param('login');
        var password = req.param('password');
        if (login == null || password == null) {
            return res.view('journalist/login', {
                error: 'Введите имя пользователя и пароль',
                form: {login: login}
            });
        } else {
            var findPromise = JournalistService.findJournalist(login, password);
            findPromise.then(
                function(journalist){
                    console.log(journalist);
                    if (journalist !== undefined) {
                        req.session.authenticated = true;
                        req.session.user = journalist;
                        return res.redirect('/journalist/create');
                    } else {
                        return res.view('journalist/login',{
                            error: 'Пароль или имя пользвателя некорректны',
                            form: {login: login}
                        });
                    }
                },
                function(err){
                    console.log("Cannot lookup journalist:" + err);
                    return res.view('journalist/login',{
                        error: 'Ошибка сервиса, пожалуйста, повторите попозже',
                        form: {login: login}
                    });
                }
            );
        }
    },


    /**
    *    `/journalist/create`
    */
    create: function (req, res) {
      return res.view({form:{}});
    },


    /**
     *    `/journalist/save`
     */
    save: function (req, res) {
        var title = req.param('title')
        var lead = req.param('lead');
        var content = req.param('content');
        var images = req.param('group-uuid');
        var journalistId = req.session.user.id;
        var savePromise = broadcastService.save(journalistId, title, lead, content, images);
        savePromise.then(
            function(broadcast) {
                console.log("Broadcast saved:" + broadcast);
                return res.view('journalist/create',{
                    success: 'Трансляция сохранена',
                    form: {}
                });
            },
            function(err) {
                console.log("Cannot save broadcast:" + err);
                return res.view('journalist/create',{
                    error: 'Ошибка сервиса, невозможно сохранить данные',
                    form: {
                        title: title,
                        lead: lead,
                        content: content
                    }
                });
            }
        );
    },


    /**
     *    `/journalist/logout`
     */
    logout: function (req, res) {
        req.session.user = undefined;
        req.session.authenticated = false;
        return res.redirect('/journalist/');
    },


    /**
    * Overrides for the settings in `config/controllers.js`
    * (specific to JournalistController)
    */
    _config: {}

  
};
