function cariModus(input) {
    // sort the array
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < input.length; i += 1) {
            if (input[i - 1] > input[i]) {
                done = false;
                var tmp = input[i - 1];
                input[i - 1] = input[i];
                input[i] = tmp;
            }
        }
    }

    // get single num for each number
    let numArr = []

    for (let i = 0; i < input.length; i++) {
        let found = true
        for (let j = 0; j < numArr.length; j++) {
            if (input[i] === numArr[j]) {
                found = false
            }
        }
        if (found === true) {
            numArr.push(input[i])
        }
    }
    // count each occurence of numArr[i] in input
    for (let i = 0; i < input.length; i++) {
        let favorite = input[i]
        for (let j = 0; j < input.length; j++) {
          if (input[j] === favorite) {
            count++
          }
          if (largest < count) {
            largest = count
            count = 0
            output = input[j]
          }
        }
      }
      return `${output} the most favorite`
    
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1