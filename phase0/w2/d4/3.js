/**
 * ==========================
 * What is my email provider?
 * ==========================
 *
 * Description
 * -----------
 * Email merupakan sebuah cara untuk kita berinteraksi antar satu dengan yang lainnya secara elektronik,
 * Banyak sekali provider yang menyediakan layanan email ini.
 *
 * Instruction
 * -----------
 * Buatlah sebuah proses yang akan mengeluarkan output provider email yang digunakan oleh user.
 *
 * Contoh
 * =======
 * @input => icha@hacktiv8.com
 * @output => Your email provider is hacktiv8
 * ( tidak menggunakan .com di belakang)
 *
 * Rules
 * =====
 * 1. Tidak diperbolehkan menggunakan built-in function:
 *    .map .filter .reduce .split .join .indexOf .findIndex
 *
 */

var email = 'ichaha@hacktiv8.com'
// your code here
// let provider = '';

// for (let a = 0; a < email.length; a++) {
//   if (email[a] === '@') {
//     for (let b = 0; b < email.length - a - 5; b++) {
//       provider = provider + email[a + b + 1];
//     }
//   }
// }

// console.log(provider);

var email = '@hacktiv8.c....o.id'

let indexAt = 0; // 6
let indexTitik = 0; // 15

let atFound = false;

for (let i = 0; i < email.length; i++) {
  if (email[i] === '@') {
    indexAt = i;
    atFound = true;
    console.log(indexAt)
  }
  if ((email[i] === '.') && atFound) {
    indexTitik = i;
    break;
  }
}

let provider = '';

for (let i = indexAt + 1; i < indexTitik; i++) {
  provider += email[i];
}

console.log(provider);


var arr = [1,2,3,4];
var total=0;
for(var i in arr) { total += arr[i]; }
