timeConvert = ( timestamp, change ) => {
    let offset = new Date().getTimezoneOffset();
    if (timestamp === "now") {
        let d = new Date();
        let nowUtc = new Date( d.getTime() + (d.getTimezoneOffset() * 60000));
        d = new Date(nowUtc);
        d.setHours(d.getHours() - 7);
        let day = d.getDate().toString();
        let month = (d.getMonth()+1).toString();
        day = (day.length < 2) ? day = "0" + day : day;
        month = (month.length < 2) ? month = "0" + month : month;
        let date = `${d.getFullYear()}-${month}-${day}`;
        let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        let converted = date + ' ' + time;
        return converted;
    } else {
        let d = new Date(timestamp);
        let nowUtc = new Date( d.getTime() + (d.getTimezoneOffset() * 60000));
        d = new Date(nowUtc);
        d.setHours(d.getHours() - 7);
        d.setDate( d.getDate() - change );
        let day = d.getDate().toString();
        let month = (d.getMonth()+1).toString();
        day = (day.length < 2) ? day = "0" + day : day;
        month = (month.length < 2) ? month = "0" + month : month;
        let date = `${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}`;
        let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        let converted = date + ' ' + time;
        return converted;
    }
}

module.exports = timeConvert; 