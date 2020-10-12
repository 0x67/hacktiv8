package main

import "fmt"

func main() {
	println("SOAL 1\n")
	for i := 0; i < 5; i++ {
		fmt.Println("*")
	}

	println("\nSOAL 2 \n")
	for i := 0; i < 5; i++ {
		fmt.Println("*****")
	}

	println("\nSOAL 3 \n")
	for i := 0; i < 5; i++ {
		stars := ""
		for j := 0; j <= i; j++ {
			stars += "*"

		}
		fmt.Println(stars)
	}

	println("\nSOAL 4 \n")
	for i := 5; i >= 0; i-- {
		stars := ""
		for j := 0; j < i; j++ {
			stars += "*"

		}
		fmt.Println(stars)
	}
}
