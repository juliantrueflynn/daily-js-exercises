/*
Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

// var maxSubArray = function(nums) {
// };

var maxSubArray = function(nums) {
  var leftIndex = 0;
  var rightIndex = nums.length - 1;

  if (nums.length === 1 || Math.max(...nums) < 1) {
    return 0;
  }

  var middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  var leftMidIndex = Math.floor((leftIndex + middleIndex) / 2);
  var rightMidIndex = Math.floor((middleIndex + rightIndex) / 2);

  var leftArr = maxSubArray(nums.slice(0, middleIndex));
  var rightArr = maxSubArray(nums.slice(middleIndex));
  var middleArr = maxSubArray(nums.slice(leftMidIndex, rightMidIndex));

  var getSum = function(arr) {
    return arr.reduce(function(acc, curr) {
      return acc + curr;
    }, 0);
  };

  console.log({ leftArr, rightArr, middleArr });

  var leftSum = getSum(leftArr);
  var rightSum = getSum(rightArr);
  var midSum = getSum(middleArr);

  if (leftSum > rightSum && leftSum > midSum) {
    return leftSum;
  }

  if (rightSum > leftSum && rightSum > midSum) {
    return rightSum;
  }

  return midSum;
};

var test1 = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
var test2 = maxSubArray([4,-1,-3,4,-1,2,1,-5,4]);

console.log({ expect: 6, output: test1, pass: test1 === 6 });
// console.log({ expect: 6, output: test1, pass: test1 === 6 });
