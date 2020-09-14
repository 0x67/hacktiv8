function fibNumber(num) {
    var i;
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    
    for (i = 2; i <= num; i++) {
        // next fibonacci number = previous + one before previous
        fib[i] = fib[i - 2] + fib[i - 1];
        
    }

    let count = 0

    for (j = 0; j <= fib.length; j++) {
        if (fib[j] % 2 === 0 && fib[j] < 4000000) {
            count += fib[j]
        }
    }
    return count
}

// TEST CASES
console.log(fibNumber(4000000)); // true
console.log(fibNumber(11)); // true
// console.log(fibNumber(10)); // false
// console.log(fibNumber(23)); // true
// console.log(fibNumber(33)); // false