/*
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
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
var postorderTraversal = function (root) {
  let arr = [];

  showNums(root, (el) => arr.push(el));

  function showNums(root, cb) {
    if (root === null) {
      return;
    }
    showNums(root.left, cb);
    showNums(root.right, cb);
    cb(root.val);
  }
  return arr;
};
