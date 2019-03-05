/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/

var romanToInt = function(s) {
  var integer = 0;

  for (var index = 0; s.length > index; index += 1) {
    var curr = s[index];
    var next = s[index + 1];
    var prev = s[index - 1];

    if (curr === 'M' && prev !== 'C') {
      integer += 1000;
    } else if (curr === 'C' && next === 'M') {
      integer += 900;
    } else if (curr === 'D' && prev !== 'C') {
      integer += 500;
    } else if (curr === 'C' && next === 'D') {
      integer += 400;
    } else if (curr === 'C' && prev !== 'X' && next !== 'D') {
      integer += 100;
    } else if (curr === 'X' && next === 'C') {
      integer += 90;
    } else if (curr === 'L' && prev !== 'X') {
      integer += 50;
    } else if (curr === 'X' && next === 'L') {
      integer += 40;
    } else if (curr === 'X' && next !== 'L' && prev !== 'I') {
      integer += 10;
    } else if (curr === 'I' && next === 'X') {
      integer += 9;
    } else if (curr === 'V' && prev !== 'I') {
      integer += 5;
    } else if (curr === 'I' && next === 'V') {
      integer += 4;
    } else if (curr === 'I') {
      integer += 1;
    }
  }

  return integer;
};

console.log('1 ===', romanToInt('I'));
console.log('3 ===', romanToInt('III'));
console.log('4 ===', romanToInt('IV'));
console.log('5 ===', romanToInt('V'));
console.log('9 ===', romanToInt('IX'));
console.log('10 ===', romanToInt('X'));
console.log('11 ===', romanToInt('XI'));
console.log('40 ===', romanToInt('XL'));
console.log('42 ===', romanToInt('XLII'));
console.log('50 ===', romanToInt('L'));
console.log('53 ===', romanToInt('LIII'));
console.log('100 ===', romanToInt('C'));
console.log('300 ===', romanToInt('CCC'));
console.log('400 ===', romanToInt('CD'));
console.log('561 ===', romanToInt('DLXI'));
console.log('1994 ===', romanToInt('MCMXCIV'));
console.log('2018 ===', romanToInt('MMXVIII'));