formatDate = ( inputDate ) => {
    let date = new Date(inputDate);
    let day = date.getDate().toString();
    if (day.length < 2) {
        day = "0" + day;
    }
    let month = date.getMonth();
    let combinedDate = month + '' + day;
    return combinedDate;
}

module.exports = formatDate;