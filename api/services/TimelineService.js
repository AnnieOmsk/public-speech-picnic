/**
 * Finds all timelines in database
 * @param func Function to call with list of timelines
 */
exports.findTimelines = function(func) {
    console.log("Searching for timelines");
    Timeline.find({}).sort("start ASC").done(function(err, timelines){
        if (err) {
            return console.log(err);
        } else {
            func(timelines);
        }
    });
};
