/*
*[Chunky Monkey]*

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].


Time to complete: ~13 minutes
*/

const chunkArrayInGroups = (array, groupByInteger) => {
  const groups = [[]];
  let groupIndex = 0;

  for (let index = 0; array.length > index; index += 1) {
    const mod = index % groupByInteger;

    if (index === 0) {
      groups[0].push(array[index]);
    } else if (mod === 0) {
      groups.push([array[index]]);
      groupIndex += 1;
    } else {
      groups[groupIndex].push(array[index]);
    }
  }

  return groups;
};

const example1 = chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
const example2 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
const example3 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
const example4 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
const example5 = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

console.log({
  output: example1,
  expect: [['a','b'], ['c','d']],
  pass: example1.toString() === [['a','b'], ['c','d']].toString(),
});

console.log({
  output: example2,
  expect: [[0, 1, 2], [3, 4, 5]],
  pass: example2.toString() === [[0, 1, 2], [3, 4, 5]].toString(),
});

console.log({
  output: example3,
  expect: [[0, 1], [2, 3], [4, 5]],
  pass: example3.toString() === [[0, 1], [2, 3], [4, 5]].toString(),
});

console.log({
  output: example4,
  expect: [[0, 1, 2, 3], [4, 5]],
  pass: example4.toString() === [[0, 1, 2, 3], [4, 5]].toString(),
});

console.log({
  output: example5,
  expect: [[0, 1], [2, 3], [4, 5], [6, 7], [8]],
  pass: example5.toString() === [[0, 1], [2, 3], [4, 5], [6, 7], [8]].toString(),
});
