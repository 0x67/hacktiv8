let angka = 25
//let str = angka.toString() // buat dapetin string dari angka
let balik = ''

//console.log(angka + ' ' + typeof angka)
//console.log(str + ' ' + typeof str)

for (var i = angka; i >= angka; i++) {
    
    let str = i.toString()
    //console.log(str + ' adalah ' + typeof str + ' ini i')
    //console.log(str.length)
    for (var j = str.length - 1; j >= 0; j--) {
        balik += str[j] 
        
    }
    // check if balik is equal to str
    if (balik !== str) {    // if not equal
        balik = ''          // empty the variable to store new value
        continue;           // and continue the loop
    }
    if (balik === str) {    // if equal
        break               // stop the loop
    }
    
    
}
angka = parseInt(balik) // if output require number 
console.log(parseInt(angka) + ' ini balik') // if output accept 'string' as number then just change >> balik
console.log(typeof angka);