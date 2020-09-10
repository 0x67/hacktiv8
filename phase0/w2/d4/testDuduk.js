function mengelompokkanAngka(arr, column) {
    var output = ''
    var column = ''

    for (var i = 0; i < arr.length; i++) {
        output += arr[i]
        for (var j = 0; j < column;j++) {
            column += output[j]
            console.log(column)
        }
    }
    return output
}
console.log(mengelompokkanAngka([2, 4, 6], 2)); // [ [2, 4], [], [6] ]
//console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
//console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
//console.log(mengelompokkanAngka([])); // [ [], [], [] ]