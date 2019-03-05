/*
Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
*/

var minDepth = function(root) {
  if (!root) {
    return 0;
  }

  var left = minDepth(root.left);
  var right = minDepth(root.right);

  return (left && right ? Math.min(left, right) : left + right) + 1;
};

var tree1 = {
  val: 3,
  right: {
    val: 20,
    right: {
      val: 7,
      right: null,
      left: {
        val: 1,
        left: null,
        right: null,
      },
    },
    left: { val: 15, right: null, left: null }
  },
  left: { val: 9, right: null, left: null }
};

var tree2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
};

var tree3 = {
  val: 1,
  right: {
    val: 3,
    right: {
      val: 7,
      right: null,
      left: {
        val: 1,
        left: null,
        right: null,
      },
    },
    left: { val: 3, right: null, left: null }
  },
  left: {
    val: 2,
    right: {
      val: 5,
      right: null,
      left: null,
    },
    left: {
      val: 4,
      right: null,
      left: null,
    },
  },
};

var tree4 = {
  val: 1,
  right: {
    val: 3,
    right: {
      val: 5,
      right: null,
      left: null,
    },
    left: { val: 3, right: null, left: null }
  },
  left: {
    val: 2,
    right: null,
    left: {
      val: 4,
      right: null,
      left: null,
    },
  },
};

var test1 = minDepth(tree1);
var test2 = minDepth(tree2);
var test3 = minDepth(tree3);
var test4 = minDepth(tree4);

console.log({ output: test1, expect: 2, pass: test1 === 2 });
console.log({ output: test2, expect: 2, pass: test2 === 2 });
console.log({ output: test3, expect: 2, pass: test3 === 2 });
console.log({ output: test4, expect: 3, pass: test4 === 3 });
