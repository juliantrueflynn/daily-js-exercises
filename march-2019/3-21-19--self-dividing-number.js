/*
Self Dividing Numbers

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

Note:
The boundaries of each input argument are 1 <= left <= right <= 10000.
*/

// Done on whiteboard first

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const result = [];

  for (let idx = left; right >= idx; idx += 1) {
    if (idx !== 0 && idx % 10 !== 0 && 10 - idx > 0) {
      result.push(idx);
    } else if (idx !== 0 && idx % 10 !== 0 && 10 - idx < 0) {
      const numStr = (idx).toString();
      let isSelfDividing = true;

      for (let subIdx = 0; numStr.length > subIdx; subIdx += 1) {
        if (idx % numStr[subIdx] !== 0) {
          isSelfDividing = false;
          break;
        }
      }

      if (isSelfDividing) {
        result.push(idx);
      }
    }
  }

  return result;
};

const test1 = selfDividingNumbers(1, 22).toString();

console.log({ expect: '1,2,3,4,5,6,7,8,9,11,12,15,22', actual: test1, pass: test1 === '1,2,3,4,5,6,7,8,9,11,12,15,22' });