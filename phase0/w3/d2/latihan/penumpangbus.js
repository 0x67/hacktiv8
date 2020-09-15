/*
===========================
Tambah penumpang Bus
============================

[INSTRUCTION]
Terdapat function tambahPenumpangBus yang menerima 2 parameter berupa :
: 
1. array multidimensi yang berisi kondisi penumpang bus yang sudah menaiki bus
2. array penumpang bus yang ingin menaiki bus
Fungsi ini akan mengembalikan array multidimensi yang sudah terisi oleh semua penumpang jika jumlah bangku yang kosong dan penumpang yang ingin naik pas / sama. (LIHAT EXAMPLE 1)
Sedangkan fungsi ini akan mengembalikan string berupa list penumpang yang tidak mendapatkan kursi, jika jumlah bangku yang kosong tidak mencukupi (LIHAT EXAMPLE 2)

[EXAMPLES]
input 1 : 
  [
    ['Hary', '', 'Button'],
    ['', 'Tony', ''],
    ['Udin', 'Paijo', 'Butet']
  ]
input 2 : ['Budi', 'Soleh', 'Miku']
output :
  [
    ['Hary', 'Budi', 'Button'],
    ['Soleh', 'Tony', 'Miku'],
    ['Udin', 'Paijo', 'Butet']
  ]
--------------------------------------------
input 1 : 
  [
    ['Udin', '', ''],
    ['', '', 'Dede'],
    ['Saiful', 'Paijo', 'Butet']
  ]
input 2 : ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong','Layla', 'Grock']
output :
'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'


[Rules]:
- Dilarang menggunakan fungsi map, reduce, filter

*/

function tambahPenumpangBus(arr1, arr2) {
  // for (let i = 0; arr1.length; i++) {
  //   for (let j = 0; arr1[i].length; j++) {
  //     for (let k = 0; arr2.length; k++) {
  //       let kosong = ''
  //       if (arr1[i][j] = kosong) {
  //         arr1[i][j].push(arr2[k])
  //       }
  //     }
  //   }
  // }
  // return arr1

  let duduk = false
  let temp = ''

  for (let k = 0; k < arr2.length; k++) {
    duduk = false;
    for (let i = 0; i < arr1.length; i++) {

      for (let j = 0; j < arr1[i].length; j++) {

        if (arr1[i][j] === '' && duduk === false) {
          // kalau kosong mau dimasukkin orang
          arr1[i][j] = arr2[k];
          duduk = true;
        }
      }
    }

    if (duduk === false) {
      if(arr2[k + 1] === undefined) {
        temp = temp + 'dan ' + arr2[k];
      }
      else {
        temp = temp + arr2[k] + ', ';
      }
    }
  }

  if (duduk === false) {
    temp = temp + ' tidak mendapatkan kursi bus. Silahkan cari bus lainnya';
    return temp;
  }
  else {
    return arr1;
  }
}

console.log(tambahPenumpangBus([
  ['Hary', '', 'Button'],
  ['', 'Tony', ''],
  ['Udin', 'Paijo', 'Butet']
], ['Budi', 'Soleh', 'Miku']));
/*
[
  ['Hary', 'Budi', 'Button'],
  ['Soleh', 'Tony', 'Miku'],
  ['Udin', 'Paijo', 'Butet']
]
*/

console.log(tambahPenumpangBus([
  ['Udin', '', ''],
  ['', '', 'Dede'],
  ['Saiful', 'Paijo', 'Butet']
], ['Alucard', 'Balmond', 'Eudora', 'Nana', 
'Miya', 'Zilong', 'Layla', 'Grock']))
/*
output :
'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'
*/