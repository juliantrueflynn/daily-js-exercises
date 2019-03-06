/*
*[Perfect Number]*

We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer `n`, write a function that returns true when it is a perfect number and false when it is not.

Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14

Time to complete: ~15 min
*/

const perfectNumber = (integer) => {
  let sum = 1;

  for (let index = 2; integer > index; index += 1) {
    if (integer % index === 0) {
      sum += index;
    }

    if (index + 1 === integer && sum === integer) {
      return true;
    }
  }

  return false;
};

const example1 = perfectNumber(28);
const example2 = perfectNumber(30);

console.log({ output: example1, expect: true, pass: example1 === true });
console.log({ output: example2, expect: false, pass: example2 === false });