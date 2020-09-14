/*
f[0] = 0
f[1] = 1

f[n] = f[n - 1] + f[n - 2]
f2   1 + 0

*/

var fib = []
let total = 1

fib[0] = 0
fib[1] = 1

for (var i = 2;i <= 11; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
    if (fib[i] % 2 == 0)
    total += fib [i]
}
console.log(fib)

for (let j = 0; j <= fib.length; j++) {
    let sum = 0
    sum += fib[j]
    console.log(sum)
}
