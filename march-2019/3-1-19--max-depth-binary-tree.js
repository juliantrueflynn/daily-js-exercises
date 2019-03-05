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
  if (root.length === 1) {
    return 0;
  }

  if (root.length <= 3) {
    return 1;
  }

  var deepest = 1;
  var count = 1;
  var stack = [0,1,2];

  while (stack.length) {
    var curr = stack.shift();

    if (root[curr * 2 + 1] && root[curr * 2 + 1] !== null) {
      stack.push(curr * 2 + 1);
      count += 1;
    } else {
      if (count > deepest) {
        deepest = count;
        count = 1;
      }
    }

    if (root[curr * 2 + 2] && root[curr * 2 + 2] !== null) {
      stack.push(curr * 2 + 2);
    }

    if (curr + 1 === root.length) {
      return deepest;
    }
  }

  return deepest;
};

var test1 = maxDepth([3,9,20,null,null,15,7]);

console.log({ output: test1, expect: 3, pass: test1 === 3 });