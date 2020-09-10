var nama = 'Abi';
var nilai = 80;

// Insert your code here

if (nilai >= 80 && nilai <=100) {
    console.log(`nama: ${nama}; score: A`);
}   else if (nilai >= 65 && nilai <=79) {
    console.log(`nama: ${nama}; score: B`);
}   else if (nilai >= 50 && nilai <=64) {
    console.log(`nama: ${nama}; score: C`);
}   else if (nilai >= 35 && nilai <=49) {
    console.log(`nama: ${nama}; score: D`);
}   else if (nilai >= 0 && nilai <=34) {
    console.log(`nama: ${nama}; score: E`);
} else if (nilai < 0 || nilai > 100) {
    console.log('Nilai Invalid')
}

/*
ALGORITMA 
Input nama (STRING) 
Input nilai (NUMBER)

Membuat conditional
    IF nilai >= 80 AND nilai <=100
        DISPLAY nama + 'score A'
        ELSE IF  nilai >= 65 AND nilai <=79
        DISPLAY nama + 'score B'
        ELSE IF  nilai >= 50 AND nilai <=64
        DISPLAY nama + 'score C'
        ELSE IF  nilai >= 35 AND nilai <=49
        DISPLAY nama + 'score D'
        ELSE IF  nilai >= 0 AND nilai <=34
        DISPLAY nama + 'score E'
        ELSE IF  nilai > 100 AND nilai < 0
        DISPLAY 'Score Invalid'
    END IF

PSEUDOCODE
STORE nama AS STRING WITH ANY VALUE
STORE nilai AS NUMBER WITH ANY VALUE 

IF nilai GREATER THAN OR EQUAL TO 80  AND nilai LESS THAN OR EQUAL TO 100
    THEN DISPLAY nama + 'score A' 
    ELSE IF nilai GREATER THAN OR EQUAL TO 65  AND nilai LESS THAN OR EQUAL TO 79
    THEN DISPLAY nama + 'score B' 
    ELSE IF nilai GREATER THAN OR EQUAL TO 50  AND nilai LESS THAN OR EQUAL TO 64
    THEN DISPLAY nama + 'score C' 
    ELSE IF nilai GREATER THAN OR EQUAL TO 35  AND nilai LESS THAN OR EQUAL TO 49
    THEN DISPLAY nama + 'score D' 
    ELSE IF nilai GREATER THAN OR EQUAL TO 0  AND nilai LESS THAN OR EQUAL TO 34
    THEN DISPLAY nama + 'score E' 
    ELSE IF nilai GREATER THAN 100  AND nilai LESS THAN 0
    THEN DISPLAY 'Nilai Invalid' 
END IF  
*/