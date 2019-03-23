/*
Available Captures for Rook

On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.
*/

// Done on whiteboard first

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let captures = 0;
  let rookPos = [];
  let lastVal;

  for (let row = 0; 8 > row; row += 1) {
    const rookColIdx = board[row].indexOf('R');
    if (rookColIdx >= 0) {
      rookPos.push(row);
      rookPos.push(rookColIdx);
      break;
    }
  }

  for (let idx = 0; 8 > idx; idx += 1) {
    const boardPos = board[rookPos[0]][idx];

    if (idx > rookPos[1] && boardPos !== '.') {
      if (boardPos === 'B') {
        lastVal = boardPos;
      }

      if (boardPos === 'p' && !lastVal) {
        captures += 1;
      }

      break;
    } else if (idx < rookPos[1] && boardPos !== '.') {
      lastVal = boardPos;
    } else if (boardPos === 'R') {
      if (lastVal === 'p') {
        captures += 1;
      }

      lastVal = null;
    }
  }

  lastVal = null;

  for (let idx = 0; 8 > idx; idx += 1) {
    const boardPos = board[idx][rookPos[1]];

    if (idx > rookPos[0] && boardPos !== '.') {
      if (boardPos === 'B') {
        lastVal = boardPos;
      }

      if (boardPos === 'p' && !lastVal) {
        captures += 1;
      }

      break;
    } else if (idx < rookPos[0] && boardPos !== '.') {
      lastVal = boardPos;
    } else if (boardPos === 'R') {
      if (lastVal === 'p') {
        captures += 1;
      }

      lastVal = null;
    }
  }

  return captures;
};

const input1 = [
  ['.','.','.','.','.','.','.','.'],
  ['.','.','.','p','.','.','.','.'],
  ['.','.','.','R','.','.','.','p'],
  ['.','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.'],
  ['.','.','.','p','.','.','.','.'],
  ['.','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.']
];
const input2 = [
  ['.','.','.','.','.','.','.','.'],
  ['.','p','p','p','p','p','.','.'],
  ['.','p','p','B','p','p','.','.'],
  ['.','p','B','R','B','p','.','.'],
  ['.','p','p','B','p','p','.','.'],
  ['.','p','p','p','p','p','.','.'],
  ['.','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','.','.','.']
];
const input3 = [
  ['.','.','.','.','.','.','.','.'],
  ['.','.','.','p','.','.','.','.'],
  ['.','.','.','B','.','.','.','.'],
  ['.','p','B','R','p','B','p','.'],
  ['.','.','.','p','p','.','.','.'],
  ['.','.','.','B','.','.','.','.'],
  ['.','.','.','p','.','.','.','.'],
  ['.','.','.','.','.','.','.','.']
];
const input4 = [
  ['.','.','.','.','.','.','.','.'],
  ['.','.','.','p','.','.','.','.'],
  ['.','.','p','p','.','.','.','.'],
  ['.','p','p','R','.','p','.','p'],
  ['.','.','.','p','.','.','.','.'],
  ['.','.','.','.','.','p','.','.'],
  ['.','.','.','p','.','.','.','.'],
  ['.','.','.','.','.','.','.','.']
];

const test1 = numRookCaptures(input1);
const test2 = numRookCaptures(input2);
const test3 = numRookCaptures(input3);
const test4 = numRookCaptures(input4);

console.log({ expect: 3, actual: test1, pass: test1 === 3 });
console.log({ expect: 0, actual: test2, pass: test2 === 0 });
console.log({ expect: 2, actual: test3, pass: test3 === 2 });
console.log({ expect: 4, actual: test4, pass: test4 === 4 });
