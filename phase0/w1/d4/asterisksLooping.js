/*  Soal 1
    *
    *
    *
    * 
    * 
*/
console.log('Soal 1');
let rows1 = 5;
for(var i = 1; i <= rows1; i++) {
    console.log('*');
}
/*  Soal 3
    ******
    *****
    *****
    ***** 
    ***** 
*/
console.log('\nSoal 2');
let rows2 = 5;
 // empty variables that filled up using for loop 
    for(var i = 1; i <= rows2; i++) { // first loop for number of lines
        var stars="";
        for(var j = 1; j<= rows2; j++) {    // second loops to count how many '*' to print
            stars += '*';
        }
        console.log(stars);
        stars = '';
    }

/*  Soal 3
    *
    **
    ***
    **** 
    ***** 
*/
console.log('\nSoal 3');
let rows3 = 5;
    for(var i = 1; i <= rows3; i++) { // first loop for number of lines
        var stars=""; // empty variables that filled up using for loop 
        for(var j = 1; j<= i; j++) {    // second loops to count how many '*' to print
            stars += '*';
        }
        console.log(stars);
        stars = '';
    }

/*  Soal 4
    *****
    ****
    ***
    **
    *     
*/

console.log('\nSoal 4');
let rows4 = 5;
    for(var i = 0; i <= rows4; i++) { // first loop for number of lines
        var stars=''; // empty variables that filled up using for loop 
        for(var j = rows4 - 1; j>= i; j--) {    // second loops to count how many '*' to print
            stars += '*';
        }
        console.log(stars);
        stars = '';
        // this is infinite loop, even though the 1st 5 line display the correct asterisk
        //from line 6 and so on its just empy 
    }
