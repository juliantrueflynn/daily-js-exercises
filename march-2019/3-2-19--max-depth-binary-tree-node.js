/*
Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

var maxDepth = function(root) {
  if (!root || root && root.val === undefined) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return 1;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var tree1 = {
  val: 3,
  right: {
    val: 20,
    right: { val: 7, right: null, left: null },
    left: { val: 15, right: null, left: null }
  },
  left: { val: 9, right: null, left: null }
};

var tree2 = {
  val: 3,
  right: {
    val: 20,
    right: { val: 7, right: null, left: null },
    left: {
      val: 15,
      right: null,
      left: {
        val: 3,
        right: null,
        left: null,
      },
    }
  },
  left: { val: 9, right: null, left: null }
};

var tree3 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  }
};

var test1 = maxDepth(tree1);
var test2 = maxDepth(tree2);
var test3 = maxDepth(tree3);

console.log({ output: test1, expect: 3, pass: test1 === 3 });
console.log({ output: test2, expect: 4, pass: test2 === 4 });
console.log({ output: test3, expect: 3, pass: test3 === 3 });
