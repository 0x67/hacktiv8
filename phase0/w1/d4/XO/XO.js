let kata = "xoox";

let x = ''
let o = ''

for (var i = kata.length - 1; i >= 0; i--) { // using the method from balik kata
    if (kata[i] === 'x') {  // check whether if the first loop contain string 'x'
        x += kata[i]        // if yes >> store the returned string to variable x
    } else {                // if not 
        o += kata[i]        // store the returned string to variable o
    }                       // since only 2 conditions needed to check, i just use if else
}              

if (x.length === o.length) { // check if the length of var x and o is equal
    console.log('true')
    
}else {
    console.log('false')
}