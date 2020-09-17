function hitungAlfabet(str) {
    let kamus = 'AaIiUuEeOo'

    let obj = {
        huruf: {
            vokal: 0,
            konsonan: 0
        },
        panjang: str.length
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() !== str[i].toLowerCase()) {
            let isVocal = false
            for (let j = 0; j < kamus.length; j++) {
                if (str[i] === kamus[j]) {
                    isVocal = true
                    break
                }
            }
            if (isVocal) {
                obj.huruf.vokal++
            } else {
                obj.huruf.konsonan++
            }
        }
    }


    return obj
}

console.log(hitungAlfabet('javascript!'))
/*
{
  huruf: {
    vokal: 3,
    konsonan: 7
  },
  panjang: 11
}
*/

console.log(hitungAlfabet('When I get older losing my hair'))
// /*
// {
//   huruf: {
//     vokal: 9,
//     konsonan: 16
//   },
//   panjang: 31
// }
// */

console.log(hitungAlfabet('2020 20 20 ## && +'))
// /*
// {
//   huruf: {
//     vokal: 0,
//     konsonan: 0
//   },
//   panjang: 18
// }
// */