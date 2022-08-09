# Sudoku App Demo

Sodoku solver that solves normal, knight, king, and "miracle" sudokus.

"Knight" means cells that are a knight's move away from each other cannot contain the same digit.

"King" means cells that are a king's move away from each other cannot contain the same digit. 
(It only applies diagonally adjacent cells because "normal" sudoku rules cover the orthogonally adjacent ones)

"Miracle" means normal + knight + king rules apply. 
Also, any two orthogonally adjacent cells cannot contain consecutive digits.

This project is inspired by the Youtube video https://www.youtube.com/watch?v=yKf9aUIxdb4 (Cracking The Cryptic)

It uses the following technologies:

- React
- Reactstrap

# Setup

```sh
npm install

npm run start
```