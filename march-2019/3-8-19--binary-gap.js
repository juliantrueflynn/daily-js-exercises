/*
Binary Gap

Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.

If there aren't two consecutive 1's, return 0.

Example 1:
Input: 22
Output: 2

Explanation: 
22 in binary is 0b10110.
In the binary representation of 22, there are three ones, and two consecutive pairs of 1's.
The first consecutive pair of 1's have distance 2.
The second consecutive pair of 1's have distance 1.
The answer is the largest of these two distances, which is 2.

Example 2:
Input: 5
Output: 2

Explanation: 
5 in binary is 0b101.

Example 3:
Input: 6
Output: 1

Explanation: 
6 in binary is 0b110.

Example 4:
Input: 8
Output: 0

Explanation: 
8 in binary is 0b1000.
There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.
*/
/*
Done on whiteboard first
*/

var binaryGap = function(N) {
  var binary = (N).toString(2);
  var distance = 0;
  var currDistance = 0;
  var count = 0;

  for (let index = 0; binary.length > index; index += 1) {
    if (binary[index] === '1' && count === 1) {
      if (currDistance + 1 > distance) {
        distance = currDistance + 1;
      }

      count = 1;
      currDistance = 0;
    } else if (binary[index] === '1' && count === 0) {
      count += 1;
    } else if (binary[index] === '0' && count > 0) {
      currDistance += 1;
    }
  }

  return distance;
};

var test1 = binaryGap(5);
var test2 = binaryGap(6);
var test3 = binaryGap(8);
var test4 = binaryGap(13);

console.log({ expect: 2, actual: test1, pass: test1 === 2 });
console.log({ expect: 1, actual: test2, pass: test2 === 1 });
console.log({ expect: 0, actual: test3, pass: test3 === 0 });
console.log({ expect: 2, actual: test4, pass: test4 === 2 });
