/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @return {ListNode}
 */

//Approach: rewire the list in-place

var reverseList = function (head) {
  let prev = null; //create a variable to hold the previous value
  let curr = head;

  while (curr !== null) {
    let next = curr.next; //hold the next value in a variable
    curr.next = prev; //re-assign curr's next with the previous value. !st iteration will be null
    prev = curr; // previous is now curr
    curr = next; //move the curr pointer with next's value
  }
  return prev; //this will be the last element in the list. It's next value will be the one before.
};

//O(1) space - rewire done in place
//O(n) time - we traverse the entire list to get to the last node
