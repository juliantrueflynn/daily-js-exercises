/*
Excel Sheet Column Number

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...

Example 1:

Input: "A"
Output: 1

Example 2:

Input: "AB"
Output: 28

Example 3:

Input: "ZY"
Output: 701
*/

var titleToNumber = function(s) {
  var total = 0;

  for (let index = 0; s.length > index; index += 1) {
    total = 26 * total + s[index].charCodeAt(0) - 64;
  }

  return total;
};

var test1 = titleToNumber('A');
var test2 = titleToNumber('AA');
var test3 = titleToNumber('AAA');
var test4 = titleToNumber('AB');
var test5 = titleToNumber('ABG');
var test6 = titleToNumber('BA');
var test7 = titleToNumber('AJHX');

console.log({ output: test1, expect: 1, pass: test1 === 1 });
console.log({ output: test2, expect: 27, pass: test2 === 27 });
console.log({ output: test3, expect: 703, pass: test3 === 703 });
console.log({ output: test4, expect: 28, pass: test4 === 28 });
console.log({ output: test5, expect: 735, pass: test5 === 735 });
console.log({ output: test6, expect: 53, pass: test6 === 53 });
console.log({ output: test7, expect: 24568, pass: test7 === 24568 });
