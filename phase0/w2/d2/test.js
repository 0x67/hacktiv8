
// GANJIL GENAP => JUMLAH PLAT GANJIL ATAU GENAP

var plat = '864;1308;1276;1432'
var platSplit = plat.split(';')
var input = ''
var genap = 0
var ganjil = 0
function ganjilGenap() {
    for (var i = 0; i < platSplit.length; i++) {
        if (platSplit[i] % 2 == 0) {
            genap += 1 

        }
        else if (platSplit[i] % 2 != 0){
            ganjil++
        }
        
    }
    if (ganjil > 0 && genap > 0) {
        console.log(`plat ganjil: ${ganjil} dan plat genap: ${genap}`)
    }
    else if (ganjil > 0 && genap == 0) {
        console.log(`plat ganjil: ${ganjil} dan plat genap tidak ditemukan`)
    }

    else if (ganjil == 0 && genap > 0) {
        console.log(`plat genap: ${genap} dan plat ganjil tidak ditemukan`)
    }
    else if (ganjil == 0 && genap == 0) {
        console.log('plat tidak ditemukan')
    }
    else {
        console.log('invalid data')   
    }        
}

ganjilGenap()