/*let rows2 = 5;
var stars="";
    for(var i = 1; i <= rows2; i++) {
        for(var j = 1; j<= rows2; j++) {
            stars += '*';
        }
        for(var j = i; j < 1; j--) {
            stars += '*';
        }
        console.log(stars);
        stars = '';
    }

/* SOAL 2
console.log('\nSoal 2');
let rows2 = 5;
function row2(rows2) {
    // length has the number of lines the triangle should have
    var row = "";
    for (var i = 1; i <= rows2; i++) {
      // Enter the first for loop for the number of lines
      for(var j = 1; j <= rows2; j++){ 
        // Enter the second loop to figure how many *'s to print based on the current line number in i. So the 1st line will have 1 *, the second line will have 2 *s and so on.
        row += "*";
      }
      // Add a newline after finishing printing the line and move to the next line in the outer for loop
      row +="\n";
  
    }
    // Print an additional newline "\n" if desired.
    return row;
  }
  console.log(row2(5));
*/

/* SOAL 3
console.log('\nSoal 3');
let rows3 = 5;
function row3(rows3) {
    // length has the number of lines the triangle should have
    var row = "";
    for (var i = 1; i <= rows3; i++) {
      // Enter the first for loop for the number of lines
      for(var j=1; j <= rows3; j++){ 
        // Enter the second loop to figure how many *'s to print based on the current line number in i. So the 1st line will have 1 *, the second line will have 2 *s and so on.
        row += "*";
      }
      // Add a newline after finishing printing the line and move to the next line in the outer for loop
      row +="\n";
  
    }
    // Print an additional newline "\n" if desired.
    return row;
  }
  console.log(row3(5));
  */

/*
console.log('\nSoal 3');
let rows3 = 5;
function row3(rows3) {
    // length has the number of lines the triangle should have
    var row = "";
    for (var i = 1; i <= rows3; i++) {
      // Enter the first for loop for the number of lines
      for(var j=1; j<=i; j++){ 
        // Enter the second loop to figure how many *'s to print based on the current line number in i. So the 1st line will have 1 *, the second line will have 2 *s and so on.
        row += "*";
      }
      // Add a newline after finishing printing the line and move to the next line in the outer for loop
      row +="\n";
  
    }
    // Print an additional newline "\n" if desired.
    return row;
  }
  console.log(row3(5));
*/

let rows3 = 5;
var stars=''; // empty variables that filled up using for loop 
    for(var i = 0; i <= rows3; i++) { // first loop for number of lines
        for(var j = rows3 - 1; j>= i; j--) {    // second loops to count how many '*' to print
            stars += '*';
        }
        console.log(stars);
        stars = '';
        // this is infinite loop, even though the 1st 5 line display the correct asterisk
        //from line 6 and so on its just empy 
    }

    