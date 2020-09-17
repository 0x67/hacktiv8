function cariMedian(arr) {
    // sort the array
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < arr.length; i += 1) {
            if (arr[i - 1] > arr[i]) {
                done = false;
                var tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    // find median, odd array
    let pos1 = Math.ceil(arr.length / 2)
    if (arr.length % 2 !== 0){
        let median = arr[pos1 - 1]
        return median
    }
    
    // if even array
    else {
        pos1 = (arr.length / 2) - 1
        pos2 = pos1 + 1

        median = (arr[pos1] + arr[pos2]) / 2
        return median
    }
}

// TEST CASES
console.log(cariMedian([5, 4, 3, 2, 1])); // 3
console.log(cariMedian([13, 4, 3, 10, 12, 1])); // 7
console.log(cariMedian([4, 3, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([8, 7, 8, 7])); // 7.5