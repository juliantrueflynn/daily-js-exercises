/*
*[Kth Largest Element in a Stream]*

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer `k` and an integer array `nums`, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8

Note: You may assume that nums' `length ≥ k-1` and `k ≥ 1`
*/

// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }

//   add(value) {
//     this.next = new Node(value);

//     return this.next;
//   }
// }

class KthLargest {
  constructor(k, list) {
    this.list = list.sort((a, b) => a - b);
    this.k = k;
    // this.head = new Node(this.list[0]);
  }

  kth() {

  }

  add(input) {
    this.list.push(input);
    this.list = this.list.sort((a, b) => a - b);
    console.log(this.list);
    return this.list[this.k];
  }
}

const test1InputArr = [4,5,8,2];
const test1K = 3;
const test1Largest = new KthLargest(test1K, test1InputArr);

console.log({ expect: 4, pass: test1Largest.add(3) === 4 });
console.log({ expect: 5, pass: test1Largest.add(5) === 5 });
console.log({ expect: 5, pass: test1Largest.add(10) === 5 });
console.log({ expect: 8, pass: test1Largest.add(9) === 8 });
