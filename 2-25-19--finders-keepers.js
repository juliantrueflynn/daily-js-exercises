/*
*=== Monday Feb 25st 2019 - Daily Programmer ===*

*[Finders Keepers]*
_(Beginner Algorithms Exercise from FreeCodeCamp)_

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

const findElement = (numbers, fn) => {
  for (let index = 0; numbers.length > index; index += 1) {
    if (fn(numbers[index])) {
      return numbers[index];
    }
  }

  return undefined;
};

var test1 = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
var test2 = findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });

console.log({ expect: 8, output: test1, pass: test1 === 8 });
console.log({ expect: undefined, output: test2, pass: test2 === undefined });
