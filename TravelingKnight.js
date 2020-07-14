// chessboard size
var n = 8;

function isSafe(x, y, board) {
  //  to check x and y are valid index

  if (x >= 0 && y >= 0 && x < n && y < n && board[x][y] == -1) {
    return true;
  } else {
    return false;
  }
}

function printSolution(n, board) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(`${board[i][j]},end = " "`);
    }
  }
}

function solveKT(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      return -1;
    }
  }

  let moveX = [2, 1, -1, -2, -2, -1, 1, 2];
  let moveY = [1, 2, 2, 1, -1, -2, -2, -1];

  board[0][0] = 0;
  let pos = 1;
  if (!solveKTuntil(n, board, 0, 0, moveX, moveY, pos)) {
    return "solution doesnt exist";
  } else {
    printSolution(n, board);
  }
}

function solveKTuntil(n, board, currX, currY, moveX, moveY, pos) {
  if (pos == n ** 2) {
    return true;
  }
  for (let k = 0; k < 8; k++) {
    let newX = currX + moveX[k];
    let newY = currY + moveY[k];
    if (isSafe(newX, newY, board)) {
      board[newX][newY] = pos;
      if (solveKTuntil(n, board, newX, newY, moveX, moveY, pos + 1)) {
        return true;
      }
      board[newX][newY];
    }
    return false;
  }
}
