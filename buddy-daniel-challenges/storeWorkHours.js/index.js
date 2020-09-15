function workHours(day, holiday) {
    let dayArr = [
        'Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu',
    ]

    if (typeof day !== 'string') {
        return 'day is not string'
    }
    else if (typeof day === 'string' && dayArr.indexOf(day) == -1) {
        return 'invalid day'
    }
    else if (typeof holiday !== 'boolean') {
        return 'invalid holiday type'
    }
    else {
        let workHour = 0
        for (let i = 0; i < dayArr.length; i++) {
            if (holiday === true) {
                return `Libur jadi workHours: ${workHour}`
            }
            else if (dayArr.indexOf('Jumat')) {
                return `Hari ${day} jadi workHours: ${workHour + 8}`
            }
            else {
                return `Hari ${day} jadi workHours: ${workHour + 9}`
            }
        }
    }
}

console.log(workHours('Rabu', false))
console.log(workHours('Wednesday', false))
console.log(workHours('Rabu', 'false'))
console.log(workHours('Rabu', true))
console.log(workHours('Jumat', false))