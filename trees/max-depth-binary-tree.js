/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

const maxDepth = (root) => {
  //top down approach

  return getDepth(root, 1, 1);

  function getDepth(node, level, max) {
    if (!node) return 0;

    if (!node.right && !node.left) {
      //it's a leaf, let's update the max depth
      if (level > max) max = level;
      return max;
    }
    max = Math.max(
      getDepth(node.left, level + 1, max),
      getDepth(node.right, level + 1, max)
    );
    return max;
  }
};

// O(n) time
// O(n) space
