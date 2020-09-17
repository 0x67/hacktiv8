function capitalCase(arr) {
    let output = []

    for (let i = 0; i < arr.length; i++) {
        let temp = ''
        temp += arr[i][0].toUpperCase()
        for (let j = 1; j < arr[i].length; j++) {
            temp += arr[i][j]
        }
        output.push(temp)
    }
    return output
}

console.log(capitalCase(['abi']))
console.log(capitalCase(['semmi', 'verian', 'putera'])) // ['Semmi', 'Verian', 'Putera']
console.log(capitalCase(['Naufal', 'muhaMmad', 'siddiq'])) // ['Naufal', 'MuhaMmad', 'Siddiq']