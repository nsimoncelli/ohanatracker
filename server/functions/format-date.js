formatDate = function( inputDate ) {
    let date = new Date(inputDate);
    let day = date.getDate();
    let month = date.getMonth();
    let combinedDate = month + '' + day;
    return combinedDate;
}

module.exports = formatDate;