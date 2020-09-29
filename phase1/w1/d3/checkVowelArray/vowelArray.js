// release 0
function generateArray(row, column) {
    let output = []
    let kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


    
    for (let i = 0; i < row; i++) {
        let temp = []
        for (let j = 0; j < column; j++) {
            let random = Math.floor(Math.random() * 26)
            temp.push(kamus[random])
        }
        output.push(temp)
    }

    return output
}

// release 1
function checkVowel(arr) {
    let vocal = 'AIUEO'
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (vocal.includes(arr[i][j]) && vocal.includes(arr[i][j + 1]) && vocal.includes(arr[i + 1][j]) && vocal.includes(arr[i + 1][j + 1])) {
                count++
            }
        }
    }
    return count
}
console.log(generateArray(5, 4))

console.log(checkVowel([
    [ 'N', 'W', 'L', 'N' ],
    [ 'E', 'O', 'F', 'A' ],
    [ 'U', 'I', 'L', 'S' ],
    [ 'K', 'O', 'Z', 'H' ],
    [ 'R', 'S', 'Y', 'W' ]
  ]))