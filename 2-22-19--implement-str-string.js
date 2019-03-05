/*
Implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

var strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }

  var needleLength = needle.length - 1;

  for (let index = 0; haystack.length > index; index += 1) {
    var curr = haystack[index];

    if (curr === needle[0] && needle.length === 1) {
      return index;
    }

    if (
      curr === needle[0]
      && haystack[index + needleLength] === needle[needleLength]
    ) {
      var shifted = haystack.slice(index, index + needle.length);

      if (shifted === needle) {
        return index;
      }
    }
  }

  return -1;
};

var test1 = strStr('hello', 'll');
var test2 = strStr('aaaaa', 'bba');
var test3 = strStr('hhhh', 'hiya');
var test4 = strStr('', '');

console.log({ expect: 2, output: test1, pass: test1 === 2 });
console.log({ expect: -1, output: test2, pass: test2 === -1 });
console.log({ expect: -1, output: test3, pass: test3 === -1 });
console.log({ expect: -1, output: test4, pass: test4 === -1 });
