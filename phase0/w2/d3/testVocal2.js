function vocalSeeker(board) {
    let output = 0
    let vokal = ''
    let vocal = 'aAiIuUeEoO'
    for (var i = 0; i < board.length; i++) { // loop through to board[[i][]]
        var boards = board[i];
        for (var j = 0; j < boards.length; j++) { //loop through to boards[[i][j]]
            for (var k = 0; k < vocal.length; k++) // vocal check loop
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