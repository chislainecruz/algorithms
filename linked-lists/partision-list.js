/* Partition List

Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

//Approach: Create 2 dummy heads - for less than and greater than or equal to x
// Have one pointer for each case
// iterate through the list and attach it to the greater than or less than list based on the node's value

var partition = function (head, x) {
  let greaterHead = new ListNode();
  let greater = greaterHead;
  let leastHead = new ListNode();
  let least = leastHead;

  while (head) {
    if (head.val < x) {
      least.next = head;
      least = least.next;
    } else {
      greater.next = head;
      greater = greater.next;
    }
    head = head.next;
  }
  //end the list with the greater list pointing to null
  greater.next = null;
  //attach both lists together - the end of the least list is the beginning of the greater than list
  least.next = greaterHead.next;

  //return the next value since we created a dummy head
  return leastHead.next;
};

//O(1) space - we don't create extra space
//O(n) time - we traverse the entire list
