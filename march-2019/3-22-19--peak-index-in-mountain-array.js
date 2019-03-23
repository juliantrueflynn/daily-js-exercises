/*
Peak Index in a Mountain Array

Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:
Input: [0,1,0]
Output: 1

Example 2:
Input: [0,2,1,0]
Output: 1

Note:
3 <= A.length <= 10000
0 <= A[i] <= 10^6
A is a mountain, as defined above.
*/

// Done on whiteboard first

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let peakIndex = 0;
  let peak = 0;

  for (let index = 1; A.length - 1 > index; index += 1) {
    if (A[index] > peak) {
      peak = A[index];
      peakIndex = index;
    }
  }

  return peakIndex;
};

const test1 = peakIndexInMountainArray([0,1,0]);
const test2 = peakIndexInMountainArray([0,2,1,0]);
const test3 = peakIndexInMountainArray([0,1,2,0]);

console.log({ expect: 1, actual: test1, pass: test1 === 1 });
console.log({ expect: 1, actual: test2, pass: test2 === 1 });
console.log({ expect: 2, actual: test3, pass: test3 === 2 });