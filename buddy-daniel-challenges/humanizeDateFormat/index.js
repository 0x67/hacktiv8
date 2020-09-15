function dateFormat(date, month, year) {
    let monthArr = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    if (typeof date !== 'number' || typeof month !== 'number' || typeof year !== 'number') {
        return 'invalid type'
    } else if (date === 0 || month === '' || year === 0) {
        return 'empty data'
    } else if (typeof date === 'number' && date >= 1 && date <= 31 &&
        typeof year === 'number' && year >= 1) {
        return `${date}-${monthArr[month - 1]}-${year}`
    }

}

console.log(dateFormat(0, 10, 1999))
//11-October-1999
console.log(dateFormat(5, 5, 2010))
//05-May-2010