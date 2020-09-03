let kata = 'Javascript'
let balik = '' // empty string to display reversed string

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
console.log(balik)

/* or we can do it this way instead
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
let kata = 'Javascript';
let balik = "";
for (let value of kata) {
  balik = value + balik;
}
console.log(balik);
*/