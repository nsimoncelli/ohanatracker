timeConvert = ( timestamp, change ) => {
    let offset = new Date().getTimezoneOffset();
    if (timestamp === "now" && !change) {
        let d = new Date();
        let nowUtc = new Date( d.getTime() + (d.getTimezoneOffset() * 60000));
        d = new Date(nowUtc);
        d.setHours(d.getHours() - 7);
        let date = `${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}`;
        let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        let converted = date + ' ' + time;
        return converted;

    } else if (timestamp === "now" && change) {
        let d = new Date();
        let nowUtc = new Date( d.getTime() + (d.getTimezoneOffset() * 60000));
        d = new Date(nowUtc);
        d.setHours(d.getHours() - 7);
        d.setDate( d.getDate() - change );
        let date = `${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}`;
        let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        let converted = date + ' ' + time;
        return converted;

    } else {
        let d = new Date(timestamp);
        let nowUtc = new Date( d.getTime() + (d.getTimezoneOffset() * 60000));
        d = new Date(nowUtc);
        d.setHours(d.getHours() - 7);
        d.setDate( d.getDate() - change );
        let date = `${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}`;
        let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        let converted = date + ' ' + time;
        return converted;
    }
}

module.exports = timeConvert; 
