/* REFERENCES
https://attacomsian.com/blog/javascript-array-lowercase-uppercase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

let kata = 'I LoVE JAvaSCRipt'
let vokalArray = ["a", "i", "u", "e", "o"]
//let vokal = vokalArray.findIndex(kata)
//let isUpperCase = vokalArray.toString()
let upperCase = vokalArray.map(name => name.toUpperCase())
let output = ""

for (var i = 0; i < kata.length; i++) {
    let ganti = '$'
    if (vokalArray.indexOf(kata[i]) !== -1) {
        output += ganti
    } else if (upperCase.indexOf(kata[i]) !== -1) {
        output += ganti
    } else if (ganti = kata[i]) {

        output += ganti
    }
}
console.log(kata + ' = input') // "I l O v e javA sCript"
console.log(output + ' = output') // "$ l $ v $ j$v$ sCr$pt"
console.log(upperCase) // upperCase version of vokalArray 

/* NOTES
it breaks restriction rules tho so this is for personal use only
if want to pass npm test use the index.js
*/