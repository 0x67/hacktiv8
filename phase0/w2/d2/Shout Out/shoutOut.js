// TUGAS 1 

let kata = 'Halo Function!'
function shoutOut() {
    return kata
}
console.log(shoutOut())

// TUGAS 2

var num1 = 5;
var num2 = 6;

function calculateMultiply() {
    return num1 * num2
}

var hasilPerkalian = calculateMultiply(num1, num2)
console.log(hasilPerkalian)

// TUGAS 3 

var name = 'Agus'
var age = 30
var address = 'Indonesia'
var hobby = 'DotA'

function processSentence() {
    return `Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}

var fullSentence = processSentence();
console.log(fullSentence)