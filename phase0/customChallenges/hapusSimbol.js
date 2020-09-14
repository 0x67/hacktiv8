function removeSpaces(str) {
    let outputSpaceRemoved = ''
    let spasi = ' '
    for (let l = 0; l < str.length; l++) {
        if (str[l] === spasi) {
            outputSpaceRemoved += '' // remove only 1 spaces
        } else {
            outputSpaceRemoved += str[l]
        }
    }
    return outputSpaceRemoved
  }

function hapusSimbol(str) {
    let simbol = '!@#$%^&*()_+=-~`'
    let output = ''
    let string = removeSpaces(str)
    for (let i = 0; i < string.length; i++) {
        if (simbol.indexOf(string[i]) === -1) {
            output += string[i]
        }
    }

    return output
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100