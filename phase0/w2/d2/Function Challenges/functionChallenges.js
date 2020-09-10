// early version commit on 
// https://github.com/0x67/hacktiv8/blob/master/phase0/w2/d2

let line = ['Tita']

  // ANTRIAN
function antrian(line, person) {
  line.push(person)
  return line
}
console.log(antrian(line, 'Maris'))

// PANGGIL ANTRIAN 
function panggilAntrian(line) {
  line.shift()
  return line
}
console.log(panggilAntrian(line))

// TUMPUKAN 
function tumpukan(line, title) {
    line.unshift(title)
    return line
}
console.log(tumpukan(line, 'Patricia'))

// GANJIL GENAP (early version was using split so ...)
// anyway nonSplit version written below .. uncomment it to use (and comment the split version ofc)


function ganjilGenap(plat) {
  if (!plat && plat !== '') {
    return 'invalid data'
  }
  else if (plat === '') {
    return 'plat tidak ditemukan'
  }
  var platSplit = plat.split(';');
  var genap = 0
  var ganjil = 0
    for (var i = 0; i < platSplit.length; i++) {
        if (platSplit[i] % 2 == 0) {
            genap += 1 

        }
        else if (platSplit[i] % 2 != 0){
            ganjil++
        }

    }
    if (ganjil > 0 && genap > 0) {
      return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`
    }
    else if (ganjil > 0 && genap === 0 ){
      return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`
    }
    else if (genap > 0 && ganjil === 0) {
      return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`
    }
  }

// GANJIL GENAP NON SPLIT VERSION 
/*
function ganjilGenap(plat) {
  if (!plat && plat !== '') {
    return 'invalid data'
  }
  else if (plat === '') {
    return 'plat tidak ditemukan'
  }
  var platArray = []
  var output = ''
  var genap = 0
  var ganjil = 0

  for(let i = 0; i < plat.length; i++) {
      if(plat[i] === ";") {
          platArray.push(output)
          output = ''
          continue
      } 

      output += plat[i]
      if(i === plat.length - 1) platArray.push(output)
  }

  for (let j = 0; j < platArray.length; j++) {
      if (platArray[j] % 2 === 0) {
          genap += 1
      }
      else {
          ganjil++
      }
  }

  if (ganjil > 0 && genap > 0) {
    return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`
  }
  else if (ganjil > 0 && genap === 0 ){
    return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`
  }
  else if (genap > 0 && ganjil === 0) {
    return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`
  }

}
*/
console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap())


module.exports = {
  antrian,
  panggilAntrian,
  tumpukan,
  ganjilGenap
}