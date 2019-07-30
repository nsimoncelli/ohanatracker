timeConvert = function(timestamp, change) {
    const d = new Date(timestamp);
    if (d.getMonth().length === 1) {
        const converted = d.getFullYear() + '-0' + (d.getMonth()+1) + '-' + (d.getDate() - change);
        return converted;
    } else {
        const converted = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + (d.getDate() - change);
        return converted;
    }
}

module.exports = timeConvert; 