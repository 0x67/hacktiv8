let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b']
  ]

for (var i = 0; i < board.length; i++) {
    var boards = board[i];
    for (var j = 0; j < board.length; j++) {
        console.log(`board [${i}][${j}] = ${board[j]}`)
    }
}