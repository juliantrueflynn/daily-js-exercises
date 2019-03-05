/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Examples:

Input: [1,3,5,6], 5
Output: 2

Input: [1,3,5,6], 2
Output: 1

Input: [1,3,5,6], 7
Output: 4

Input: [1,3,5,6], 0
Output: 0
*/

var searchInsert = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var center = 0;

  if (nums[0] > target) {
    return 0;
  }

  if (target > nums[right]) {
    return right + 1;
  }

  while (left <= right) {
    var centerIndex = Math.floor((left + right) / 2);
    center = nums[centerIndex];

    if (target > center) {
      left = centerIndex + 1;
    } else if (center > target) {
      right = centerIndex - 1;
    } else {
      return centerIndex;
    }
  }

  if (left > right) {
    return left;
  }

  return center;
};

console.log({ expect: 2, input: '[1,3,5,6], 5', output: searchInsert([1,3,5,6], 5), passes: searchInsert([1,3,5,6], 5) === 2 });
console.log({ expect: 1, input: '[1,3,5,6], 2', output: searchInsert([1,3,5,6], 2), passes: searchInsert([1,3,5,6], 2) === 1 });
console.log({ expect: 4, input: '[1,3,5,6], 7', output: searchInsert([1,3,5,6], 7), passes: searchInsert([1,3,5,6], 7) === 4 });
console.log({ expect: 0, input: '[1,3,5,6], 0', output: searchInsert([1,3,5,6], 0), passes: searchInsert([1,3,5,6], 0) === 0 });
console.log({ expect: 0, input: '[1,2,3], 1', output: searchInsert([1,2,3], 1), passes: searchInsert([1,2,3], 1) === 0 });
console.log({ expect: 2, input: '[1,3,5], 4', output: searchInsert([1,3,5], 4), passes: searchInsert([1,3,5], 4) === 2 });
console.log({ expect: 0, input: '[1], 1', output: searchInsert([1], 1), passes: searchInsert([1], 1) === 0 });
console.log({ expect: 1, input: '[1], 1', output: searchInsert([1], 2), passes: searchInsert([1], 2) === 1 });
console.log({ expect: 1, input: '[1,3], 3', output: searchInsert([1,3], 3), passes: searchInsert([1,3], 3) === 1 });
console.log({ expect: 3, input: '[2,7,8,9,10], 9', output: searchInsert([2,7,8,9,10], 3), passes: searchInsert([2,7,8,9,10], 9) === 3 });
console.log({ expect: 2, input: '[1,2,4,6,7], 3', output: searchInsert([1,2,4,6,7], 3), passes: searchInsert([1,2,4,6,7], 3) === 2 });
