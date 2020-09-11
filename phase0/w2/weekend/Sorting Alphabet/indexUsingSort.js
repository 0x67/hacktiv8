function urutkanAbjad(str) {
  let arr = []

  for (i = 0; i < str.length; i++) {
    arr.push(str[i])
  }
  arr.sort()
  let strSorted = ''
  for (j = 0; j < arr.length; j++) {
    strSorted += arr[j]
  }
  return strSorted
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

module.exports = urutkanAbjad;