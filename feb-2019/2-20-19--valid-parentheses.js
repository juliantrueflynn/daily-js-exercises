/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
expect: true
Example 2:

Input: "()[]{}"
expect: true
Example 3:

Input: "(]"
expect: false
Example 4:

Input: "([)]"
expect: false
Example 5:

Input: "{[]}"
expect: true
*/

var OPEN = {
  '(': ')',
  '[': ']',
  '{': '}',
};

var CLOSE = {
  ')': '(',
  ']': '[',
  '}': '{',
};

var isValid = function(s) {
  var stack = [];

  if (s.length % 2 !== 0) {
    return false;
  }

  for (var index = 0; s.length > index; index += 1) {
    var bracket = s[index];
    var opened = OPEN[bracket];
    var closed = CLOSE[bracket];

    if (opened) {
      stack.push(bracket);
    } else {
      var last = stack.pop();

      if (last !== closed) {
        return false;
      }
    }
  }

  return !stack.length;
};

console.log({ input: '()', expect: 'true', result: isValid('()') });
console.log({ input: '()[]{}', expect: 'true', result: isValid('()[]{}') });
console.log({ input: '(]', expect: 'false', result: isValid('(]') });
console.log({ input: '([)]', expect: 'false', result: isValid('([)]')});
console.log({ input: '{[]}', expect: 'true', result: isValid('{[]}')});
console.log({ input: '[', expect: 'false', result: isValid('[') });
console.log({ input: '([]', expect: 'false', result: isValid('([]') });
console.log({ input: '(([]){})', expect: 'true', result: isValid('(([]){})') });
console.log({ input: '[(({})}]', expect: 'false', result: isValid('[(({})}]') });
console.log({ input: '[([]])', expect: 'false', result: isValid('[([]])') });
console.log({ input: '((', expect: 'false', result: isValid('((') });