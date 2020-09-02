// to do King, knight, miracle solver sudokus

const SIZE = 9;

export default class SudokuSolver {
  constructor(board, type) {
    this.board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    for (let i = 0; i < SIZE; ++i) {
      for (let j = 0; j < SIZE; ++j) {
        this.board[i][j] = board[i][j];
      }
    }
    this.type = type;
  }

  isInItsRow(row, number) {
    for (let i = 0; i < SIZE; ++i) {
      if (this.board[row][i] === number) {
        return true;
      }
    }
    return false;
  }

  isInItsCol(col, number) {
    for (let i = 0; i < SIZE; ++i) {
      if (this.board[i][col] === number) {
        return true;
      }
    }
    return false;
  }

  isInItsBox(row, col, number) {
    let initRow = row - (row % 3);
    let initCol = col - (col % 3);
    for (let i = initRow; i < initRow + 3; ++i) {
      for (let j = initCol; j < initCol + 3; ++j) {
        if (this.board[i][j] === number) {
          return true;
        }
      }
    }
    return false;
  }

  isInItsKnight(row,col,number) {
    let x = [-2,-1,1,2,2,1,-1,-2];
    let y = [1,2,2,1,-1,-2,-2,-1];
    for(let k = 0; k<8;++k) {
      let i = row+x[k];
      let j = col+y[k];
      if(i>=0 && j>=0 && i<SIZE && j<SIZE && this.board[i][j] === number) {
        return true;
      }
    }
    return false;
  }

  isInItsKing(row,col,number) {
    //to do
  }

  isAConsecutiveOrhtogonallyAdjacent(row,col,number) {
    //to do
  }

  isOkToPlace(row, col, number) {
    return (
      !this.isInItsRow(row, number) &&
      !this.isInItsCol(col, number) &&
      !this.isInItsBox(row, col, number)
    );
  }

  solve() {
    for (let i = 0; i < SIZE; ++i) {
      for (let j = 0; j < SIZE; ++j) {
        if (!this.board[i][j]) {
          for (let n = 1; n <= SIZE; ++n) {
            if (this.isOkToPlace(i, j, n)) {
              this.board[i][j] = n;
              if (this.solve()) {
                return true;
              } else {
                this.board[i][j] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  display() {
    let line = "";
    for (let i = 0; i < SIZE; ++i) {
      for (let j = 0; j < SIZE; ++j) {
        line = line.concat(this.board[i][j], " ");
      }
      console.log(line);
      line = "";
    }
  }
}
