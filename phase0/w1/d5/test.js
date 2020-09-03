let angka = 25
//let str = angka.toString() // buat dapetin string dari angka
let balik = ''

//console.log(angka + ' ' + typeof angka)
//console.log(str + ' ' + typeof str)

for (var i = angka; i <= 100; i++) {
    
    let str = i.toString()
    //console.log(str + ' adalah ' + typeof str + ' ini i')
    //console.log(str.length)
    for (var j = str.length - 1; j >= 0; j--) {
        balik += str[j] 
        
    }
    // check if balik is equal to str
    if (balik !== str) {    // if not equal
        balik = ''          // empty the variable 
        continue;           // and continue the loop
    }
    if (balik === str) {    // if equal
        break               // stop the loop
    }
    
}
console.log(balik + ' ini balik')