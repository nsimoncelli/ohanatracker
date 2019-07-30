timeConvert = function(timestamp, change) {
    const d = new Date(timestamp);
        const converted = d.getFullYear() + '-0' + (d.getMonth()+1) + '-' + (d.getDate() - change) + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        return converted;
}

module.exports = timeConvert; 