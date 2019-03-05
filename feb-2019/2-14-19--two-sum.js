/*
*[Two Sums]*
Given an array of unique integers and a target sum, determine whether any two integers in the array sum to that amount.

Step 1) Solve it in O(n^2)
Step 2) Solve it in O(n log n)
Step 3) Solve it in O(n)

Example:
arr = [0, 1, 5, 7]
two_sum?(arr, 6) # => should be true
two_sum?(arr, 10) # => should be false

Time to complete: 
*/

// O(n^2)
const twoSumON2 = (expression, sum) => {
  for (let index = 0; expression.length > index; index += 1) {
    for (let subIndex = 0; expression.length > subIndex; subIndex += 1) {
      const isNotSameIndex = index !== subIndex;
      const isEqToAnswer = expression[index] + expression[subIndex] === sum;

      if (isNotSameIndex && isEqToAnswer) {
        return true;
      }
    }
  }

  return false;
};

// O(n log n)
const twoSumONLogN = (expression, sum) => {
  return false;
};

// O(n)
const twoSumON = (expression, sum) => {
  const hash = expression.reduce((acc, curr) => {
    acc[curr] = curr;

    return acc;
  }, {});

  for (let index = 0; expression.length > index; index += 1) {
    const leftover = sum - expression[index];

    if (hash[leftover] && leftover !== expression[index]) {
      return true;
    }
  }

  return false;
};

const inputOne = [0, 1, 5, 7];

console.log('true ===', twoSumON2(inputOne, 6));
console.log('false ===', twoSumON2(inputOne, 10));
console.log('true ===', twoSumONLogN(inputOne, 6));
console.log('false ===', twoSumONLogN(inputOne, 10));
console.log('true ===', twoSumON(inputOne, 6));
console.log('false ===', twoSumON(inputOne, 10));
