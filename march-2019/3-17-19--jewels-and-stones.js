/*
Jewels and Stones

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:

Input: J = "z", S = "ZZ"
Output: 0

Note:
S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

// Done on whiteboard first

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var count = 0;

  if (!J.length || !S.length) {
    return count;
  }

  var hash = {};

  for (var index = 0; J.length > index; index += 1) {
    hash[J[index]] = J[index];
  }

  for (index = 0; S.length > index; index += 1) {
    if (hash[S[index]]) {
      count += 1;
    }
  }

  return count;
};

const test1 = numJewelsInStones('aA', 'aAAbbbb');
const test2 = numJewelsInStones('z', 'ZZ');
const test3 = numJewelsInStones('', '');
const test4 = numJewelsInStones('d', '');
const test5 = numJewelsInStones('', 'wef');

console.log({ expect: 3, actual: test1, pass: test1 === 3 });
console.log({ expect: 0, actual: test2, pass: test2 === 0 });
console.log({ expect: 0, actual: test3, pass: test3 === 0 });
console.log({ expect: 0, actual: test4, pass: test4 === 0 });
console.log({ expect: 0, actual: test5, pass: test5 === 0 });
