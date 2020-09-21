/**
 * PERKATA DIBALIK
 * ===============
 * 
 * Sebuah function yang menerima kalimat sebagai input. Output dari function ini adalah kalimat input yang setiap katanya telah dibalik.
 * Soal ini harus dikerjakan secara modular menggunakan fungsi-fungsi yang telah disediakan sebagai berikut:
 * 
 *   -  splitter : berfungsi memisahkan string menjadi array berdasarkan karakter spasi.
 *        - Input : 'Bella Goth gone
 *        - Output : ['Bella', 'Goth', 'gone']
 *   
 *   - to2Dimensi : berfungsi untuk mengubah array of string menjadi array multidimensi dengan isi array terdalam adalah huruf dari kata.
 *       - Input : ['Bella', 'Goth', 'gone']
 *       - Output : [
 *           [ 'B', 'e', 'l', 'l', 'a' ],
 *           [ 'G', 'o', 't', 'h' ],
 *           [ 'g', 'o', 'n', 'e' ]
 *         ]
 *   
 *   - reverseInner : berfungsi untuk membalikan value dari array terdalam yang merupakan huruf-huruf.
 *       - Input : [
 *           [ 'B', 'e', 'l', 'l', 'a' ],
 *           [ 'G', 'o', 't', 'h' ],
 *           [ 'g', 'o', 'n', 'e' ]
 *         ]
 *       - Output : [
 *           [ 'a', 'l', 'l', 'e', 'B' ],
 *           [ 'h', 't', 'o', 'G' ],
 *           [ 'e', 'n', 'o', 'g' ]
 *         ]
 * 
 * RULES : 
 *   - DILARANG menggunakan built-in function selain .push().
 *   - WAJIB menggunakan 3 function bantuan dengan input dan output yang sudah dijelaskan di atas .
 *   - Diperbolehkan untuk menambahkan kode program pada function perkataDibalik.
 * 
 * NOTE : 
 *   - Asumsi input perkataDibalik merupakan kalimat (string).
 */

function splitter(str) {
    let temp = []
    let output = ''
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        temp.push(output)
        output = ''
      } else {
        output += str[i]
      }
      if (i === str.length - 1) {
        temp.push(output)
      }
    }
    return temp
  }
  
  function to2Dimensi(array) {
    let output = []

    for (let i = 0; i < array.length; i++) {
      let temp = []
      for (let j = 0; j < array[i].length; j++) {
        temp.push(array[i][j])
      }
      output.push(temp)
    }
    return output
  }
  
  function reverseInner(array) {
    let output = []

    for (let i = 0; i < array.length; i++) {
      let temp = []
      for (let j = array[i].length - 1; j >= 0; j--) {
        temp.push(array[i][j])
      }
      output.push(temp)
    }
    return output
  }
  
  function perkataDibalik(str) {
    let words = splitter(str)
    let wordCharc = to2Dimensi(words)
    let revCharc = reverseInner(wordCharc)
    
    let output = ''

    for (let i = 0; i < revCharc.length; i++) {
      for (let j = 0; j < revCharc[i].length; j++) {
        output += revCharc[i][j]
      }
      if (i < revCharc.length - 1) {
        output += ' '
      }
    }
    return output
  }
  
  console.log(perkataDibalik('Bella Goth gone')) // alleB htoG enog
  // console.log(perkataDibalik('aku makan nasi')) // uka nakam isan
  // console.log(perkataDibalik('teh atau kopi?')) //het uata ?ipok
  // console.log(perkataDibalik('AKU MAU AJA')) // UKA UAM AJA