var q = require('q');
var twitter = require('twitter');
var twit = new twitter({
    consumer_key: 'Kl5X1fTkRsCPQrQqVXUZo3lyN',
    consumer_secret: 'XNVyyEqlS4oxl3AT5aEuBXhb3qeUmvmds6EVExAGHjkfPUO1LY',
    access_token_key: '14196672-wDH7kiSHaYijR7eMKsTky4rRVL1DV7omMPAsJRCaY',
    access_token_secret: 'nVJD9yjrEsz1kSpG1OxngNPosVCPpihYBAX4XhOUhfBp9'
});


/**
 * Finds 15 twits with setup search parameters
 */
exports.findTwits = function() {
    var deferred = q.defer();
    console.log("Searching for twitter messages");
    twit.search('#пикник', function(data) {
        console.log(data);
        deferred.resolve(data.statuses);
    });
    return deferred.promise;
};
