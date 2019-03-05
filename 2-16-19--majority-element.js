/*
*[Majority Element]*

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.

Example:
Input: [3,2,3]
Output: 3

Input: [2,2,1,1,1,2,2]
Output: 2

Time to complete: ~9 minutes
*/

const majorityElement = (elements) => {
  const hash = elements.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  let popularElement = 0;

  elements.forEach((element) => {
    hash[element] += 1;

    if (hash[element] > popularElement) {
      popularElement = element;
    }
  });

  return popularElement;
};

console.log('3 ===', majorityElement([3,2,3]));
console.log('2 ===', majorityElement([2,2,1,1,1,2,2]));
