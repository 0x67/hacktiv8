package main

import "fmt"

func main() {
	for i := 0; i < 100; i += 3 {
		if i%2 == 0 {
			fmt.Printf("Angka %d - Even\n", i)
		} else {
			fmt.Printf("Angka %d - Odd\n", i)
		}
	}
}
