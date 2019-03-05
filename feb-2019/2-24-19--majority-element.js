/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3

Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function(nums) {
  var hash = {};
  var mostPopular;

  for (let index = 0; nums.length > index; index += 1) {
    if (hash[nums[index]] !== undefined) {
      hash[nums[index]] += 1;
    } else {
      hash[nums[index]] = 0;
    }

    if (!hash[mostPopular] || hash[mostPopular] < hash[nums[index]]) {
      mostPopular = nums[index];
    }
  }

  return mostPopular;
};

var test1 = majorityElement([3,2,3]);
var test2 = majorityElement([2,2,1,1,1,2,2]);
var test3 = majorityElement([3,3,4]);

console.log({ expect: 3, output: test1, pass: test1 === 3 });
console.log({ expect: 2, output: test2, pass: test2 === 2 });
console.log({ expect: 3, output: test3, pass: test3 === 3 });
