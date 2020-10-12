/*
console.log('LOOPING FOR PERTAMA');
for(var coding = 1; coding <= 20; coding++) {
    console.log(`${coding} - I love coding `);
  }

console.log('\nLOOPING FOR KEDUA');
for(var coding = 20; coding >= 1; coding--) {
    console.log(`${coding} - I will become fullstack developer `);
  }

  console.log('\nLOOPING WHILE PERTAMA');

var i = 2;
while (i <= 20) {
    console.log(`${i} - I love coding`);
    i++;
}

console.log('\nLOOPING WHILE KEDUA');

var i = 20;
while (i >= 2) {
    console.log(`${i} - I will become fullstack developer`);
    i--;
}
*/

package main

import "fmt"

func main() {
	for i := 0; i <= 20; i++ {
		fmt.Printf("Loop ke %d\n", i)
	}
	println("\nLoop ke 2\n")
	for i := 20; i >= 1; i-- {
		fmt.Printf("Loop ke %d\n", i)
	}
}
