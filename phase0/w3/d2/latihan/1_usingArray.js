/**
 * Kerjakan soal berikut menggunakan object.
 */
function arrSet(input) {
    let output = []

    for (let i = 0; i < input.length; i++) {
        let angkaSama = true
        for (let j = 0; j < output.length; j++) {
            if (input[i] === output[j]) {
                angkaSama = false
            }
        }
        if (angkaSama === true) {
            output.push(input[i])
        }
    }
    output.sort()
    return output
}

console.log(arrSet([1, 1, 1, 3, 3, 3, 5, 5, 5, 5])); // [ 1, 3, 5 ]
console.log(arrSet([1, 5, 1, 2, 2, 3, 3, 5, 5]));           // [ 1, 2, 3, 5 ]
console.log(arrSet([1, 5, 1, 2, 2, 3, 3, 5, 5, 'A', 'A'])); // [ 1, 2, 3, 5, 'A' ]