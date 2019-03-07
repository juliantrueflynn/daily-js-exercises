/*
Find Pivot Index

Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

Example 1:

Input: 
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: 
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.

Example 2:

Input: 
nums = [1, 2, 3]
Output: -1
Explanation: 
There is no index that satisfies the conditions in the problem statement.
 
Note:

The length of nums will be in the range [0, 10000].
Each element nums[i] will be an integer in the range [-1000, 1000].
*/
/*
Done on whiteboard first
*/

// Time complexity: O(n)
// Space complexity: O(n)

var pivotIndex = function(nums) {
  let sum = nums.reduce(function(acc, curr) { return acc + curr; }, 0);
  let leftSum = 0;

  for (let index = 0; nums.length > index; index += 1) {
    sum -= nums[index];

    if (sum === leftSum) {
      return index;
    } else {
      leftSum += nums[index];
    }
  }

  return -1;
};

const test1 = pivotIndex([1, 7, 3, 6, 5, 6]);
const test2 = pivotIndex([1, 2, 3]);

console.log({ expect: 3, actual: test1, pass: 3 === test1 });
console.log({ expect: -1, actual: test2, pass: -1 === test2 });
