var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

/**
 * Converts Javascript dateTime to human-readable format showing date, month and year
 * @param dateText Javascript dateTime like ""2014-05-15T10:00:00+07:00""
 * @returns human-readable dateTime like "05 June 2014" in russian
 */
exports.dateMonthYear = function(dateText) {
    var date = new Date(parseInt(Date.parse(dateText), 10));
    var russianDate = "";
    russianDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    return russianDate;
};

/**
 * Converts Javascript dateTime to human-readable format showing date, month and time
 * @param dateText Javascript dateTime like ""2014-05-15T10:00:00+07:00""
 * @returns human-readable dateTime like "05 June 12:00" in russian
 */
exports.dateMonthTime = function(dateText) {
    var date = new Date(parseInt(Date.parse(dateText), 10));
    var russianDate = "";
    var minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    russianDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getHours() + ":" + minutes;
    return russianDate;
};