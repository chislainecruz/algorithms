/*
Lowest Common Ancestor In A BST
Given the root of a binary search tree root and the value of two nodes x and y, return a reference to their lowest common ancestor.

Example 1:
Input:
root = Node{50}
x = 1
y = 101
                  50
                /    \
              25     100
             /  \   /   \
            1   27 80   101

Output: Node{50}
Explanation: The root is the lowest common ancestor between Node{1} and Node{101}. It is also the highest common ancestor between these two nodes.

Example 2:
Input:
root = Node{50}
x = 1
y = 27
                  50
                /    \
              25     100
             /  \   /   \
            1   27 80   101

Output: Node{25}
Explanation: The Node{25} is the lowest common ancestor between Node{1} and Node{27}. Node{50} is also an ancestor of both nodes but it is not the lowest one.
*/

const lowestCommonAncestor = (root, x, y) => {
  //if x,y are less than root, search left
  //if x,y are greater than root, search right
  //if x or y are equal to root, return root
  // if x or y is less than root, and the other is greater than root, return root

  if (x > root.val && y > root.val) {
    return lowestCommonAncestor(root.right, x, y);
  } else if (x < root.val && y < root.val) {
    return lowestCommonAncestor(root.left, x, y);
  }
  return root;
};
