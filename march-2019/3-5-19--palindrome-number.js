/*
*[Palindrome Number]*

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

*Do not use string conversion.*

Input: 121
Output: true

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

var isPalindrome = function(x) {
  if (x === 0) {
    return true;
  } else if (x % 10 === 0 || x < 0) {
    return false;
  }
  
  var reversed = 0;
  var number = x;  

  while (number) {
    var lastDigit = number % 10;
    reversed = (reversed * 10) + lastDigit;
    number = number / 10 | 0;
  }

  return reversed === x;
};

var test1 = isPalindrome(121);
var test2 = isPalindrome(10);

console.log({ expect: true, output: test1, pass: test1 === true });
console.log({ expect: false, output: test2, pass: test2 === false });
