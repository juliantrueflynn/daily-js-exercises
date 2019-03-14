/*
Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/
/*
Done on whiteboard first
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length <= 1) {
    return true;
  }

  var match = s.match(/[a-zA-Z0-9]/g);

  if (match) {
    match = match.map(function(l) {
      return l.toLowerCase();
    });
  } else {
    return true;
  }

  console.log(match);

  var frontIndex = 0;
  for (var backIndex = match.length - 1; backIndex > 0; backIndex -= 1) {
    if (match[backIndex] !== match[frontIndex]) {
      return false;
    }

    frontIndex += 1;
  }

  return true;
};

// var test1 = isPalindrome('A man, a plan, a canal: Panama');
// var test2 = isPalindrome('race a car');
// var test3 = isPalindrome('');
// var test4 = isPalindrome('.,');
var test5 = isPalindrome('`l;`` 1o1 ??;l`');

// console.log({ expect: true, actual: test1, output: test1, pass: test1 === true });
// console.log({ expect: false, actual: test2, output: test2, pass: test2 === false });
// console.log({ expect: true, actual: test3, output: test3, pass: test3 === true });
// console.log({ expect: true, actual: test4, output: test4, pass: test4 === true });
console.log({ expect: true, actual: test5, output: test5, pass: test5 === true });
