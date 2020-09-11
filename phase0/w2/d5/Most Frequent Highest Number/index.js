function sorting(arrNumber) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arrNumber.length; i += 1) {
      if (arrNumber[i - 1] > arrNumber[i]) {
        done = false;
        var tmp = arrNumber[i - 1];
        arrNumber[i - 1] = arrNumber[i];
        arrNumber[i] = tmp;
      }
      if (arrNumber[i - 1]) { // last number is always biggest num
        largestNum = arrNumber[i]
      }
    }
  }
  //return largestNum // ==> either this or the one below
  return arrNumber;
}

function getTotal(arrNumber) {
  let count = 0
  let largest = 0
  for (var j = 0; j < arrNumber.length; j++) { // to find largest number
    if (largest < arrNumber[j]) {
      largest = arrNumber[j]
    }
  }

  for (var k = 0; k < arrNumber.length; k++) {
    if (arrNumber[k] === largest) {
      count += 1
    }
  }
  
  return count
}

function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) {
    return `` // kosong 
  } else {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(arrNumber); // ntah kenapa kalo misal paramater diganti ke => listSort hasil jadi 0

    return `angka paling besar adalah ${listSort} dan jumlah kemunculan sebanyak ${countHighest} kali`;
  }
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

module.exports = {
  getTotal,
  mostFrequentLargestNumbers,
  sorting
}