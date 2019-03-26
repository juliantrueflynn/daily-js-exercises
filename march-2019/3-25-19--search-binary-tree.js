/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Done on whiteboard first

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let tree = null;

  const recurse = (node) => {
    if (!node) {
      return null;
    }

    if (!tree && node.val === val) {
      tree = new TreeNode(val);
      tree.left = recurse(node.left);
      tree.right = recurse(node.right);
    }

    recurse(node.left);
    recurse(node.right);

    return node;
  };

  recurse(root);

  return tree;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const t1n1 = new TreeNode(1);
const t1n2 = new TreeNode(2);
const t1n3 = new TreeNode(3);
const t1n4 = new TreeNode(4);
const t1n5 = new TreeNode(5);

const t2n1 = new TreeNode(1);
const t2n2 = new TreeNode(2);
const t2n3 = new TreeNode(3);
const t2n4 = new TreeNode(4);
const t2n5 = new TreeNode(5);

const a1n1 = new TreeNode(3);
const a1n2 = new TreeNode(5);

t1n1.left = t1n2;
t1n1.right = t1n3;
t1n2.left = t1n4;
t1n3.left = t1n5;

t2n1.left = t2n2;
t2n1.right = t2n3;
t2n2.left = t2n4;
t2n3.left = t2n5;

a1n1.left = a1n2;

console.log(searchBST(t1n1, 3));