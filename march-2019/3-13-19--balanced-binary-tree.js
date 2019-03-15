/*
Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
*/
/*
Done on whiteboard first
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
var isBalanced = function(root) {
  if (!root || root && !root.left && !root.right) {
    return true;
  }

  var recurse = function(node) {
    if (!node) {
      return 0;
    }

    var left = recurse(node.left);

    if (left === -1) {
      return -1;
    }

    var right = recurse(node.right);

    if (right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }

    return 1 + Math.max(left, right);
  };

  return recurse(root) !== -1;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const exOne = new TreeNode(3);
const exOne1 = new TreeNode(9);
const exOne2 = new TreeNode(20);
const exOne3 = new TreeNode(15);
const exOne4 = new TreeNode(7);

const exTwo = new TreeNode(1);
const exTwo1 = new TreeNode(2);
const exTwo2 = new TreeNode(2);
const exTwo3 = new TreeNode(3);
const exTwo4 = new TreeNode(3);
const exTwo5 = new TreeNode(4);
const exTwo6 = new TreeNode(4);

const exThree = new TreeNode(1);
const exThree1 = new TreeNode(2);
const exThree2 = new TreeNode(3);

exOne.left = exOne1;
exOne.right = exOne2;
exOne2.left = exOne3;
exOne2.right = exOne4;

exTwo.left = exTwo1;
exTwo.right = exTwo2;
exTwo1.left = exTwo3;
exTwo1.right = exTwo4;
exTwo3.left = exTwo5;
exTwo3.right = exTwo6;

exThree.left = exThree1;
exThree1.left = exThree2;

const test1 = isBalanced(exOne);
const test2 = isBalanced(exTwo);
const test3 = isBalanced(exThree);

console.log({ expect: true, actual: test1, pass: test1 === true });
console.log({ expect: false, actual: test2, pass: test2 === false });
console.log({ expect: false, actual: test3, pass: test3 === false });
