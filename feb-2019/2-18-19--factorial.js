/*
*=== Monday Februrary 18th  - Daily Programmer ===*

*[Factorial]*
_(A beginner exercise from FreeCodeCamp)_

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Only integers greater than or equal to zero will be supplied to the function.

```factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.

Time to complete: ~10 minutes
*/

const factorialize = (number) => {
  let factorial = 1;

  if (number < 1) {
    return factorial;
  }

  for (let index = 1; number >= index; index += 1) {
    factorial *= index;
  }

  return factorial;
};

// Recursive
const factorializeRecursize = (number) => {
  if (number < 1) {
    return 1;
  }

  return number * factorializeRecursize(number - 1);
};

console.log('120 ===', factorialize(5));
console.log('3628800 ===', factorialize(10));
console.log('2432902008176640000 ===', factorialize(20));
console.log('1 ===', factorialize(0));

console.log('120 ===', factorializeRecursize(5));
console.log('3628800 ===', factorializeRecursize(10));
console.log('2432902008176640000 ===', factorializeRecursize(20));
console.log('1 ===', factorializeRecursize(0));
