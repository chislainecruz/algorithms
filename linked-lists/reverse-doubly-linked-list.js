/*
Reverse Doubly-Linked List

You’re given the pointer to the head node of a doubly linked list. Reverse the order of the nodes in the list. The head node might be NULL to indicate that the list is empty. Change the next and prev pointers of all the nodes so that the direction of the list is reversed. Return a reference to the head node of the reversed list.

Function Description

Complete the reverse function in the editor below. It should return a reference to the head of your reversed list.

reverse has the following parameter(s):

head: a reference to the head of a DoublyLinkedList
Input Format

The first line contains an integer , the number of test cases.

Each test case is of the following format:

The first line contains an integer , the number of elements in the linked list.
The next  lines contain an integer each denoting an element of the linked list.

Output Format

Return a reference to the head of your reversed list. The provided code will print the reverse array as a one line of space-separated integers for each test case.
*/

//Approach: Rewire in-place each node's next and previous nodes.

function reverse(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.prev = next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}

//O(1) space
//O(n) time
