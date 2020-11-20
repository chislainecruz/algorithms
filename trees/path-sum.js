/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

const hasPathSum = (root, sum) => {
  // DFS pre-order traversal
  // go all the way down, keeping track of the sum, checking if it's a leaf and then check if the sum equals the target sum.
  // if so, return true. Otherwise, continue DFS.
  
  return dfs(root, 0)
  
  function dfs (node, summed){
      if (!node) return false
      
      if (!node.left && !node.right) {
          // it's a leaf
          if (summed + node.val === sum) {
              return true
          } else {
              return false
          }
      }
      summed += node.val
      return dfs(node.left, summed) || dfs(node.right, summed)
  }
};

// O(n) time
// O(n) space