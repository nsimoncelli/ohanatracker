timeConvert = function(timestamp, change) {
    if (timestamp === "now") {
        let date = new Date();
        let convertedDate = (date.getFullYear()) + '-' + (date.getMonth()+1) + '-' + (date.getDate() - change) + ' ';
        let convertedTime = (date.getHours()) + ':' + (date.getMinutes()) + ':' + (date.getSeconds());
        return convertedDate + convertedTime;
    } else {
        let d = new Date(timestamp);
        let convertedDate = (d.getFullYear()) + '-' + (d.getMonth()+1) + '-' + (d.getDate() - change) + ' ';
        let convertedTime = (d.getHours()) + ':' + (d.getMinutes()) + ':' + (d.getSeconds());
        return convertedDate + convertedTime;
    }
}

module.exports = timeConvert; 