/*
Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
/*
Done on whiteboard first
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 3) {
    return n;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
};

var test0 = climbStairs(1);
var test1 = climbStairs(2);
var test2 = climbStairs(3);
var test3 = climbStairs(4);
var test4 = climbStairs(6);

console.log({ expect: 1, actual: test0, output: test0, pass: test0 === 1 });
console.log({ expect: 2, actual: test1, output: test1, pass: test1 === 2 });
console.log({ expect: 3, actual: test2, output: test2, pass: test2 === 3 });
console.log({ expect: 5, actual: test3, output: test3, pass: test3 === 5 });
console.log({ expect: 13, actual: test4, output: test4, pass: test4 === 13 });
