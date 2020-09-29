// release 1
function checkVowel(row, column) {
    let arr = generateArray(row, column)
    console.log(arr)
    let vocal = 'AIUEO'
    let countBlock = 0
    
    for (let i = 0; i < row - 1; i++) {
        for (let j = 0; j < column - 1; j++) {
            let count = 0
            if (vocal.includes(arr[i][j])) {
                count++
            }
            if (vocal.includes(arr[i][j + 1])) {
                count++
            }
            if (vocal.includes(arr[i + 1][j])) {
                count++
            }
            if (vocal.includes(arr[i + 1][j + 1])) {
                count++
            }
            if (count === 4) {
                countBlock++
            }
        }
    }
    return countBlock
}

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

console.log(checkVowel(5, 4))

// console.log(checkVowel([
//     ['N', 'W', 'L', 'N'],
//     ['E', 'O', 'F', 'A'],
//     ['U', 'I', 'L', 'S'],
//     ['K', 'O', 'A', 'I'],
//     ['R', 'S', 'E', 'A']
// ])) // 2

