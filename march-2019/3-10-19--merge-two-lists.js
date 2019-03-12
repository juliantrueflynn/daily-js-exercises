/*
Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var list = new ListNode(-1);
  var head = list;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      head.next = l2;
      l2 = l2.next;
    } else {
      head.next = l1;
      l1 = l1.next;
    }

    head = head.next;
  }

  head.next = l1 || l2;

  return list.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const listOne = new ListNode(1);
const listOne2 = new ListNode(2);
const listOne3 = new ListNode(4);
const listOne4 = new ListNode(5);
listOne.next = listOne2;
listOne2.next = listOne3;
listOne3.next = listOne4;

const listTwo = new ListNode(1);
const listTwo2 = new ListNode(3);
const listTwo3 = new ListNode(4);
listTwo.next = listTwo2;
listTwo2.next = listTwo3;

console.log(JSON.stringify(mergeTwoLists(listOne, listTwo)));