var angka = Math.floor(Math.random() * 5) + 1;

switch (angka) {
    case 1:
        angka = 1;
        console.log('Coba lagi ya');
        break;
    case 2:
        angka = 2;
        console.log('Selamat kamu mendapatkan kupon sebanyak 5.');
        break;
    case 3:
        angka = 3;
        console.log('Selamat kamu mendapatkan kupon sebanyak 15.');
        break;
    case 4:
        angka = 4;
        console.log('Selamat kamu mendapatkan kupon sebanyak 50.');
        break;
    case 5:
        angka = 5;
        console.log('WOW, kamu menang jackpot! Selamat!!');
        break;
}

console.log(angka);