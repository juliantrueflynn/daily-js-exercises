/*
Univalued Binary Tree

A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

Example 1:
Input: [1,1,1,1,1,null,1]
Output: true

Example 2:
Input: [2,2,2,5,2]
Output: false

Note:
The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  const stack = [root];
  let isUnivalued = true;

  while (stack.length) {
    const node = stack.pop();

    if (node.val !== root.val) {
      isUnivalued = false;
      break;
    }

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return isUnivalued;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const t1n1 = new TreeNode(1);
const t1n2 = new TreeNode(1);
const t1n3 = new TreeNode(1);
const t1n4 = new TreeNode(1);
const t1n5 = new TreeNode(1);

const t2n1 = new TreeNode(1);
const t2n2 = new TreeNode(1);
const t2n3 = new TreeNode(1);
const t2n4 = new TreeNode(1);
const t2n5 = new TreeNode(2);

t1n1.left = t1n2;
t1n1.right = t1n3;
t1n2.left = t1n4;
t1n3.left = t1n5;

t2n1.left = t2n2;
t2n1.right = t2n3;
t2n2.left = t2n4;
t2n3.left = t2n5;

const test1 = isUnivalTree(t1n1);
const test2 = isUnivalTree(t2n1);

console.log({ expect: true, actual: test1, pass: test1 === true });
console.log({ expect: false, actual: test2, pass: test2 === false });
