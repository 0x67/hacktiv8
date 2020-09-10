// let deret = [1, 3, 9, 27, 81]

// according to highschool materials website 
// the function of geometric sequence is "Un= ar^n-1" where
// where a = deret[0]; ratio = deret[1] / deret[0]
// using the 'deret' array above 
// a = 1
// ratio = deret[1] / deret[0] => ratio = 3 / 1 => 3
// so if ratio = a then it's geometric sequence

function tentukanDeretGeometri(arr) {
    var deret2 = arr[1]
    var ratio = deret2 / arr[0]

    for (var i = 2; i < arr.length; i++) {
        if ((deret2 *= ratio) !== arr[i])
            return false;
    }
    return true
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false