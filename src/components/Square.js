import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
const Square = ({ number,setBoard,i,j }) => {
  const [value, setValue] = useState(number);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    setValue(number);
  }, [number]);

  const validate = (e) => {
    let inputValue = parseInt(e.target.value);
    if (
      (Number.isInteger(inputValue) && inputValue >= 0 && inputValue <= 9) ||
      e.target.value === ""
    ) {
      setValid(true);
      if(e.target.value==="") {
        inputValue = 0;
      }
      setBoard(prev=>{
        console.log(prev)
        prev[i][j] = inputValue;
        return prev;
      })
    } else {
      setValid(false);
    }
    setValue(e.target.value);
  };
  return (
    <div className={`square ${valid ? "" : "bad"}`}>
      <Input
        className={`inputNumber ${valid ? "" : "bad"}`}
        type="text"
        maxLength="1"
        value={value}
        onChange={(e) => validate(e)}
      />
    </div>
  );
};

export default Square;
