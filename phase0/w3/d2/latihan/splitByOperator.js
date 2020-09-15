function splitManual(string, opt) {
   let output = []

   let temp = ''

   for (let i = 0; i < string.length; i++) {
       if(string[i] !== opt) {
           temp += string[i]
       }
       else {
           output.push(temp)
           temp = ''
       }
       if(i === string.length - 1) {
           output.push(temp)
       }
   }
   return output
}

console.log(splitManual('ayam,kucing,kuda,capung,kentang', ','))
// ['ayam', 'kucing', 'kuda', 'capung', 'kentang']

console.log(splitManual('kuda;naga;kucing;ayam', ';'))
// ['kuda', 'naga', 'kucing', 'ayam']

console.log(splitManual('ayam+kucing,kuda,capung,kentang+kucing', '+'))
// ['ayam', 'kucing,kuda,capung,kentang', 'kucing']