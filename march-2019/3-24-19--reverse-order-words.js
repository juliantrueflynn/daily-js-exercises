/*
Practice problem from Reactiflux for reversing order of words in sentence
*/

const reverseWords = (str) => {
  const stack = [];
  let reverse = '';

  for (let index = 0; str.length >= index; index += 1) {
    if (str[index] === ' ' || index === str.length) {
      stack.push(reverse);
      reverse = '';
    } else if (str[index] !== ' ') {
      reverse += str[index];
    }
  }

  for (let index = stack.length - 1; index >= 0; index -= 1) {
    if (index === 0 || !stack[index]) {
      reverse += stack[index];
    } else {
      reverse += stack[index] + ' ';
    }
  }

  return reverse;
};

const test1 = reverseWords('dog foobar');
const test2 = reverseWords('dog park');
const test3 = reverseWords('dog park ');

console.log({ expect: 'foobar dog', actual: test1, pass: test1 === 'foobar dog' });
console.log({ expect: 'park dog', actual: test2, pass: test2 === 'park dog' });
console.log({ expect: 'park dog', actual: test3, pass: test3 === 'park dog' });
