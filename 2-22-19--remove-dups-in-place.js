/*
Remove Duplicates from Sorted Array

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.

Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
*/

// var removeDuplicates = function(nums) {
//   if (nums[0] === nums[nums.length - 1]) {
//     return 1;
//   }

//   for (let index = 0; nums.length > index; index += 1) {
//     var prev = nums[index - 1];
//     var next = nums[index + 1];
//     var curr = nums[index];

//     if (next === prev) {
//       nums.splice(index - 1, 2);
//     } else if (prev === curr || next === curr) {
//       nums.splice(index, 1);
//     }
//   }

//   console.log(nums);

//   return nums.length;
// };

var removeDuplicates = function(nums) {
  if (nums[0] === nums[nums.length - 1]) {
    return 1;
  }

  var head = 0;

  while (nums.length > head) {
    var prev = nums[head - 1];
    var next = nums[head + 1];
    var curr = nums[head];

    if (prev === curr || next === curr) {
      if (next === prev) {
        nums.splice(head, 2);
      } else {
        nums.splice(head, 1);
      }

      head -= 1;
    }

    head += 1;
  }

  return nums.length;
};

var test1 = removeDuplicates([1,1,2]);
var test2 = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
var test3 = removeDuplicates([1,1,1,1]);
var test4 = removeDuplicates([0,0,0,0,3]);
var test5 = removeDuplicates([0,0,0,0,0]);
var test6 = removeDuplicates([-3,-1,-1,0,0,0,0,0,2]);

console.log({ output: test1, expect: 2, pass: test1 === 2 });
console.log({ output: test2, expect: 5, pass: test2 === 5 });
console.log({ output: test3, expect: 1, pass: test3 === 1 });
console.log({ output: test4, expect: 2, pass: test4 === 2 });
console.log({ output: test5, expect: 1, pass: test5 === 1 });
console.log({ output: test6, expect: 4, pass: test6 === 4});