/*
Unique Morse Code Words

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:

Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".

Note:

The length of words will be at most 100.
Each words[i] will have length in range [1, 12].
words[i] will only consist of lowercase letters.
*/

// Done on whiteboard first

/**
 * @param {string[]} words
 * @return {number}
 */

var MORSE_CODES = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

var uniqueMorseRepresentations = function(words) {
  var hash = {};
  var count = 0;

  if (!words.length) {
    return count;
  } else if (words.length === 1) {
    return 1;
  }

  words.forEach(function(word) {
    var morseLetters = '';

    for (var index = 0; word.length > index; index += 1) {
      morseLetters += MORSE_CODES[word[index]];
    }

    if (!hash[morseLetters]) {
      count += 1;
      hash[morseLetters] = true;
    }
  });

  return count;
};

const test1 = uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']);
const test2 = uniqueMorseRepresentations([]);

console.log({ expect: 2, actual: test1, pass: test1 === 2 });
console.log({ expect: 0, actual: test2, pass: test2 === 0 });
