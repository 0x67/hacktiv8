console.log('1. LOOPING FOR EVEN-ODD EVERY 3 INCREMENT');
for(var angka = 1; angka <= 100; angka+= 3) {
    if (angka % 2 === 0) {
        console.log(`${angka} - even `);
    } else {
        console.log(`${angka} - odd`)
    }
}

console.log('\n2. LOOPING FOR INCREMENT OF 5 AND FAKTOR PERKALIAN');
for(var angka = 50; angka <= 200; angka+= 5) {
    if (angka % 3 === 0) {
        console.log(`${angka} - faktor 3 `);
    } else {
        console.log(`${angka} - tidak bisa dibagi 3`)
    }
}

console.log('\n3. LOOPING FOR EVERY 7 INCREMENT + ONLY HABIS DIBAGI 3');
for(var angka = 100; angka <= 200; angka+= 7) {
    if (angka % 8 === 0) {
        console.log(angka);
    }
}