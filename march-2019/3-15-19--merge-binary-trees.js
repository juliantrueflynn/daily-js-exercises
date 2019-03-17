/*
Merge Two Binary Trees

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  

Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.
*/
var mergeTrees = function(t1, t2) {
  if (t1 === null || t2 === null) {
    return t1 || t2;
  }
  
  t1.val += t2.val;

  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const treeOne = new TreeNode(5);
const treeOne1 = new TreeNode(4);
const treeOne2 = new TreeNode(8);
// const treeOne3 = new TreeNode(11);
// const treeOne4 = new TreeNode(13);
// const treeOne5 = new TreeNode(4);
// const treeOne6 = new TreeNode(7);
// const treeOne7 = new TreeNode(2);
// const treeOne8 = new TreeNode(1);

const treeTwo = new TreeNode(5);
const treeTwo1 = new TreeNode(4);
const treeTwo2 = new TreeNode(8);
const treeTwo3 = new TreeNode(11);
const treeTwo4 = new TreeNode(13);
const treeTwo5 = new TreeNode(4);
const treeTwo6 = new TreeNode(7);
const treeTwo7 = new TreeNode(2);
const treeTwo8 = new TreeNode(1);

treeOne.left = treeOne1;
treeOne.right = treeOne2;
// treeOne1.left = treeOne3;
// treeOne3.left = treeOne6;
// treeOne3.right = treeOne7;
// treeOne2.left = treeOne4;
// treeOne2.right = treeOne5;
// treeOne5.right = treeOne8;

treeTwo.left = treeTwo1;
treeTwo.right = treeTwo2;
treeTwo1.left = treeTwo3;
treeTwo3.left = treeTwo6;
treeTwo3.right = treeTwo7;
treeTwo2.left = treeTwo4;
treeTwo2.right = treeTwo5;
treeTwo5.right = treeTwo8;

const test1 = mergeTrees(treeOne, treeTwo);

console.log(JSON.stringify(test1));
