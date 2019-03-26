/*
*=== Monday March 25th 2019 - Daily Programmer ===*

*[Split an array into two subarrays with equal sum]*

Given an array of integers greater than zero, find if it is possible to split it in two subarrays (without reordering the elements), such that the sum of the two subarrays is the same. Print the two subarrays.

Input : { 1 , 2 , 3 , 4 , 5 , 5  }
Output :  
{1 2 3 4} 
{5 , 5}

Input : { 4, 1, 2, 3 }
Output : 
{4 1}
{2 3}

Input : { 4, 3, 2, 1}
Output : false/undefined/whatever
*/

const twoSubArraysEqSum = (arr) => {
  const secondArr = [];
  let sum = 0;
  let total = arr.reduce((acc, curr) => acc + curr, 0);

  while (arr.length) {
    const popped = arr.pop();
    secondArr.push(popped);
    sum += popped;
    total -= popped;

    if (sum === total) {
      return [arr, secondArr];
    }
  }

  return [];
};

const test1 = twoSubArraysEqSum([1,2,3,4,5,5]);
const test2 = twoSubArraysEqSum([4,1,2,3]);
const test3 = twoSubArraysEqSum([4,3,2,1]);

console.log({ expect: [[1,2,3,4], [5,5]], actual: test1 });
console.log({ expect: [[4,1], [3,2]], actual: test2});
console.log({ expect: [], actual: test3 });