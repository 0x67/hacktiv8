/* REQUIREMENT
Contoh: var angka = 183928 // the length of this string is 6

maka output yang dihasilkan adalah 92.

penjelasan:

    18 merupakan pasangan angka ke-1
    83 merupakan pasangan angka ke-2
    39 merupakan pasangan angka ke-3
    92 merupakan pasangan angka ke-4
    28 merupakan pasangan angka ke-5

    183928 // the length of this string is 6
    but it only loop - 1 then length so >> str.length - 1

Maka 92 adalah pasangan dua digit angka yang paling besar diantara yang lainnya.
*/

let angka = 12783456   
//console.log(typeof angka)

let str = angka.toString()
let pecahan = ''
let largest = 0
let angkaPisah

for (var i = 0; i < str.length - 1; i++) {  // 'i' must start at '0' because first char in string is [0]
    pecahan = str[i] + str[i+1]             
    /*  START LOOP
        add value of current [i] and [i + 1] to pecahan
        first loop  >> pecahan = str[i] '1' + str[i + 1] '2'    // basically current i + next i
        second loop  >> pecahan = str[i] '2' + str[i + 1] '3'
        and so on
        END LOOP

     TODO: convert the result of each iteration of pecahan to number
     TODO: sum all the pecahan iteration and store it in variable 'output'
     TODO: display the total sum
     easier type than code lol
    */
    angkaPisah = parseInt(pecahan)
    for (var j = i - 1; j < i; j++) {
        if(largest < angkaPisah) {
            largest = angkaPisah
            continue;
        }
        else {
            
            break
        }
        //result = angkaPisah
    }
    
    //console.log(`test pisah 2 karakter ${pecahan} --- loop ke ${i}`)
    //console.log(`\n hasil penjumlahan ${result}`)
    //console.log(`${angkaPisah} ini angka yang dipecah `)
    //console.log(`\n${largest} ini angka terbesar`)
}
console.log(`${largest} ini angka terbesar`)