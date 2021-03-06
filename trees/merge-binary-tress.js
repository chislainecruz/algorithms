/*
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
*/
//approach: check if we have nodes for t1 and t2, and if we do, add those up and create a new node with that value
//if not, then keep that same node to be added to the tree
//recursively call this function with the left and right sides
//at the end, return the new node created

var mergeTrees = function (t1, t2) {
  let node;
  if (t1 && t2) {
    node = new TreeNode(t1.val + t2.val);
    node.left = mergeTrees(t1.left, t2.left);
    node.right = mergeTrees(t1.right, t2.right);
  } else if (t1) {
    node = t1;
  } else {
    node = t2;
  }
  return node;
};

//O(max(m,n)) time complexity - will process as many nodes as the tallest tree
//O(max(m,n)) space complexity - the new tree will be as big as the bigger tree passed in
