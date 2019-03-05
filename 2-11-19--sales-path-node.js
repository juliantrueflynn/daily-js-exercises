/*
*=== Monday February 11th 2018 - Daily Programmer ===*

The car manufacturer Honda holds their distribution system in the form of a tree (not necessarily binary). The root is the company itself, and every node in the tree represents a car distributor that receives cars from the parent node and ships them to its children nodes. The leaf nodes are car dealerships that sell cars direct to consumers. In addition, every node holds an integer that is the cost of shipping a car to it.

A path from Honda’s factory to a car dealership, which is a path from the root to a leaf in the tree, is called a Sales Path. The cost of a Sales Path is the sum of the costs for every node in the path. For example, in the tree above one Sales Path is `0→3→0→10`, and its cost is `13` (0+3+0+10).

Honda wishes to find the minimal Sales Path cost in its distribution tree. Given a node `rootNode`, write a function `getMinimumCost` that calculates the minimal Sales Path cost in the tree.  Implement your function in the most efficient manner and analyze its time and space complexities.

For example, given the rootNode of the tree in diagram above, your function would return `7` since it’s the minimal Sales Path cost (there are actually two Sales Paths in the tree whose cost is 7: `0→6→1` and `0→3→2→1→1`)
*/

class Node {
  constructor(cost) {
    this.cost = cost;
    this.children = [];
  }
}

const rootNode = new Node(0);
const five1 = new Node(5);
const three1 = new Node(3);
const six1 = new Node(6);
rootNode.children = [five1, three1, six1];
const four1 = new Node(4);
five1.children = [four1];
const two1 = new Node(2);
const zero1 = new Node(0);
three1.children = [two1, zero1];
const one1 = new Node(1);
const five2 = new Node(5);
six1.children = [one1, five2];
const one2 = new Node(1);
two1.children = [one2];
const one3 = new Node(1);
one2.children = [one3];
const ten1 = new Node(10);
zero1.children = [ten1];

const getMinimumCost = (root) => {
  root.isRoot = true;

  let branchCostSum = 0;
  let costs = [];

  const depthSearch = (node, sharedCostSum = 0) => {
    if (!node.children.length) {
      branchCostSum += sharedCostSum;
      costs.push(branchCostSum);
      branchCostSum = 0;

      return node;
    }

    node.children.forEach((child) => {
      if (node.isRoot) {
        sharedCostSum = 0;
      }

      if (child.children.length > 1) {
        sharedCostSum += child.cost;
      } else {
        branchCostSum += child.cost;
      }

      depthSearch(child, sharedCostSum);
    });
  };

  depthSearch(root);

  return Math.min.apply(null, costs);
};

console.log('EXPECT: 7');
console.log(getMinimumCost(rootNode));
