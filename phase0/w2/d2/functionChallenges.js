// ANTRIAN => TAMBAH 1 ARRAY DI BELAKANG
let line = ['Ega', 'Farrel', 'Voi']
let person = 'Abi'
function antrian() {
    return line.push(person)
}
var antri = (antrian(line, person))
console.log(line)

// PANGGIL ANTRIAN => ARRAY KE 1 HILANG
let firstArray = line.shift()
function panggilAntrian() {
    return line
}
var panggilAntri = (panggilAntrian(line))
console.log(panggilAntri)

// TUMPUKAN => TAMBAH 1 ARRAY DI INDEX[0]
var title = 'Dimas'
let tambahArray = line.unshift(title)
function tumpukan() {
    return line
}
var tumpuk = (tumpukan(line, title))
console.log(tumpuk)
