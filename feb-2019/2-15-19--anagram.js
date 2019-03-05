/*
*[Anagrams]*

An anagram is a word that has the same characters as another word arranged in different order.  For example, `elvis` is an anagram of `lives` because they use the same characters. Write a function that returns whether the words are anagrams of each other.
*/

// o(n^2)
const anagramON2 = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  for (let index = 0; word1.length > index; index += 1) {
    if (!word2.includes(word1[index])) {
      return false;
    }
  }

  return true;
};

// o(n log n)
const anagramONLogN = (word1, word2) => {
  const sortedWord1 = word1.split('').sort((a, b) => a.localeCompare(b));
  const sortedWord2 = word2.split('').sort((a, b) => a.localeCompare(b));

  for (let index = 0; word1.length > index; index += 1) {
    if (sortedWord1[index] !== sortedWord2[index]) {
      return false;
    }
  }

  return true;
};

// o(n)
const anagramON = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  const hash = word2.split('').reduce((acc, curr) => {
    acc[curr] = curr;

    return acc;
  }, {});

  for (let index = 0; word1.length > index; index += 1) {
    if (!hash[word1[index]]) {
      return false;
    }
  }

  return true;
};

console.log('false ===', anagramON2("gizmo", "sally"));
console.log('true ===', anagramON2("elvis", "lives"));
console.log('false ===', anagramONLogN("gizmo", "sally"));
console.log('true ===', anagramONLogN("elvis", "lives"));
console.log('false ===', anagramON("gizmo", "sally"));
console.log('true ===', anagramON("elvis", "lives"));
