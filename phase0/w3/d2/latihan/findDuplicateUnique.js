function splitManual(string) {
    let output = []
 
    let temp = ''
 
    for (let i = 0; i < string.length; i++) {
        if(string[i] !== ' ') {
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
 

function uniqueDuplicateFinder(str) {
    let obj = {
        unique: [],
        duplicate: []
    }

    let strSplit = splitManual(str)
    let temp = {}
    for (let i = 0; i < strSplit.length; i++) {
        if(!(strSplit[i].toLowerCase() in temp)) {
            temp[strSplit[i].toLowerCase()] = 0
        }
        temp[strSplit[i].toLowerCase()]++
    }

    for (const key in temp) {
        if (temp[key] > 1){
            obj.duplicate.push(key)
        }
        else {
            obj.unique.push(key)
        }
    }
    return obj
}

console.log(uniqueDuplicateFinder('saya dan SAYA suka makan nasi'))

/*
output: 
{
  unique: [ 'dan', 'suka', 'makan', 'nasi' ],
  duplicate: [ 'saya' ]
}
*/

console.log(uniqueDuplicateFinder('dia percaya aku percaya'))

// /*
// output:
// {
//   unique: [ 'dia', 'aku' ],
//   duplicate: [ 'percaya' ]
// }
// */