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
var rightSideView = function(root) {
  if(!root){
      return []
  }
  
  let rightSide = []
  
 function findRight (root, level) {
     //is the size of my array the same as the level? Have i seen this level before? If no, ignore that number
     if (level === rightSide.length){
         rightSide.push(root.val)
     }
     //notice how right goes first. If we have a node there, it will get pushed and rightside length is going to increase
     if (root.right){
         findRight(root.right, level + 1)
     }
     //this will be ignored if there was a right node already b/c it will try to match level with size of array.
     //this helps us in the case there are no more right nodes but there are more left nodes going deeper down
     if (root.left){
         findRight(root.left, level + 1)
     }
 }
  
  findRight(root, 0)
  return rightSide
};
//O(n) time complexity because we visit every node
//O(H) space complexity because of the call stack
