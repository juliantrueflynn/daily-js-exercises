/*
*=== Monday February 13th  - Daily Programmer ===*

*[Island Count]*

Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).
*/

const islandCount = (binaryMatrix) => {
  let count = 0;

  binaryMatrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const prevCol = binaryMatrix[rowIndex][colIndex - 1];
      const nextCol = binaryMatrix[rowIndex][colIndex + 1];
      const prevRow = binaryMatrix[rowIndex - 1];

      if (col === 1) {
        let flag;

        if (!prevCol && (!prevRow || (!prevRow[colIndex] && !prevRow[colIndex + 1]))) {
          flag = true;
        }

        if (!prevCol && !nextCol && (!prevRow || !prevRow[colIndex])) {
          flag = true;
        }
        
        if (flag) {
          count += 1;
        }
      }
    });
  });

  return count;
};

const input = [ 
  [0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 0],
];

const input2 = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1]
];

const input3 = [
  [0, 1, 0, 1],
  [0, 0, 1, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
];

console.log('7 ===', islandCount(input));
console.log('6 ===', islandCount(input2));
console.log('4 ===', islandCount(input3));
