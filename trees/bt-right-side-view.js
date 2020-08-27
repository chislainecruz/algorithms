/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
*/

//approach: Recursive depth first search
var rightSideView = function (root) {
  //if root is null, return an empty array
  if (!root) {
    return [];
  }

  let right = [];

  function findRight(root, level) {
    //prevents us from adding numbers into the right array if we already visited that level
    if (level === right.length) {
      right.push(root.val);
    }
    //we proceed to visit the left and right side of the tree, incrementing the level
    if (root.right) {
      findRight(root.right, level + 1);
    }
    if (root.left) {
      findRight(root.left, level + 1);
    }
  }

  findRight(root, 0);
  return right;
};
//O(n) time complexity because we visit every node
//O(H) space complexity because of the call stack
