/*
Squares of a Sorted Array

Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Note:
1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
*/

// Done on whiteboard first

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  var squares = [];
  var negsStack = [];

  A.forEach(function(n) {
    var sq = Math.pow(n, 2);

    if (n < 0) {
      negsStack.push(sq);
    } else if (negsStack.length && sq >= negsStack[negsStack.length - 1]) {
      while (sq >= negsStack[negsStack.length - 1]) {
        squares.push(negsStack.pop());
      }
    }

    if (n >= 0) {
      squares.push(sq);
    }
  });

  if (negsStack.length) {
    while(negsStack.length) {
      squares.push(negsStack.pop());
    }
  }

  return squares;
};

const test1 = sortedSquares([-4,-1,0,3,10]).toString();
const test2 = sortedSquares([-7,-3,2,3,11]).toString();
const test3 = sortedSquares([-1]).toString();
const test4 = sortedSquares([-2,-1,3]).toString();
const test5 = sortedSquares([-3,-1,0]).toString();

console.log({ expect: '0,1,9,16,100', actual: test1, pass: test1 === '0,1,9,16,100' });
console.log({ expect: '4,9,9,49,121', actual: test2, pass: test2 === '4,9,9,49,121' });
console.log({ expect: '1', actual: test3, pass: test3 === '1' });
console.log({ expect: '1,4,9', actual: test4, pass: test4 === '1,4,9' });
console.log({ expect: '0,1,9', actual: test5, pass: test5 === '0,1,9'});