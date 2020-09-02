import React, { useState } from "react";
import SudokuSolver from "./sudoku/sudokuSolver";
import SudokuBoard from "./components/SudokuBoard";
import { Container, Button } from "reactstrap";
function App() {
  // let board = [
  //   [0,0,0,0,0,0,0,0,0],
  //   [0,0,0,0,0,0,0,0,0],
  //   [0,0,0,0,0,0,0,0,0],
  //   [0,0,0,0,0,0,0,0,0],
  //   [0,0,0,0,0,0,0,0,0],
  //   [0,0,0,0,0,0,0,0,0],
  //   [0,0,0,0,0,0,0,0,0],
  //   [0,0,0,0,0,0,0,0,0],
  //   [0,0,0,0,0,0,0,0,0],
  // ]
  const [board, setBoard] = useState([
    // [0, 0, 0, 2, 6, 0, 7, 0, 1],
    // [6, 8, 0, 0, 7, 0, 0, 9, 0],
    // [1, 9, 0, 0, 0, 4, 5, 0, 0],
    // [8, 2, 0, 1, 0, 0, 0, 4, 0],
    // [0, 0, 4, 6, 0, 2, 9, 0, 0],
    // [0, 5, 0, 0, 0, 3, 0, 2, 8],
    // [0, 0, 9, 3, 0, 0, 0, 7, 4],
    // [0, 4, 0, 0, 5, 0, 0, 3, 6],
    // [7, 0, 3, 0, 1, 8, 0, 0, 0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
  ]);
  
  const handleSolve = () => {
    let sudokuSolver = new SudokuSolver(board, null);
    sudokuSolver.solve();
    setBoard(sudokuSolver.board);
    console.log(board);
  };
  return (
    <Container>
      <SudokuBoard board={board} setBoard={setBoard} />
      <Button onClick={handleSolve}>Solve</Button>
    </Container>
  );
}

export default App;
