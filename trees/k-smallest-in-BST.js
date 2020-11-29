/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.



Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
*/

const kthSmallest = (root, k) => {
  let nodes = [];
  traverse(root);
  return nodes[k - 1];

  function traverse(node) {
    if (!node) return;

    traverse(node.left);

    nodes.push(node.val);

    traverse(node.right);
  }
};

// O(n) time
// O(n) space
