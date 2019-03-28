/*
Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree: [1,3,2,4,5,6]

Return its postorder traversal as: [5,6,3,2,4,1].

Note:
Recursive solution is trivial, could you do it iteratively?
*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      result.unshift(node.val);

      node.children.forEach((child) => {
        stack.push(child);
      });
    }
  }

  return result;
};

function Node(val,children) {
  this.val = val;
  this.children = children;
}

const t1n2 = new Node(2, []);
const t1n4 = new Node(4, []);
const t1n5 = new Node(5, []);
const t1n6 = new Node(6, []);

const t1n3 = new Node(3, [t1n5, t1n6]);
const t1n1 = new Node(1, [t1n3, t1n2, t1n4]);

console.log(t1n1);
console.log({ preorder: postorder(t1n1) });