function totalDigitRekursif(angka) {
    let arr = []
    let angkaStr = angka.toString()
    let total = 0

    for (let i = 0; i < angkaStr.length; i++) {
        arr.push(angkaStr[i])
    }

    let arrInt = []

    for (let j = 0; j < arr.length; j++) {
        arrInt.push(Number(arr[j]))
        total += arrInt[j]
    }

    // console.log(total)
    return total
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5