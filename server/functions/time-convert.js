
timeConvert = function( timestamp, change) {
    if (timestamp === "now" && !change) {
        let d = new Date();
        let date = `${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}`;
        let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        let converted = date + time;
        return converted;

    } else if (timestamp === "now" && change) {
        let d = new Date();
        d.setDate( d.getDate() - change );
        let date = `${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}`;
        let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        let converted = date + time;
        return converted;
    }
}

module.exports = timeConvert; 
