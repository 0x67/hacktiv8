function cariPelaku(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' && str[i + 1] === 'b' && str[i + 2] === 'c') {
            count++
        }
    }
    return count
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2