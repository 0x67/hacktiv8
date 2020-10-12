package main

import "fmt"

func main() {
	const nama = "Abi"
	const nilai = 69
	const absen = 2

	if nilai > 70 && absen < 5 {
		fmt.Println(nama + " lulus")
	} else {
		fmt.Println(nama + " tidak lulus")
	}
}
