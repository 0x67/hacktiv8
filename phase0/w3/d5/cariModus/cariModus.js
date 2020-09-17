function cariModus(arr) {
  let obj = {}

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

  // count each number occurence
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 0
    }
    obj[arr[i]] += 1
  }

  // make array for key-value of obj
  let keys = Object.keys(obj)
  let values = Object.values(obj)

  // if (keys.length === 1) {
  //   return -1
  // } 
  
  // else {
  //   // console.log(key)
  //   // console.log(values)
    // let largest = 0
    // let output

    // for (let i = 0; i < values.length; i++) {
    //   if (largest < values[i]) {
    //     largest = values[i]
    //     index = i
    //     continue
    //   }
    //   output = keys[index]
    // }
    // return output
  // }

  // check if every array element is same
  if (keys.length === 1) {
    return -1
  }
  else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== values[0]) {
        let largest = 0
        let output
        for (let i = 0; i < values.length; i++) {
          if (largest < values[i]) {
            largest = values[i]
            index = i
            continue
          }
        }
        output = keys[index]
        return output
      }
    }
    return -1
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
