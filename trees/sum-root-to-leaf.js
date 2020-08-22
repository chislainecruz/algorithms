/*
Root To Leaf Path Sum
Give a binary tree and a target sum sum, determine if there is a path from the root to a leaf that sums to the target sum sum.

Example 1:
Input:  sum = 5

           1
             \
              2
            /   \
           2     5

Output: true

Example 2:
Input:  sum = 10

           5
          /
        5
      /   \
     1     -1

Output: false
*/

const hasPathSum = (node, targetSum) => {
  //if it's a leaf and the difference between target and the node's value is 0, return true
  //otherwise, keep going down the tree
  //base case, if the node is null return false
  if (node === null) {
    return false;
  }

  if (node.left === null && node.right === null) {
    //this means the node is a leaf
    if (targetSum - node.val === 0) {
      return true;
    }
  }
  return (
    hasPathSum(node.left, targetSum - node.val) ||
    hasPathSum(node.right, targetSum - node.val)
  );
};

//O(n) time - worst case, we touch every node in the tree
// O(h) space where h is the height of the tree- recursive calls
