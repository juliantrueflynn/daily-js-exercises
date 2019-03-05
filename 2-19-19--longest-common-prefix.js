/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function(strs) {
  var longest = '';

  if (!strs[0]) {
    return longest;
  }

  var commonPrefix = strs[0];
  var restStrs = strs.slice(1);
  var commonPrefixLetters = '';

  var matchHash = commonPrefix.split('').reduce((acc, curr, index) => {
    if (acc[commonPrefixLetters]) {
      commonPrefixLetters = acc[commonPrefixLetters] + commonPrefix[index];
    } else {
      commonPrefixLetters = commonPrefix[index];
    }

    acc[commonPrefixLetters] = commonPrefixLetters;
    return acc;
  }, {});

  var keys = Object.keys(matchHash);

  for (var index = 0; commonPrefix.length > index; index += 1) {
    var currKey = keys[index];

    for (var subIndex = 0; restStrs.length > subIndex; subIndex += 1) {
      var regex = RegExp(`^${currKey}`, 'g');

      if (!regex.test(restStrs[subIndex])) {
        return longest;
      }
    }

    longest = currKey;
  }

  return commonPrefix;
};

console.log('fl ===', longestCommonPrefix(['flower', 'flow', 'flight']));
console.log('"" ===', longestCommonPrefix(['dog', 'racecar', 'car']));
console.log('"" ===', longestCommonPrefix([]));

