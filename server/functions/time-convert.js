timeConvert = function(timestamp, change) {
    if (timestamp === "now") {
        let d = new Date();
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        let date = new Date(utc + (3600000*17));
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate() - change;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let converted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return converted;
    } else {
        let d = new Date(timestamp);
        let year = d.getFullYear();
        let month = d.getMonth()+1;
        let day = d.getDate() - change;
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        let converted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return converted;
    }
}

module.exports = timeConvert; 