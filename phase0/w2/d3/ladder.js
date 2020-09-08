var kata = 'hacktiv8'
var output = []
var ladder = []

for(var i = 0; i < kata.length; i++) {
    //console.log(kata[i])
    output.push(kata[i]) //slice every char into array
}

for (var j = 0; j <= output.length; j++) {
    var spasi = ''
    for (var k = output.length - 1; k >= j; k--) {
        spasi += output[k]
        ladder.push(spasi)
    }
    console.log(spasi)
}
console.log(ladder)


//console.log(output)
//console.log(ladder)


/*
8vitkcah
8vitkca
8vitkc
8vitk
8vit
8vi
8v
8
*/