/*
*[Add to Array-Form of Integer]*

For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if `X = 1231`, then the array form is `[1,2,3,1]`.

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

Examples
Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Input: A = [2,7,4], K = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

Input: A = [2,1,5], K = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021

Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000

Input: A = [0], K = 23
Output: [2, 3]

Completed estimated time: ~6 minutes
*/

const arrayFormInteger = (a, k) => {
  const aToInteger = parseInt(a.join(''), 10);
  const kToInteger = parseInt(k, 10);
  const sum = aToInteger + kToInteger;

  return sum.toString().split('').map(Number);
};

console.log('[1,2,3,4] ===', arrayFormInteger([1,2,0,0], 34));
console.log('[4,5,5] ===', arrayFormInteger([2,7,4], 181));
console.log('[1,0,0,0,0,0,0,0,0,0,0]', arrayFormInteger([9,9,9,9,9,9,9,9,9,9], 1));
console.log('[2,3] ===', arrayFormInteger([0], 23));
