function cariModus(arr) {
    let freq = 0,
        freqNum, list = []

    arr.forEach(function (num) {
        let foundNum = list.find(function (el) {
            return el.num == num
        })

        if (foundNum) {
            foundNum.count++
            if (foundNum.count > freq) {
                freqNum = num
                freq = foundNum
            }
        } else
            list.push({
                num: num,
                count: 1
            })
    })

    return freqNum
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1