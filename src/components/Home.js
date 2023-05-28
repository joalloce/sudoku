import React, { useState } from "react";
import SudokuSolver from "../sudoku/sudokuSolver";
import SudokuBoard from "./SudokuBoard";
import {
  Container,
  Button,
  Col,
  Row,
  Input,
  Form,
  Label,
  FormGroup,
  UncontrolledTooltip,
} from "reactstrap";

function Home() {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  let sudokuSolver = new SudokuSolver();

  const [toggleButton, setToggleButton] = useState(true);
  const [sudokuType, setSudokuType] = useState(SudokuSolver.TYPES.NORMAL);

  const handleSolve = () => {
    setToggleButton(false);
    sudokuSolver.setBoard(board);
    sudokuSolver.setType(sudokuType);
    sudokuSolver.solve();
    setBoard(sudokuSolver.board);
  };

  const handleReset = () => {
    setToggleButton(true);
    setBoard([
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  };

  const handleTypeChange = (e) => {
    if (e.target.value === "normal") {
      setSudokuType(SudokuSolver.TYPES.NORMAL);
    } else if (e.target.value === "knight") {
      setSudokuType(SudokuSolver.TYPES.KNIGHT);
    } else if (e.target.value === "king") {
      setSudokuType(SudokuSolver.TYPES.KING);
    } else if (e.target.value === "miracle") {
      setSudokuType(SudokuSolver.TYPES.MIRACLE);
    }
  };
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs="auto">
            <SudokuBoard
              board={board}
              setBoard={setBoard}
              disabled={!toggleButton}
            />
          </Col>
          <Col xs="3" className="mt-3">
            <Container>
              <Row>
                <a href="https://github.com/joalloce/sudoku">Code</a>
              </Row>
              <Row>
                <Button
                  className="mt-1"
                  color="primary"
                  disabled={!toggleButton}
                  onClick={handleSolve}
                >
                  Solve
                </Button>
              </Row>
              <Row>
                <Button
                  className="mt-1"
                  color="secondary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Row>
              <Row className="mt-1">
                <Form>
                  <FormGroup>
                    <Label
                      className="col-form-label"
                      style={{ textDecoration: "underline" }}
                    >
                      Sudoku Type:
                    </Label>
                    <Col onChange={handleTypeChange}>
                      <FormGroup>
                        <Label>
                          <Input
                            type="radio"
                            value="normal"
                            name="radio"
                            defaultChecked
                          />{" "}
                          <span id="tooltipNormal">Normal</span>
                        </Label>
                        <UncontrolledTooltip
                          placement="right"
                          target="tooltipNormal"
                        >
                          Normal sudoku rules apply.
                        </UncontrolledTooltip>
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <Input type="radio" value="knight" name="radio" />{" "}
                          <span id="tooltipKnight">Knight</span>
                        </Label>
                        <UncontrolledTooltip
                          placement="right"
                          target="tooltipKnight"
                        >
                          Normal sudoku rules apply. Two cells separated by a
                          knight's move cannot cointain the same digit.
                        </UncontrolledTooltip>
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <Input type="radio" value="king" name="radio" />{" "}
                          <span id="tooltipKing">King</span>
                        </Label>
                        <UncontrolledTooltip
                          placement="right"
                          target="tooltipKing"
                        >
                          Normal sudoku rules apply. Two cells separated by a
                          king's move cannot cointain the same digit.
                        </UncontrolledTooltip>
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <Input type="radio" value="miracle" name="radio" />{" "}
                          <span id="tooltipMiracle">Miracle</span>
                        </Label>
                        <UncontrolledTooltip
                          placement="right"
                          target="tooltipMiracle"
                        >
                          Normal sudoku rules apply. Two cells separated by a
                          king's move or a knight's move cannot cointain the
                          same digit. Two orthogonally adjacent cells cannot
                          contain consecutive digits.
                        </UncontrolledTooltip>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
