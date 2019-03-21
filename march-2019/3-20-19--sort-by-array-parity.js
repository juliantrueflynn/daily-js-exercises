/*
Sort Array By Parity

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:
Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Note:
1 <= A.length <= 5000
0 <= A[i] <= 5000
*/

// Done on whiteboard first

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  var stack = [];
  var sorted = [];

  A.forEach(function(n) {
    if (n % 2 === 0) {
      sorted.push(n);
    } else {
      stack.push(n);
    }
  });

  while (stack.length) {
    sorted.push(stack.pop());
  }

  return sorted;
};

const test1 = sortArrayByParity([3,1,2,4]).toString();

console.log({ expect: '2,4,1,3', actual: test1, pass: test1 === '2,4,1,3' });