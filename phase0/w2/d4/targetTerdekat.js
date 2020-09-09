let arr = [' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'] // O = 2. X = 7
let indeX = 0
let indexO = 0
let count = 0
let arrSplit = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
        indexO = i
    }
    if (arr[i] === 'x') {
        indexX = i
        break
    }
}

for (let j = indexO; j <= indexX; j++) {
    arrSplit.push(arr[j])
}
console.log(indexX)
console.log(indexO)
console.log(arrSplit)
let jarak = arrSplit.length - 1
console.log(`Jarak terdekat adalah: ${jarak}`)
// TEST CASES
//console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
//console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
//console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
//console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
//console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2