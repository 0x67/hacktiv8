let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b']
]
//let vocal = 'aAiIuUeEoO'
let output = 0
let vokal = ''
///////////////////////////
for (var i = 0; i < board.length; i++) {
    var boards = board[i];
    for (var j = 0; j < boards.length; j++) {
        if (boards[j] === 'a' || boards[j] == 'i' || boards[j] == 'u' || boards[j] == 'e' || boards[j] == 'o' ||
            boards[j] == 'a'.toUpperCase() || boards[j] == 'i'.toUpperCase() || boards[j] == 'u'.toUpperCase() || boards[j] == 'e'.toUpperCase() || boards[j] == 'o'.toUpperCase()) {
            output += 1
            vokal += boards[j]
        }
    }
}
console.log(`vokal ditemukan ${output} dan kumpulan vokal adalah ${vokal}`)
