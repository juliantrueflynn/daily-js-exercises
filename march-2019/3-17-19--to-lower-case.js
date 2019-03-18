/*
To Lower Case

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"

Example 2:

Input: "here"
Output: "here"

Example 3:

Input: "LOVELY"
Output: "lovely"

DO NOT USE `str.toLowerCase`. There's no fun in that!
*/

// Done on whiteboard first

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  var output = '';

  if (!str) {
    return output;
  }

  for (var index = 0; str.length > index; index += 1) {
    var char = str[index].charCodeAt(0);

    if (char >= 65 && char <= 90) {
      output += String.fromCharCode(char + 32);
    } else {
      output += str[index];
    }
  }

  return output;
};

const test1 = toLowerCase('');
const test2 = toLowerCase('Hello');
const test3 = toLowerCase('here');
const test4 = toLowerCase('LOVELY');
const test5 = toLowerCase('!!!!!l;');
const test6 = toLowerCase('Hi! Sup?');

console.log({ expect: '', actual: test1, pass: test1 === '' });
console.log({ expect: 'Hello', actual: test2, pass: test2 === 'hello' });
console.log({ expect: 'here', actual: test3, pass: test3 === 'here' });
console.log({ expect: 'lovely', actual: test4, pass: test4 === 'lovely' });
console.log({ expect: '!!!!!l;', actual: test5, pass: test5 === '!!!!!l;' });
console.log({ expect: 'hi! sup?', actual: test6, pass: test6 === 'hi! sup?' });
