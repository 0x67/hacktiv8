function targetTerdekat(arr) {
  let xIndex = 0
  let oIndex = 0
  let foundX = false
  let foundO = false
  let jarak = 0

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'o') {
      oIndex = i
      foundO = true
    }
    else if (arr[i] === 'x') {
      xIndex = i
      foundX = true
    }
    if (foundO === true && foundX === true && oIndex < xIndex) {
      jarak = xIndex - oIndex
      break
    }
    else if (foundO === true && foundX === true && xIndex < oIndex) {
      jarak = oIndex - xIndex
      break
    }
  }

  return jarak
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'o', ' ', 'x'])) // 1
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])) // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])) // 2

module.exports = targetTerdekat
