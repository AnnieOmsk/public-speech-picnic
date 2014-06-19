/**
 * Finds Journalist by login in database
 */
var q = require('q');
exports.findJournalist = function(login) {
    var deferred = q.defer();
    console.log("Searching for journalist");
    Journalist.findOneByLogin(login).done(function(err, journalist){
        if (err) {
            console.log("JournalistService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(journalist);
        }
    });
    return deferred.promise;
};