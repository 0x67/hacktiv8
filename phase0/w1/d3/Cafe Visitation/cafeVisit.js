var name = 'Abi';
var age = 15;
var money = 100000;

var juice, anggur;
juice = 50000;
anggur = 300000;

if (name == "") {
    console.log('Anda tidak boleh masuk!')
    return false;
} else if (age <= 17 ) {
    console.log('Hanya pesan jus.')
    if (money < juice) {
        console.log('Uang tidak cukup. Anda harus pulang.')
    } else {
        console.log(`Anda bisa pesan minum . Sisa uang anda: ${money-juice}.\n`)
    }
} else if (age >= 17) {
    console.log('Hanya pesan anggur.')
    if (money < anggur) {
        console.log('Uang tidak cukup. Anda harus pulang.')
    } else {
        console.log(`Anda bisa pesan minum . Sisa uang anda: ${money-anggur}.\n`)
    }
}