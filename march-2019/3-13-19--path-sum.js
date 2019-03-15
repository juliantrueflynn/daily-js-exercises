/*
Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1

return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }

  var hasSum = false;
  var recurse = function(node, total = 0) {
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      if (total + node.val === sum) {
        hasSum = true;
      }
    }

    recurse(node.left, total + node.val);
    recurse(node.right, total + node.val);

    return node.val;
  };

  recurse(root, 0);

  return hasSum;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const treeOne = new TreeNode(5);
const treeOne1 = new TreeNode(4);
const treeOne2 = new TreeNode(8);
const treeOne3 = new TreeNode(11);
const treeOne4 = new TreeNode(13);
const treeOne5 = new TreeNode(4);
const treeOne6 = new TreeNode(7);
const treeOne7 = new TreeNode(2);
const treeOne8 = new TreeNode(1);

const treeTwo = new TreeNode(3);
const treeTwo1 = new TreeNode(9);
const treeTwo2 = new TreeNode(20);
const treeTwo3 = new TreeNode(15);
const treeTwo4 = new TreeNode(7);

const treeThree = new TreeNode(1);

treeOne.left = treeOne1;
treeOne.right = treeOne2;
treeOne1.left = treeOne3;
treeOne3.left = treeOne6;
treeOne3.right = treeOne7;
treeOne2.left = treeOne4;
treeOne2.right = treeOne5;
treeOne5.right = treeOne8;

treeTwo.left = treeTwo1;
treeTwo.right = treeTwo2;
treeTwo2.left = treeTwo3;
treeTwo2.right = treeTwo4;

const test1 = hasPathSum(treeOne, 22);
const test2 = hasPathSum(treeTwo, 12);
const test3 = hasPathSum(treeTwo, 30);
const test4 = hasPathSum(treeOne, 21);
const test5 = hasPathSum(treeThree, 1);

console.log({ expect: true, actual: test1, pass: test1 === true });
console.log({ expect: true, actual: test2, pass: test2 === true });
console.log({ expect: true, actual: test3, pass: test3 === true });
console.log({ expect: false, actual: test4, pass: test4 === false });
console.log({ expect: true, actual: test5, pass: test5 === true });
