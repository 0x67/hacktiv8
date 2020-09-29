'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  let found = false
  let pos = -1
  let index = 0

  while(!found && index < values.length) {
    if(values[index] === target) {
      found = true
      pos = index
    } 
    index++
  }
  return pos
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  let output = []
  let index = 0

  while(index < values.length) {
    if(values[index] === target) {
      output.push(index)
    }
    index++
  }
  return output
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]


// abaikan code dibawah
module.exports = {
  linearSearch,
  globalLinearSearch
}