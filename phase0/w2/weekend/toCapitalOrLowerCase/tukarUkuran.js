function tukarBesarKecil(str) {
    let alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let outputLowerUpperCase = ''

    for (let k = 0; k < str.length; k++) {
        if (alphabetUpperCase.indexOf(str[k]) !== -1) {
            outputLowerUpperCase += str[k].toLowerCase()
        } else if (alphabetLowerCase.indexOf(str[k]) !== -1) {
            outputLowerUpperCase += str[k].toUpperCase()
        } else {
            outputLowerUpperCase += str[k]
        }
    }
    return outputLowerUpperCase
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"