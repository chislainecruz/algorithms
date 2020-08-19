/*
 Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:

[
  [15,7],
  [9,20],
  [3]
]
*/

/*approach:
  DFS
  traverse the tree all the way down, keep track of the level so we can group in the array, then reverse the array

 */
var levelOrderBottom = function (root) {
  let arr = [];
  depthFirst(root, 0);
  return arr.reverse();

  function depthFirst(node, level) {
    if (!node) return;
    if (arr[level] === undefined) {
      arr.push([node.val]);
    } else {
      arr[level].push(node.val);
    }
    depthFirst(node.left, level + 1);
    depthFirst(node.right, level + 1);
  }
};
