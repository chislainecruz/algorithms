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

/*
Approach: Create a cycle and break it at correct node.

1. Get tail and list size
2. Create cycle
3. Handle edge cases
    1. If k is greater than the length of the list
        1. Do k % n and thats how many shifts need to be done

4. To get new head: Jump n-k times to from old head
5. To get to new tail: Jump n-k times from old tail

O(1) space - done in place
O(n) time - we have to iterate through the entire list to get length and tail

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
