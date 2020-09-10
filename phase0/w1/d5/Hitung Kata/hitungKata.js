let kata = "abi abi abni asdas asd asd";
let total = 0

for (var i = 0; i < kata.length; i++) {
    if (kata[i] === ' ') {
        total = total + 1

    }
}
console.log(total)