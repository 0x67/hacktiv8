function groupByAge(arr) {
    let output = {}
    let umurArr = []

    for (let i = 0; i < arr.length; i++) {
        umurArr.push(2020 - arr[i])
    }
    // console.log(umurArr)

    for (let i = 0; i < umurArr.length; i++) {
        if (output[umurArr[i]] == undefined) {
            output[umurArr[i]] = 0
        }

        output[umurArr[i]] += 1

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