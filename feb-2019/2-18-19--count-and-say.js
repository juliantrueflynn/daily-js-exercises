/*
*[Count and Say]*

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Input: 1
Output: "1"

Input: 4
Output: "1211"
*/

const countAndSay = (count) => {
  let say = '1';

  if (count < 1) {
    return say;
  }

  for (let index = 0; count - 1 > index; index += 1) {
    const curr = say[0];
    let countSay = 0;
    let subIndex = 0;

    console.log('iteration', {curr, say})
    while (true) {
      countSay += 1;
      subIndex += 1;
      // console.log('LOG', { curr, say, countSay })
      if (say[subIndex] !== curr) {
        console.log('BREAK', { curr, say, countSay });
        break;
      }
    }

    // console.log({ curr, say, countSay })
    say = `${countSay}${curr}`;
  }

  return say;
};

// const countAndSay = (count) => {
//   let say = '1';

//   if (count < 1) {
//     return say;
//   }

//   for (let index = 0; count - 1 > index; index += 1) {
//     const curr = say[0];
//     let countSay = 0;
//     let subIndex = 0;

//     console.log('iteration', {curr, say})
//     while (true) {
//       countSay += 1;
//       subIndex += 1;
//       // console.log('LOG', { curr, say, countSay })
//       if (say[subIndex] !== curr) {
//         console.log('BREAK', { curr, say, countSay });
//         break;
//       }
//     }

//     // console.log({ curr, say, countSay })
//     say = `${countSay}${curr}`;
//   }

//   return say;
// };

// console.log('1 ===', countAndSay(1));
// console.log('11 ===', countAndSay(2));
// console.log('21 ===', countAndSay(3));
console.log('1211 ===', countAndSay(4));
// console.log('1211 ===', countAndSay(5));