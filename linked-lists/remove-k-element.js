/* Remove kth-to-last element
Given a linked list, remove the k'th to last element, and return the head of the new linked list.

Example 1:
Input:
k = 2
1 -> 2 -> 5 -> 6 -> 7 -> X

Output: 1 -> 2 -> 5 -> 7 -> X

Explanation: Element 6 is the 2nd to last element, therefore removed.

Example 2:
Input:
k = 1
2 -> 3 -> 5 -> X

Output: 2 -> 3 -> X

Constraints:
1 <= k <= linked list size

*/

//Approach: Find the length of the list
// determine the node's placement to be removed
//iterate through the list with a pointer and then rewire it's next nodes
//return the head

const removeKthToLast = (head, k) => {
  let listLength = length(head);
  if (k === listLength) {
    return head.next;
  }

  let i = listLength - k - 1;
  let curr = head;

  while (i > 0) {
    //advance pointer until
    curr = curr.next;
    i--;
  }
  //found the node to remove, now rewire it
  //if it has a next next value, attach it, otherwise, make it's next value null
  if (curr.next.next) {
    let next = curr.next;
    curr.next = next.next;
    next.next = null;
  } else {
    curr.next = null;
  }
  return head;
};

const length = (list) => {
  let count = 0;
  while (list) {
    count++;
    list = list.next;
  }
  return count;
};
//O(n) time complexity
//O(1) space
