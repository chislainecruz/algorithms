/*Right Shift A Singly Linked List
Given the head of a singly linked list, rotate the list k steps to the right.

Example 1:
Input:
k = 2
1 -> 2 -> 3 -> 4 -> X

Output:
3 -> 4 -> 1 -> 2 -> X

Example 2:
Input:
k = 4
4 -> 1 -> 6 -> 7 -> X

Output:
4 -> 1 -> 6 -> 7 -> X

Constraints
k >= 0
*/

const rotateRight = (head, k) => {
  let tail = head;
  let length = 1;

  while (tail.next) {
    length++;
    tail = tail.next;
  }
  if (k === 0) {
    return head;
  }

  tail.next = head;
  if (k >= length) {
    k = k % length;
  }

  let jumps = length - k;
  while (jumps > 0) {
    head = head.next;
    tail = tail.next;
    jumps--;
  }
  tail.next = null;

  return head;
};
