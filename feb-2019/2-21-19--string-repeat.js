/*
*=== Thursday Februrary 20th 2019 - Daily Programmer ===*

*[Repeat a String Repeat a String]*
_(Basic algorithms exercise from FreeCodeCamp)_

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

Time completed: ~9 minutes
*/

const repeatStringNumTimes = (string, times) => {
  let repeated = '';

  for (let index = 0; times > index; index += 1) {
    repeated += string;
  }

  return repeated;
};

// Recursive
const repeatStringNumTimesRecursive = (string, times) => {
  if (times < 0) {
    return '';
  }

  if (times === 1) {
    return string;
  }

  return string + repeatStringNumTimesRecursive(string, times - 1);
};

console.log({ expect: '***', output: repeatStringNumTimes('*', 3), pass: repeatStringNumTimes('*', 3) === '***' });
console.log({ expect: 'abcabcabc', output: repeatStringNumTimes('abc', 3), pass: repeatStringNumTimes('abc', 3) === 'abcabcabc' });
console.log({ expect: 'abcabcabcabc', output: repeatStringNumTimes('abc', 4), pass: repeatStringNumTimes('abc', 4) === 'abcabcabcabc' });
console.log({ expect: 'abc', output: repeatStringNumTimes('abc', 1), pass: repeatStringNumTimes('abc', 1) === 'abc' });
console.log({ expect: '********', output: repeatStringNumTimes('*', 8), pass: repeatStringNumTimes('*', 8) === '********' });
console.log({ expect: '', output: repeatStringNumTimes('abc', -2), pass: repeatStringNumTimes('abc', -2) === '' });
console.log('');
console.log('Recursive');
console.log({ expect: '***', output: repeatStringNumTimesRecursive('*', 3), pass: repeatStringNumTimesRecursive('*', 3) === '***' });
console.log({ expect: 'abcabcabc', output: repeatStringNumTimesRecursive('abc', 3), pass: repeatStringNumTimesRecursive('abc', 3) === 'abcabcabc' });
console.log({ expect: 'abcabcabcabc', output: repeatStringNumTimesRecursive('abc', 4), pass: repeatStringNumTimesRecursive('abc', 4) === 'abcabcabcabc' });
console.log({ expect: 'abc', output: repeatStringNumTimesRecursive('abc', 1), pass: repeatStringNumTimesRecursive('abc', 1) === 'abc' });
console.log({ expect: '********', output: repeatStringNumTimesRecursive('*', 8), pass: repeatStringNumTimesRecursive('*', 8) === '********' });
console.log({ expect: '', output: repeatStringNumTimesRecursive('abc', -2), pass: repeatStringNumTimesRecursive('abc', -2) === '' });