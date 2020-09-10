function sorting(arrNumber) {
    var done = false;
    for (let i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i - 1] > arrNumber[i]) {
            done = true
            let tmp = arrNumber[i - 1]
            arrNumber[i - 1] = arrNumber[i]
            arrNumber[i] = tmp
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    let count = 0
    let largest = 0
    for (var i = 0; i < arrNumber.length; i++) { // to find largest number
        if (largest < arrNumber[i]) {
            largest = arrNumber[i]
        }
    }

    for (var j = 0; j < arrNumber.length; j++) { // to find the occurence of highest number
        if (arrNumber[j] === largest) {
            count += 1
        }
    }
    return `angka paling besar adalah ${largest} dan jumlah kemunculan sebanyak ${count} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
    if (arrNumber.length === 0) {
        return `` // kosong 
    }
    else {
        var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
    }
    
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''