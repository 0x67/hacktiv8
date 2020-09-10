var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var genap = []
var ganjil = []
var modulusTiga = []
var output = []
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
        genap.push(arr[i])
    } else if (arr[i] % 3 === 0) {
        modulusTiga.push(arr[i])
    }
    else {
        ganjil.push(arr[i])
    }
}
output = [genap , ganjil, modulusTiga]
console.log(genap)
console.log(ganjil)
console.log(modulusTiga)
console.log(output)