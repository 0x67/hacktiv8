//let vocal = 'aAiIuUeEoO'
function vocalSeeker(board) {
    let output = 0
    let vokal = ''
    let vokalArray = ["a", "i", "u", "e", "o"]
    let upperCase = vokalArray.map(name => name.toUpperCase())
    for (var i = 0; i < board.length; i++) {
        var boards = board[i];
        for (var j = 0; j < boards.length; j++) {
            if (vokalArray.indexOf(boards[j]) !== -1 || upperCase.indexOf(boards[j]) !== -1) {
                output += 1
                vokal += boards[j]
            }
        }
    }
    return `vokal ditemukan ${output} dan kumpulan vokal adalah ${vokal}`
}

let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b']
]
console.log(vocalSeeker(board))