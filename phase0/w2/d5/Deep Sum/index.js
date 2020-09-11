function deepSum(arr) {
  var sum = 0;
  for (var a = 0; a < arr.length; a++) {
    if (typeof arr[a] == "number") {
      sum += arr[a];
    } else if (arr[a] instanceof Array) {
      sum += deepSum(arr[a]);
    }
  }
  if (sum === 0) {
    return "No number"
  }
  else {
    return sum
  }
}

console.log(
  deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])
) // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]]
  ])
) // 156

console.log(deepSum([])) // No number

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 9, 10, 11], [2], [9, 11]],
    [[2]]
  ])
)
module.exports = deepSum
