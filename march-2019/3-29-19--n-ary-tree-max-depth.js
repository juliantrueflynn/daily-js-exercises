/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  let maxCount = 1;

  const traverse = (node, counter) => {
    if (!node || !node.children.length) {
      if (counter > maxCount) {
        maxCount = counter;
      }

      return null;
    }

    node.children.forEach((child) => {
      traverse(child, counter + 1);
    });

    return null;
  };

  traverse(root, 1);

  return maxCount;
};

function Node(val,children) {
  this.val = val;
  this.children = children;
}

const t1n2 = new Node(2, []);
const t1n4 = new Node(4, []);
const t1n5 = new Node(5, []);
const t1n7 = new Node(7, []);

const t1n6 = new Node(6, []);
const t1n3 = new Node(3, [t1n5, t1n6]);
const t1n1 = new Node(1, [t1n3]);

console.log(JSON.stringify(t1n1));
console.log(maxDepth(t1n1));