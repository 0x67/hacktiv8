//sum of all multiples of 3 or 5 below 1000
let total = 0 // set the total to 0 so the sum didn't messed up
for (i = 0; i < 1000; i++) { 
    if (i % 3 == 0 || i %  5 == 0) // check if is remainder of 3 or 5-
    total += i  // calculate total by total = total + i >> i.e. 3 numbers
}               // total = 0 + 1 is 1 >> 1 = 1 + 2 is 3 > 3 = 3 + 3 is 6
console.log(total)

//sum of even fibonacci number maxed at 4 million

/*var i
var fib = []
let total = 1

fib[0] = 0
fib[1] = 1

for (i = 2;i <= 11; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
    if (fib[i] % 2 == 0)
    total += fib [i]
    console.log(fib[i])
}
*/

/*let angka = 7

hitung = angka % 2

console.log(hitung)
*/