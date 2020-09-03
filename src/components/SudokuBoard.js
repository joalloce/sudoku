import React from 'react';
import Square from './Square';

const SudokuBoard = ({board,setBoard,disabled}) => {
  return (
    <div className="grid">
      {board.map((line,i) => line.map((number,j)=>(<Square key={`${i}-${j}`} i={i} j={j} disabled={disabled} setBoard={setBoard} number={number}/>)))}
    </div>
  );
};

export default SudokuBoard;
