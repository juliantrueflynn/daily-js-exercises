/*
DI String Match

Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]

Example 1:
Input: "IDID"
Output: [0,4,1,3,2]

Example 2:
Input: "III"
Output: [0,1,2,3]

Example 3:
Input: "DDI"
Output: [3,2,0,1]

Note:
1 <= S.length <= 10000
S only contains characters "I" or "D".
*/

// Done on whiteboard first

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  const matches = [];
  let increase = -1;
  let decrease = S.length + 1;

  for (let index = 0; S.length > index; index += 1) {
    if (S[index] === 'I') {
      increase += 1;
      matches.push(increase);
    } else {
      decrease -= 1;
      matches.push(decrease);
    }
  }

  if (S[S.length - 1] === 'I') {
    increase += 1;
    matches.push(increase);
  } else {
    decrease -= 1;
    matches.push(decrease);
  }

  return matches;
};

const test1 = diStringMatch('IDID').toString();
const test2 = diStringMatch('III').toString();
const test3 = diStringMatch('DDI').toString();

console.log({ expect: '0,4,1,3,2', actual: test1, pass: test1 === '0,4,1,3,2' });
console.log({ expect: '0,1,2,3', actual: test2, pass: test2 === '0,1,2,3' });
console.log({ expect: '3,2,0,1', actual: test3, pass: test3 === '3,2,0,1' });
