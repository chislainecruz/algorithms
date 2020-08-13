/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

//Approach: Add numbers using grade-school addition (from right to left)
// Since we are creating a new list, start by creating a dummy head and a pointer to link the nodes we will create with the sum

// Add the first nodes together, then advance lists

var addTwoNumbers = function (l1, l2) {
  //create dummy head
  let headList = new ListNode();
  //pointer to wire the new list with new nodes
  let pointer = headList;
  //IF the sum is 2 digits (10 or 16 for ex), we need a carry, initialized to 0
  let carry = 0;

  while (l1 || l2) {
    //while l1 OR l2 are not null
    //since we don't know which one isn't null, we need to check they have a value. If not, assign 0
    let first = l1 ? l1.val : 0;
    let second = l2 ? l2.val : 0;
    //the sum is the addition of l1 num and l2 num plus whatever carry we might have
    let sum = first + second + carry;

    // we calculate carry as the floor of the sum divided by 10. If sum = 16, 16/10 -> 1.6. Floor is 1. We carry 1.
    carry = Math.floor(sum / 10);

    //we create a new node with the remainder of the sum divided by 10. Ex if sum = 14, 14 % 10 is 4.
    //the value of the node will be 4 and we set the pointer's next value to this new node
    pointer.next = new ListNode(sum % 10);
    if (l1) l1 = l1.next; //if they weren't null, advance
    if (l2) l2 = l2.next;
    pointer = pointer.next; //advance pointer
  }
  //lastly if we have a carry, add it as a new node and set it as the pointer's next
  if (carry > 0) {
    pointer.next = new ListNode(carry);
  }
  // return dummy's head next node
  return headList.next;
};

// O(max(m, n)) space => the new linked list we create will be as long as the longest list we're given
// O(n) time because we touch every node
