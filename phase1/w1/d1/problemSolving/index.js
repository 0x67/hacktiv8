/**
 * PSEUDOCODE!
 * 
 * DEFINE FOR LOOP i INITIAL VALUE OF 7, i LAST VALUE OF 31, INCREMENT i by 1
 *  IF i MODULUS 5 EQUAL TO 0
 *      THEN DISPLAY `tanggal 'i': Tempat Fitness Tutup`
 *  END IF
 *  IF i EQUAL TO 7 OR i EQUAL to 27
 *      THEN DISPLAY `tanggal 'i': Tono, Anton, Budi`
 *  END IF
 *  IF i EQUAL TO 17
 *      THEN DISPLAY `tanggal 'i': Tono, Budi`
 *  END IF
 *  IF i MODULUS 4 EQUAL TO 3
 *      THEN DISPLAY `tanggal 'i': Tono, Anton`
 *  END IF
 *  IF i MODULUS 10 EQUAL TO 2
 *      THEN DISPLAY `tanggal 'i': Budi`
 *  END IF
 *  IF i MODULUS 2 NOT EQUAL TO 0
 *      THEN DISPLAY `tanggal 'i': Tono`
 *  END IF
 *  ELSE DISPLAY `tanggal 'i': `
 * END FOR LOOP
 */

for (let i = 7; i <= 31; i++) {
    if (i % 5 === 0) {
        console.log(`tanggal ${i} : Tempat Fitness Tutup`)
    } else if (i === 7 || i === 27) {
        console.log(`tanggal ${i} : Tono, Anton, Budi`)
    } else if (i === 17) {
        console.log(`tanggal ${i} : Tono, Budi`)
    } else if (i % 4 === 3) {
        console.log(`tanggal ${i} : Tono, Anton`)
    } else if (i % 10 === 2) {
        console.log(`tanggal ${i} : Budi`)
    } else if (i % 2 !== 0) {
        console.log(`tanggal ${i} : Tono`)
    } else {
        console.log(`tanggal ${i} :`)
    }
}