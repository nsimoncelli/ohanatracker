exports.getTimeFromInput = function(timestamp, change) {
    const d = new Date(timestamp*1000);
    const timeConvert = d.getFullYear() + '-' + (d.getMonth()) + '-' + (d.getDate() - change);

    return timeConvert;
}