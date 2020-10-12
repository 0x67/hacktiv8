package main

import "fmt"

/*
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
*/
func main() {
	const nama = "Abi"
	const nilai = 1002

	if nilai >= 80 && nilai <= 100 {
		fmt.Println(nama + " score: A")
	}
	if nilai >= 65 && nilai <= 79 {
		fmt.Println(nama + " score: B")
	}
	if nilai >= 50 && nilai <= 64 {
		fmt.Println(nama + " score: C")
	}
	if nilai >= 35 && nilai <= 49 {
		fmt.Println(nama + " score: D")
	}
	if nilai >= 0 && nilai <= 34 {
		fmt.Println(nama + " score: E")
	}
	if nilai < 0 || nilai > 100 {
		fmt.Println("Invalid nilai")
	}
}
