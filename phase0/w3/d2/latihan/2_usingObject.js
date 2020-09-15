function groupByAge(arr) {
    let output = {}

    for (let i = 0; i < arr.length; i++) {
        let umur = 2020 - arr[i]
        if(!(umur in output)) {
            output[umur] = 0
        }
        output[umur]++
    }
    return output
}

console.log(groupByAge([2003, 1991, 1821, 2003, 1821, 1995, 1995]))

/**
 *  {
 *    17: 2,
 *    29 : 1,
 *    199: 2,
 *    25: 2
 *  }
 */