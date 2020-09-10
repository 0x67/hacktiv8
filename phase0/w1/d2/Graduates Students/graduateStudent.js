var nama = 'Abi';
var nilai = 80;
var absen = 4;

// your code here

if (nilai > 70 && absen < 5) {
    console.log(`nama: ${nama}; lulus`);
}   else {
    console.log(`nama: ${nama}; tidak lulus`);
}   

/*
ALGORITMA 
Input nama (STRING) 
Input nilai (NUMBER)
Input absen (NUMBER)

Membuat conditional
    IF nilai > 70 AND absen <5
        DISPLAY nama + 'lulus'
        ELSE 
        DISPLAY nama + 'tidak lulus'
    END IF

PSEUDOCODE
STORE nama AS STRING WITH ANY VALUE
STORE nilai AS NUMBER WITH ANY VALUE 
STORE absen AS NUMBER WITH ANY VALUE

IF nilai MORE THAN 70 AND absen LESS THAN 5
    THEN DISPLAY nama + 'lulus' 
    ELSE  
    DISPLAY nama + 'tidak lulus'
END IF  
*/