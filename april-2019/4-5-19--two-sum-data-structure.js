/*
*[Two Sum - Data Structure]*

Design and implement a `TwoSum` class. It should support the following operations: `add` and `find`.
Solve it in linear time and space complexity.

• `add` - Add the number to an internal data structure.
• `find` - Find if there exists any pair of numbers which sum is equal to the value.
*/

class TwoSum {
  constructor(list = []) {
    this.list = list;
  }

  add(number) {
    this.list.push(number);

    return this.list;
  }

  find(target) {
    const map = {};
    let hasTargetSum = false;

    for (let idx = 0; this.list.length > idx; idx += 1) {
      const curr = this.list[idx];
      const leftover = target > curr ? target - curr : curr - target;
      
      if (map[leftover]) {
        hasTargetSum = true;
        break;
      } else {
        map[curr] = true;
      }
    }

    return hasTargetSum;
  }
}

const test1 = new TwoSum([1,2,3]);
const test2 = new TwoSum([2,3,5,6,7,8,9,10]);
test1.add(4).toString();
console.log({ expect: '1,2,3,4', actual: test1 });

const test1Find = test1.find(4);
const test2Find = test2.find(11);
const test2Find2 = test2.find(20);
console.log({ expect: true, actual: test1Find });
console.log({ expect: true, actual: test2Find });
console.log({ expect: false, actual: test2Find2 });
