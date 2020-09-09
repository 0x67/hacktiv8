function targetTerdekat(arr) {
    let xIndex = 0
    let oIndex = 0
    let arrSplit = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            oIndex = i
        } else if (arr[i] === 'x') {
            xIndex = i
            break
        }
    }

    for (let j = oIndex; j <= xIndex; j++) { // split the arr from oIndex to xIndex
        arrSplit.push(arr[j])
    }

    //let jarak = arrSplit.length - 1
    let jarak = xIndex - oIndex
    //console.log(oIndex)
    //console.log(xIndex)
    //console.log(arrSplit)
    return `Jarak terdekat antara 'X' dan 'O': ${jarak}`
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  //console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  //console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  //console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2