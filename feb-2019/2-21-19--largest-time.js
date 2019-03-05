/*
*[Largest Time for Given Digits]*

Given an array of 4 digits, return the largest 24 hour time that can be made.
The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.
Return the answer as a string of length 5.  If no valid time can be made, return an empty string.
*/

const largestTime = (numbers) => {
  const sorted = numbers.sort((a, b) => b - a);
  const length = numbers.length - 1;

  if (sorted[length] > 2 || (sorted[length] <= 2 && sorted[length - 1] > 3)) {
    return '';
  }

  const hasOneZero = sorted[length] === 0 && sorted[length - 1] !== 0;
  const hasOneAndNoTwo = sorted[length] === 1 && sorted[length - 1] >= 3;
  const big2ndRange = hasOneZero || hasOneAndNoTwo;

  let hours = [];
  let mins = [];
  let stack = [...sorted];

  while (stack.length) {
    const curr = stack.pop();
    let shifted;

    if (
      ((hasOneZero && curr === 0) || (!hasOneZero && curr <= 2))
      && (hours[0] === undefined || curr > hours[0])
    ) {
      shifted = hours[0];
      hours[0] = curr;
    } else if (
      (big2ndRange && curr <= 9 || !big2ndRange && curr <= 3)
      && (hours[1] === undefined || curr > hours[1])
    ) {
      shifted = hours[1];
      hours[1] = curr;
    } else if (curr <= 5 && (mins[0] === undefined || curr > mins[0])) {
      shifted = mins[0];
      mins[0] = curr;
    } else if (curr <= 9 && (mins[1] === undefined || curr > mins[1])) {
      shifted = mins[1];
      mins[1] = curr;
    }

    if (shifted !== undefined) {
      stack.push(shifted);
    }
  }

  return `${hours.join('')}:${mins.join('')}`;
};

console.log({ expect: '23:41', output: largestTime([1,2,3,4]), pass: largestTime([1,2,3,4]) === '23:41' });
console.log({ expect: '21:59', output: largestTime([2,5,1,9]), pass: largestTime([2,5,1,9]) === '21:59' });
console.log({ expect: '10:00', output: largestTime([1,0,0,0]), pass: largestTime([1,0,0,0]) === '10:00' });
console.log({ expect: '06:26', output: largestTime([0,6,2,6]), pass: largestTime([0,6,2,6]) === '06:26' });
console.log({ expect: '16:53', output: largestTime([1,6,3,5]), pass: largestTime([1,6,3,5]) === '16:53' });
console.log({ expect: '23:44', output: largestTime([4,4,3,2]), pass: largestTime([4,4,3,2]) === '23:44' });
console.log({ expect: '', output: largestTime([2,7,8,9]), pass: largestTime([2,7,8,9]) === '' });
console.log({ expect: '', output: largestTime([5,5,5,5]), pass: largestTime([5,5,5,5]) === '' });
console.log({ expect: '', output: largestTime([3,4,5,5]), pass: largestTime([3,4,5,5]) === '' });
