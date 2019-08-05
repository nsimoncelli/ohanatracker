dateTest = ( date ) => {
    date.slice(0,9);
    let dTest = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if (!dTest.test(date)) {
        return false;
    } else {
        return true;
    }
}

module.exports = dateTest;