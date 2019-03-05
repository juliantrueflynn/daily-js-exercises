/*
Length of Last Word

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5
*/

var lengthOfLastWord = function(s) {
  var words = s.split(' ').filter(function(str) { return str !== ''; });
  var last = words.pop();

  return last ? last.length : 0;
};

var test1 = lengthOfLastWord("Hello World");
var test2 = lengthOfLastWord("a ");

console.log({ expect: 5, output: test1, pass: test1 === 5 });
console.log({ expect: 1, output: test2, pass: test2 === 1 });
