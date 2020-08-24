/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:

[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [];
  traverse(root, 0);
  return queue;

  function traverse(root, level) {
    if (root === null) {
      return;
    }
    if (queue[level] === undefined) {
      queue.push([root.val]);
    } else {
      queue[level].push(root.val);
    }
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  }
};
//O(n) time
//O(n) space
