/*
Find Common Letters

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Example 1:
Input: ['bella','label','roller']
Output: ['e','l','l']

Example 2:
Input: ['cool','lock','cook']
Output: ['c','o']

Note:
1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter
*/

// Done on whiteboard first

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  const dups = [];
  const hash = {};

  for (let idx = 0; A[0].length > idx; idx += 1) {
    if (hash[A[0][idx]]) {
      hash[A[0][idx]] += 1;
    } else {
      hash[A[0][idx]] = 1;
    }
  }

  for (let idx = 1; A.length > idx; idx += 1) {
    const tmpHash = {};

    for (let subIdx = 0; A[idx].length > subIdx; subIdx += 1) {
      if (tmpHash[A[idx][subIdx]]) {
        tmpHash[A[idx][subIdx]] += 1;
      } else {
        tmpHash[A[idx][subIdx]] = 1;
      }
    }

    Object.keys(hash).forEach(function(key) {
      if (tmpHash[key]) {
        if (tmpHash[key] < hash[key]) {
          hash[key] = tmpHash[key];
        }
      } else {
        hash[key] = 0;
      }
    });
  }

  Object.keys(hash).forEach(function(key) {
    if (hash[key]) {
      for (let idx = 0; hash[key] > idx; idx += 1) {
        dups.push(key);
      }
    }
  });

  return dups;
};

const test1 = commonChars(['bella','label','roller']).toString();
const test2 = commonChars(['cool','lock','cook']).toString();
const test3 = commonChars(['acabcddd','bcbdbcbd','baddbadb','cbdddcac','aacbcccd','ccccddda','cababaab','addcaccd']).toString();

console.log({ expect: 'e,l,l', actual: test1, pass: test1 === 'e,l,l' });
console.log({ expect: 'c,o', actual: test2, pass: test2 === 'c,o' });
console.log({ expect: '', actual: test3, pass: test3 === '' });
