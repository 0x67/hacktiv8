function arrSet(input) {
    let output = {}

    for (let i = 0; i < input.length; i++) {
        let foundNum = true
        if (input[i] === undefined) {
            foundNum = false
        }
        output[input[i]]
    }

    
    return output
}

console.log(arrSet([1, 1, 1, 3, 3, 3, 5, 5, 5, 5])); // [ 1, 3, 5 ]
console.log(arrSet([1, 5, 1, 2, 2, 3, 3, 5, 5]));           // [ 1, 2, 3, 5 ]
console.log(arrSet([1, 5, 1, 2, 2, 3, 3, 5, 5, 'A', 'A'])); // [ 1, 2, 3, 5, 'A' ]