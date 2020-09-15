function groupAnimals(animals) {
    //get the first letters for every array index
    var firstLetterArr = []

    for (var i = 0; i < animals.length; i++) {
        var firstLetter = true
        for (var j = 0; j < firstLetterArr.length; j++) {
            if (animals[i][0] === firstLetterArr[j]) {
                firstLetter = false
            }
        }
        if (firstLetter === true) {
            firstLetterArr.push(animals[i][0])
        }
    }
    
    //sort the first letter
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    let sortedArr = []

    for (let i = 0; i < kamus.length; i++) {
        for (let j = 0; j < firstLetterArr.length; j++) {
            if (firstLetterArr[j] === kamus[i]) {
                sortedArr.push(kamus[i])
            }
        }
    }

    // push every animals[i][0] that match with firstLetterArr to new array
    let output = []
    
    for(let i = 0; i < sortedArr.length; i++) {
        let innerArr = []
        for(let j = 0; j < animals.length; j++) {
            if(animals[j][0] === sortedArr[i]) {
                innerArr.push(animals[j])
            }
        }
        output.push(innerArr)
    }
    return output
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]