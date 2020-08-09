/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */

//Approach: Create map and use two pointers at both ends to compare values
var isPalindrome = function (head) {
  let i = 0;
  let nodes = {};

  while (head) {
    //O(n) time because I'm iterating thru the entire list
    nodes[i] = head.val;
    i++;
    head = head.next;
  }

  let k = 0;
  i -= 1;
  while (k < i) {
    //constant O(1) time because I'm accessing thru hashmap
    if (nodes[i] !== nodes[k]) {
      return false;
    }
    i--;
    k++;
  }
  return true;
};

// O(n) + O(1) = O(1n) => O(n) time
// O(n) space bc hashmap will be as big as list
