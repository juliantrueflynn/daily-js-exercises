/*
Same Tree

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true

Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false

Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

var isSameTree = function(p, q) {
  var traverse = function(stack) {
    let output = '';

    while (stack.length) {
      var node = stack.shift();

      if (node) {
        output += node.val;
        stack.push(node.left);
        stack.push(node.right);
      } else {
        output += null;
      }
    }

    return output;
  };

  return traverse([p]) === traverse([q]);
};

var tree1 = {
  val: 1,
  right: { val: 3, right: null, left: null },
  left: { val: 2, right: null, left: null }
};

var tree2 = {
  val: 1,
  right: { val: 3, right: null, left: null },
  left: { val: 2, right: null, left: null }
};

var tree3 = {
  val: 1,
  right: { val: 1, right: null, left: null },
  left: { val: 2, right: null, left: null },
};

var tree4 = {
  val: 1,
  right: { val: 2, right: null, left: null },
  left: { val: 1, right: null, left: null },
};

var tree5 = {
  val: 1,
  right: null,
  left: { val: 2, right: null, left: null },
};

var tree6 = {
  val: 1,
  right: { val: 2, right: null, left: null },
  left: null,
};

var test1 = isSameTree(tree1, tree2);
var test2 = isSameTree(tree3, tree4);
var test3 = isSameTree(tree5, tree6);

console.log({ expect: true, actual: test1, pass: test1 === true });
console.log({ expect: false, actual: test2, pass: test2 === false });
console.log({ expect: false, actual: test3, pass: test3 === false });
