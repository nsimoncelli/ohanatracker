formatDate = function( inputDate ) {
    let day = inputDate.getUTCDate();
    let month = inputDate.getUTCMonth();
    let combinedDate = month + '' + day;
    return combinedDate;
}

module.exports = formatDate;