var q = require('q');

/**
 * Finds Journalist by login an password in database.
 * If password is omitted, finds journalist by login only
 * Nullifies password for returned journalist
 */
exports.findJournalist = function(login, password) {
    var deferred = q.defer();
    console.log("Searching for journalist");
    Journalist.findOneByLogin(login).done(function(err, journalist){
        if (err) {
            console.log("JournalistService error:" + err);
            deferred.reject(err);
        } else {
            var journalistPassword;
            if (journalist !== undefined) {
                journalistPassword = journalist.password;
                journalist.password = null;
            }
            if (password !== undefined) {
                if (journalistPassword === password) {
                    deferred.resolve(journalist);
                } else {
                    deferred.resolve(undefined);
                }
            } else {
                deferred.resolve(journalist);
            }
        }
    });
    return deferred.promise;
};

exports.findJournalistById = function(id) {
    var deferred = q.defer();
    Journalist.findOneById(id).done(function(err, journalist) {
        if (err) {
            console.log("JournalistService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(journalist)
        }
    });
    return deferred.promise;
};

exports.findAll = function() {
    var deferred = q.defer();
    console.log("Searching for organizers");
    Journalist.find({}).done(function(err, journalists){
        if (err) {
            console.log("JournalistService error:" + err);
            deferred.reject(err);
        } else {
            deferred.resolve(journalists);
        }
    });
    return deferred.promise;
};


