/*
Buddy Strings

Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

Example 1:

Input: A = "ab", B = "ba"
Output: true

Example 2:

Input: A = "ab", B = "ab"
Output: false

Example 3:

Input: A = "aa", B = "aa"
Output: true

Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true

Example 5:

Input: A = "", B = "aa"
Output: false
 

Note:

0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist only of lowercase letters.
*/

// Done on whiteboard first

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (!A && !B || A.length !== B.length) {
    return false;
  }

  var hash = { A: {}, B: {} };
  var hasTwoLetterMatch = false;
  var stack = [];

  for (var index = 0; A.length > index; index += 1) {
    if (A[index] !== B[index]) {
      stack.push([A[index], B[index]]);
    }

    if (stack.length > 2) {
      return false;
    }

    if (hash.A[A[index]] !== undefined) {
      hash.A[A[index]] += 1;
    } else {
      hash.A[A[index]] = 1;
    }

    if (hash.B[B[index]] !== undefined) {
      hash.B[B[index]] += 1;
    } else {
      hash.B[B[index]] = 1;
    }

    if (hash.A[A[index]] > 1 && hash.B[A[index]] > 1) {
      hasTwoLetterMatch = true;
    }
  }

  return (hash.A[A[0]] === A.length && hash.B[A[0]] === B.length)
    || (stack.length && stack[0][0] === stack[1][1] && stack[0][1] === stack[1][0])
    || (!stack.length && hasTwoLetterMatch);
};

const test1 = buddyStrings('aaa', 'aaa');
const test2 = buddyStrings('ab', 'ba');
const test3 = buddyStrings('ab', 'ab');
const test4 = buddyStrings('abcd', 'badc');
const test5 = buddyStrings('', '');
const test6 = buddyStrings('a', 'a');
const test7 = buddyStrings('abab', 'abab');

console.log({ expect: true, actual: test1, pass: test1 === true });
console.log({ expect: true, actual: test2, pass: test2 === true });
console.log({ expect: false, actual: test3, pass: test3 === false });
console.log({ expect: false, actual: test4, pass: test4 === false });
console.log({ expect: false, actual: test5, pass: test5 === false });
console.log({ expect: true, actual: test6, pass: test6 === true });
console.log({ expect: true, actual: test7, pass: test7 === true });
