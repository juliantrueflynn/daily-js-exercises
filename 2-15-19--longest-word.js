/*
[Find the Longest Word Length]
_(A beginner exercise from FreeCodeCamp)_

Write a function that returns the length of the longest word from the input sentence.

Time to complete: ~3 minutes
*/

const findLongestWordLength = (sentence) => {
  const words = sentence.split(' ');
  let longestLength = 0;

  words.forEach((word) => {
    const wordLength = word.length;

    if (wordLength > longestLength) {
      longestLength = wordLength;
    }
  });

  return longestLength;
};

console.log('6 ===', findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log('5 ===', findLongestWordLength("May the force be with you"));
console.log('6 ===', findLongestWordLength("Google do a barrel roll"));
console.log('8 ===', findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log('19 ===', findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));