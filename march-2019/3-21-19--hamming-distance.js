/*
Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
Input: x = 1, y = 4
Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

// Done on whiteboard first

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let diffCounter = 0;

  if (x === y) {
    return diffCounter;
  }

  let binX = (x).toString(2);
  let binY = (y).toString(2);
  let length = binX.length > binY.length ? binX.length : binY.length;

  if (binX.length !== binY.length) {
    while (binX.length !== length || binY.length !== length) {
      if (binX.length > binY.length) {
        binY = '0' + binY;
      } else {
        binX = '0' + binX;
      }
    }
  }

  for (let idx = length - 1; idx >= 0; idx -= 1) {
    if (
      (binX[idx] === '1' && binY[idx] === '0')
      || (binY[idx] === '1' && binX[idx] === '0')
    ) {
      diffCounter += 1;
    }
  }

  return diffCounter;
};

const test1 = hammingDistance(1, 4);
const test2 = hammingDistance(10, 10);
const test3 = hammingDistance(100, 11);
const test4 = hammingDistance(0, 0);
const test5 = hammingDistance(93, 73);

console.log({ expect: 2, actual: test1, pass: test1 === 2 });
console.log({ expect: 0, actual: test2, pass: test2 === 0 });
console.log({ expect: 6, actual: test3, pass: test3 === 6 });
console.log({ expect: 0, actual: test4, pass: test4 === 0 });
console.log({ expect: 2, actual: test5, pass: test5 === 2 });
