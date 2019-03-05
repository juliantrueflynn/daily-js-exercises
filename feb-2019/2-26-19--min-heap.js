/**
 * Setup min-heap data structure
 */

class MinHeap {
  constructor() {
    this.heap = [null, 3, 4, 5, 6];
  }

  insert(value) {
    this.heap.push(value);

    if (this.heap.length < 2) {
      return;
    }

    let index = this.heap.length - 1;

    while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
      const parentIndex = Math.floor(index / 2);

      if (index >= 1) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

        if (parentIndex > 1) {
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  }

  remove() {
    if (this.heap.length <= 2) {
      return;
    }

    let index = 1;
    this.heap[index] = this.heap.pop();

    while (this.heap[index * 2 + 1]) {
      let smallerChildIndex = index * 2 + 1;
      let rightChild = this.heap[index * 2 + 2];

      if (rightChild && rightChild < this.heap[smallerChildIndex]) {
        smallerChildIndex = index * 2 + 2;
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
      }

      index = smallerChildIndex;
    }
  }
}

const minHeap = new MinHeap();
console.log({ output: minHeap.insert(1) });
console.log({ output: minHeap.remove(1) });
console.log({ output: minHeap.insert(3) });
console.log({ output: minHeap.insert(5) });
