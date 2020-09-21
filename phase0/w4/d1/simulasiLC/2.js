/**
 * MAP OF ME AND HOSPITAL
 * ======================
 * 
 * Merupakan function yang akan mencari jarak antara dirimu dengan rumah sakit tengah kota.
 * Ukuran peta telah ditentukan dari argumen size (angka ganjil). Permasalahannya dirimu sendiri
 * tidak tahu di mana posisi pasti antara dirimu dan rumah sakit sehigga membutuhkan peta untuk mengetahui jarak.
 * Apabila lokasimu (xLocation, yLoction) tidak terdeteksi pada peta maka lokasi rumah sakit jauh. 
 * 
 * Contoh:
 *   - INPUT:
 *       - size      : 3
 *       - xLocation : 0
 *       - yLocation : 0
 * 
 *   - PROSSES:
 *       PETA:
 *             -->  -->  -->
 *           [ 'X', ' ', ' ' ]
 *           [ ' ', 'H', ' ' ]
 *           [ ' ', ' ', ' ' ]
 * 
 *       Argumen size adalah 3, sehingga peta memiliki bentuk di atas (3x3).
 *       X: Lokasimu.
 *       H: Lokasi RS di tengah kota.
 *       
 *       Perhitungan jarak dilakukan dari posisi X kemudian ke kanan. Apabila H belum ditemukan,
 *       maka pencarian dilanjutkan pada baris berikutnya (ke bawah).
 *       Pada kasus ini terdapat 4 perpindahan, dan tiap perpindahan dihitung 100 meters.
 * 
 *   - OUTPUT :
 *       [ PETA ]
 *       'Jarak lokasiku ke Rumah Sakit 400 meters.'
 * 
 * NOTES:
 *   - [ PETA ] ditampilkan menggunakan console.log() di dalam function.
 *   - String informasi jarak merupakan return dari function.
 * 
 * RULES :
 *   - Dilarang menggunakan built-in function, kecuali:
 *       - .push().
 *       - .toUpperCase() dan .toLowerCase().
 *       - Built-in Math.
 *       - Built-in informative (.length, isNaN(), isArray(), isInteger).
 *       - Built-in function untuk mengubah type data.
 */

function mapOfMeAndHospital(size, xLocation, yLocation) {
  let output = []

  let center = Math.floor(size / 2)

  for (let i = 0; i < size; i++) {
    let temp = []
    for (let j = 0; j < size; j++) {
      if (i === center && j === center) {
        temp.push('H')
      } else if (i === yLocation && j === xLocation) {
        temp.push('X')
      } else {
        temp.push(' ')
      }
    }
    output.push(temp)
  }
  console.log(output)
  
  let count = 0
  let xFound = false
  let hFound = false
  // cara 1
  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output[i].length; j++) {
      if (xFound) {
        count++
      }
      if (output[i][j] === 'X') {
        xFound = true
      }
      if (output[i][j] === 'H') {
        hFound = true
        break
      }
    }
    if (hFound = true) {
      break
    }
  }

  // cara 3
  // let jarak = ((center - yLocation) + 1) * size - (xLocation + 1) - (size - center - 1);

  return `Jarak lokasiku ke Rumah Sakit ${jarak * 100} meters.`;
}

console.log(mapOfMeAndHospital(5, 0, 1))
// [
//   [' ', ' ', ' ', ' ', ' '],
//   ['X', ' ', ' ', ' ', ' '],
//   [' ', ' ', 'H', ' ', ' '],
//   [' ', ' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', ' ', ' ']
// ]
// Jarak lokasiku ke Rumah Sakit 700 meters.

// console.log(mapOfMeAndHospital(11, -1, 1))
// // Jauh nih rumah sakitnya.

// console.log(mapOfMeAndHospital(3, 1, 0))
// // [
// //   [ ' ', 'X', ' ' ],
// //   [ ' ', 'H', ' ' ],
// //   [ ' ', ' ', ' ' ]
// // ]
// // Jarak lokasiku ke Rumah Sakit 300 meters.

// console.log(mapOfMeAndHospital(9, 15, 15))
// // Jauh nih rumah sakitnya.