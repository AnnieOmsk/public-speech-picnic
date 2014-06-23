/**
 * JournalistController
 */
var broadcastService = require('../services/BroadcastService');
var presenterService = require('../services/PresenterService');
var injectedScripts = "<script src=\"//cdn.ckeditor.com/4.4.1/standard/ckeditor.js\"></script>";

module.exports = {

    /**
    *   GET `/journalist/`
    *   Shows login form for journalist's login
    */
    login: function (req, res) {
        if (req.session.user != null) {
          return res.redirect('/journalist/list');
        }
        return res.view({form: {}});
    },


    /**
     *   POST `/journalist/`
     *   Authenticate journalist's login
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
                        return res.redirect('/journalist/list');
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
     *    Shows form for new broadcast
    */
    create: function (req, res) {
      return res.view({form:{}, injectedScripts: injectedScripts});
    },


    /**
     *    `/journalist/save`
     *    Saves journalist's broadcast
     */
    save: function (req, res) {
        var title = req.param('title');
        var lead = req.param('lead');
        var content = req.param('content');
        var images = req.param('group-uuid');
        var imagesCount = req.param('images-count');
        var journalistId = req.session.user.id;
        var savePromise = BroadcastService.save(journalistId, title, lead, content, images, imagesCount);
        savePromise.then(
            function(broadcast) {
                console.log("Broadcast saved:" + broadcast);
                return res.redirect('/journalist/list?success');
            },
            function(err) {
                console.log("Cannot save broadcast:" + err);
                return res.view('journalist/create',{
                    error: 'Ошибка сервиса, невозможно сохранить данные',
                    form: {
                        title: title,
                        lead: lead,
                        content: content
                    },
                    injectedScripts: injectedScripts
                });
            }
        );
    },


    /**
     *    `/journalist/logout`
     *    Logs out journalist
     */
    logout: function (req, res) {
        req.session.user = undefined;
        req.session.authenticated = false;
        return res.redirect('/journalist/');
    },

    /**
     *    `/journalist/list`
     *    Shows list of journalist's broadcasts
     */
    list: function (req, res) {
        var journalistId = req.session.user.id;
        var response = {};
        if (req.param('success') != null) {
            response.success = 'Ваша трансляция сохранена';
        }
        var listPromise = broadcastService.findBroadcasts(journalistId);
        listPromise.then(
            function(broadcasts) {
                if (broadcasts.length > 0) {
                    response.broadcasts = presenterService.presentBroadcasts(broadcasts);
                } else {
                    response.success = 'Пока вы не добавили ни одной трансляции. Начните с "Добавить", чтобы предложить свою трансляцию.';
                    response.broadcasts = [];
                }
                return res.view(response);
            },
            function(err) {
                console.log("Couldn't retrieve broadcasts for journalist with id:" + journalistId +
                    " because of error:" + err);
                response.error = 'Ошибка сервиса: невозможно получить спискок трансляций';
                response.broadcasts = {};
                return res.view(response);
            }
        );
    },


    /**
    * Overrides for the settings in `config/controllers.js`
    * (specific to JournalistController)
    */
    _config: {}

  
};
