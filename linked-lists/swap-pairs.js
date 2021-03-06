/*

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.



Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]
*/

const swapPairs = (head) => {
  //edge case
  if (!head || !head.next) return head;

  let first = head;
  let second = head.next;

  first.next = swapPairs(second.next);
  second.next = first;

  return second;
};
// O(n) time
// O(n) space
