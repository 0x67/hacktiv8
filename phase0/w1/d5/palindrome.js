let kata = '121'
let balik = ''

// the loop
// start is (kata.length - 1) which is 't', as as i is greater than 0 i will continue
// decrement after each loop
for (var i = kata.length - 1; i >= 0; i--) {
    balik += kata[i]
    /*  Javascript length is equal to 10
    first loop  >> i = 10 - 1 = 9, balik = "" + "t" = "t"
    second loop >> i = 10 - 2 = 8, balik = "t" + "p" = "tp"
    ...and so on ...
    */
}
if (balik === kata) {
    console.log('ini palindrome')
}
else {
    console.log('ini bukan palindrome')
}