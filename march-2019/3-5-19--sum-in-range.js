/*
*[Sum All Numbers in a Range]*

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.

Time to complete: ~3 minutes

Time complexity?: 0(n)
Space complexity?: O(n)
*/

const sumAll = (numberRange) => {
  const maxNumber = Math.max(...numberRange);
  const minNumber = Math.min(...numberRange);
  let sum = 0;

  for (let index = minNumber; maxNumber >= index; index += 1) {
    sum += index;
  }

  return sum;
};

const test1 = sumAll([1, 4]);
const test2 = sumAll([4, 1]);
const test3 = sumAll([5, 10]);
const test4 = sumAll([10, 5]);

console.log({ expect: 10, output: test1, pass: test1 === 10 });
console.log({ expect: 10, output: test2, pass: test2 === 10 });
console.log({ expect: 45, output: test3, pass: test3 === 45 });
console.log({ expect: 45, output: test4, pass: test4 === 45 });