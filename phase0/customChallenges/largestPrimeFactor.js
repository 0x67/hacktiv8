function largestPrimeFactor(num) {
    let arr = []
    for(var i = 2; i < num; i++)
      if(num % i === 0) {
          return false 
      }
      else {
          num % i === 0 
      }
}

//console.log(largestPrimeFactor(600851475143))
console.log(largestPrimeFactor(3)); // true
console.log(largestPrimeFactor(7)); // true
console.log(largestPrimeFactor(6)); // false
console.log(largestPrimeFactor(23)); // true
console.log(largestPrimeFactor(33)); // false