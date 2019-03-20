/*
N-Repeated Element in Size 2N Array

In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Example 1:
Input: [1,2,3,3]
Output: 3

Example 2:
Input: [2,1,2,5,3,2]
Output: 2

Example 3:
Input: [5,1,5,2,5,3,5,4]
Output: 5

Note:
4 <= A.length <= 10000
0 <= A[i] < 10000
A.length is even
*/

// Done on whiteboard first

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  var target = A.length / 2;
  var hashMap = {};

  for (var index = 0; A.length > index; index += 1) {
    if (hashMap[A[index]]) {
      hashMap[A[index]] += 1;
    } else {
      hashMap[A[index]] = 1;
    }

    if (hashMap[A[index]] === target) {
      return A[index];
    }
  }

  return -1;
};

const test1 = repeatedNTimes([1,2,3,3]);
const test2 = repeatedNTimes([5,1,5,2,5,3,5,4]);
const test3 = repeatedNTimes([5,2,5,2,5,2,5,4]);

console.log({ expect: 3, actual: test1, pass: test1 === 3 });
console.log({ expect: 5, actual: test2, pass: test2 === 5 });
console.log({ expect: 5, actual: test3, pass: test3 === 5 });
