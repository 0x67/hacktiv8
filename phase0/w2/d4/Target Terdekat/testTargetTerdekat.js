function targetTerdekat(arr) {
    let xIndex = 0
    let oIndex = 0
    //let oFound = false
    //let xFound = false
    let jarak = 0
    let reverse = []

    //reverse the search if xIndex < oIndex

    for (var i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i])
        for (var j = 0; j < reverse.length; j++) {
            if (reverse[j] === 'o') {
                oIndex = j
            }
            else if (reverse[j] === 'x') {
                xIndex = j
                break
            }
        }
    }

    //let jarak = arrSplit.length - 1
    jarak = xIndex - oIndex
    //console.log(oIndex)
    //console.log(xIndex)
    //console.log(arrSplit)
    return `Jarak terdekat antara 'X' dan 'O': ${jarak}`
}

// TEST CASES
//console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
//console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', ' ', 'o', ' '])); // 2
//console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
//console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

///
//console.log(targetTerdekat('javascript'))