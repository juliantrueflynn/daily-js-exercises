/*
Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Note: Your solution should be in logarithmic time complexity.
*/

var trailingZeroes = function(n) {
  if (n < 5) {
    return 0;
  }
  
  return n / 5 + trailingZeroes(n / 5) | 0;
};

var test1 = trailingZeroes(3);
var test2 = trailingZeroes(5);
var test3 = trailingZeroes(1808548329);

console.log({ expect: 0, output: test1, pass: test1 === 0 });
console.log({ expect: 1, output: test2, pass: test2 === 1 });
console.log({ expect: 452137076, output: test3, pass: test3 === 452137076 });
