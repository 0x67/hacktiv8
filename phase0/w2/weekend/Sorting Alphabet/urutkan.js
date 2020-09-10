function urutkanAbjad(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArr = []
    let outputUrut = ''
    let unsortedStr = []
    let sortedStr = []

    for (let i = 0; i < alphabet.length; i++) { // change alphabet to alphabetArr
        alphabetArr.push(alphabet[i]); // somehow have to get each index of alphabet[i] with each value
    }

    for (let j = 0; j < str.length; j++) {
        unsortedStr.push(str[j])
    }

    for (let k = 0; k < unsortedStr.length; k++) {
        if (unsortedStr.indexOf(str) !== -1) {
            return `ketemu`
        }
    }
    console.log(alphabetArr)
}

console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'