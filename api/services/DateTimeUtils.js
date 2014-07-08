var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
var moment = require('moment');

/**
 * Converts ISO dateTime to human-readable format showing date, month and year
 * @param dateText ISO dateTime like ""2014-05-15T10:00:00+07:00""
 * @returns human-readable dateTime like "05 June 2014" in russian
 */
exports.dateMonthYear = function(dateText) {
    var date = new Date(parseInt(Date.parse(dateText), 10));
    var russianDate = "";
    russianDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    return russianDate;
};

/**
 * Converts ISO dateTime to human-readable format showing date, month and time
 * @param dateText ISO dateTime like ""2014-05-15T10:00:00+07:00""
 * @returns human-readable dateTime like "05 June 12:00" in russian
 */
exports.dateMonthTime = function(dateText) {
    var date = new Date(parseInt(Date.parse(dateText), 10));
    var russianDate = "";
    var minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    russianDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getHours() + ":" + minutes;
    return russianDate;
};

exports.dateFullTime = function(date) {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

/**
 * Converts ISO dateTime to human-readable format showing time
 * @param dateText ISO dateTime like ""2014-05-15T10:00:00+07:00""
 * @returns human-readable dateTime like "12:00"
 */
exports.dateTime = function(dateText) {
    var date = new Date(parseInt(Date.parse(dateText), 10));
    var minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    var russianDate = date.getHours() + ":" + minutes;
    return russianDate;
};

/**
 * Converts ISO dateTime to human-readable format showing date and month
 * @param dateText ISO dateTime like ""2014-05-15T10:00:00+07:00""
 * @returns human-readable dateTime like "05 June" in russian
 */
exports.dateMonth = function(dateText) {
    var date = new Date(parseInt(Date.parse(dateText), 10));
    var russianDate = "";
    russianDate = date.getDate() + " " + months[date.getMonth()];
    return russianDate;
};

/**
 * Converts unix timestamp to human-readable format showing date and month
 * @param timestamp like  "1400674716"
 * @returns human-readable dateTime like "05 June" in russian
 */
exports.dateMonthTS = function(timestamp) {
    var date = new Date(timestamp*1000);
    var russianDate = "";
    russianDate = date.getDate() + " " + months[date.getMonth()];
    return russianDate;
};

/**
 * Returns current datetime
 */
exports.now = function() {
    var date = moment().format();
    return date;
};

/**
 * Converts time to human readable format like
 * "2014-07-01 13:20:00"
 * @param date javascript date
 */
exports.timeToString = function(date) {
    var timeFormat = "YYYY-MM-DD HH:mm:ss";
    return moment(date).format(timeFormat);
};


/**
 * Converts time to human readable format like
 * "Wed, 09 Aug 1995 00:00:00"
 * @param date javascript date
 */
exports.timeToFullString = function(date) {
    var timeFormat = "ddd, DD MMM YYYY HH:mm:ss";
    return moment(date).format(timeFormat);
};