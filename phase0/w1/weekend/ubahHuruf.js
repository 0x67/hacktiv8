/* requirements
var kata = 'i love javascript'
maka output yang dihasilkan adalah '$ l$v$ j$v$scr$pt'
var kata = 'I LoVE JAvaSCRipt'
maka output yang dihasilkan adalah '$ L$V$ J$v$SCR$pt
*/

let kata = 'I LoVE JAvaSCRipt'
// let vokal = ['a', 'i','u','e','o'] //idk how to use array so i comment this
let output = ''


for (var i = 0; i <= kata.length; i++) {
    // output += kata[i] // iterates output with value of kata >> if kata[0] >> output = a
    var outputVokal = '$'
    if (kata[i] == 'a'.toUpperCase() || kata[i] == 'i'.toUpperCase() || kata[i] == 'u'.toUpperCase() || kata[i] == 'e'.toUpperCase() || kata[i] == 'o'.toUpperCase()) {  // if output equal to 'vokal'
        //output = ganti

        output += outputVokal   // change to ganti in the output[length] 
        //output += kata[i+1]
        //add non vokal character from 'kata' to 'output'
        continue;
        
    }
    if (kata[i] == 'a' || kata[i] == 'i' || kata[i] == 'u' || kata[i] == 'e' || kata[i] == 'o') {  // if output equal to 'vokal'
        //output = ganti
        outputVokal = '$'
        output += outputVokal   // change to ganti in the output[length] 
        //output += kata[i+1]
        //add non vokal character from 'kata' to 'output'
        continue;
    }
    else if (outputVokal = kata[i]){
        
        output = output + outputVokal
    }
    
    //console.log(output)
    //console.log(vokal)
}
console.log(kata + ' = input')
console.log(output + ' = output')