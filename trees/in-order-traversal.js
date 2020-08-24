/*
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let arr = [];
  showNums(root, (el) => arr.push(el));

  function showNums(root, cb) {
    if (root === null) {
      return;
    }

    showNums(root.left, cb);
    cb(root.val);
    showNums(root.right, cb);
  }
  return arr;
};

//O(n) time - will take as long as the number of nodes
// O(n + h) will take as many nodes in the array as in the tree, and as many calls in the stack as the depth of the tree
