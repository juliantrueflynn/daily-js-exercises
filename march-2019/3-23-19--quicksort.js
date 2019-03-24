/* "Grokking Algorithms" quicksort exercise */

const quicksort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = Math.floor(arr.length / 2);
  const lesser = [];
  const greater = [];

  for (let index = 0; arr.length > index; index += 1) {
    if (index !== pivot && arr[index] < arr[pivot]) {
      lesser.push(arr[index]);
    }

    if (index !== pivot && arr[index] > arr[pivot]) {
      greater.push(arr[index]);
    }
  }

  return quicksort(lesser).concat(arr[pivot], quicksort(greater));
};

const test1 = quicksort([2,3,1,4]).toString();
const test2 = quicksort([4,6,88,65,100,2,5]).toString();

console.log({ expect: '1,2,3,4', actual: test1, pass: test1 === '1,2,3,4' });
console.log({ expect: '2,4,5,6,65,88,100', actual: test2, pass: test2 === '2,4,5,6,65,88,100' });
