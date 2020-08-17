/*
Test If A Binary Tree Is Symmetric
Given a binary tree, test if it is symmetric both in value and in structure.

 Example 1:
Input:
       2
     /   \
    1     1

Output: true

 Example 2:
Input:
         4
       /   \
      2     2
     / \   /
    1   2 2

Output: false

 Example 3:
Input:
       X (empty tree)

Output: true
*/

const isSymmetric = (root) => {
  //if tree only has one node
  if (root === null) {
    return true;
  }
  return checkSubTree(root.right, root.left);
};
//check all branches
const checkSubTree = (rightTree, leftTree) => {
  //base case
  if (rightTree === null && leftTree === null) {
    return true;
  }
  //only if the right and left are not null
  if (rightTree !== null && leftTree !== null) {
    //we can check their values to see if they are equal.
    //we proceed to check their symmetric leaves on each side
    //if all these return true, this will be true
    return (
      rightTree.val === leftTree.val &&
      checkSubTree(rightTree.left, leftTree.right) &&
      checkSubTree(rightTree.right, leftTree.left)
    );
  }
  //only returns false if there is one null and one node with a value
  return false;
};
