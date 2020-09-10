function tabelPerkalian(angka) {
  //if angka = 24
  //loop 1 = i * angka = angka
  //loop 2 = 2 * angka / 2 = angka
  let outputArr = []
  let outputFinal = []
  for (let i = 1; i <= angka; i++) {
    let hasilBagi = angka/i
    if (angka % i == 0) {
      outputArr.push(`${i}x${hasilBagi}`)
    }
  }
  for (let j = 0; j < outputArr.length / 2; j++) { // setengah dari faktor pasti sama jadi kita hilangin aja
    outputFinal.push(outputArr[j])
  }
  return outputFinal
}

// TEST CASES
console.log(tabelPerkalian(12)); // [ '1x24', '2x12', '3x8', '4x6' ]
console.log(tabelPerkalian(90)); // [ '1x90', '2x45', '3x30', '5x18', '6x15', '9x10' ]
console.log(tabelPerkalian(20)); // [ '1x20', '2x10', '4x5']
console.log(tabelPerkalian(179)); // [ '1x179' ]
console.log(tabelPerkalian(1)); // [ '1x1' ]

module.exports = tabelPerkalian;