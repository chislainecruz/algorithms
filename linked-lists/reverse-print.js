/* Print in reverse
You are given the pointer to the head node of a linked list and you need to print all its elements in reverse order from tail to head, one element per line. The head pointer may be null meaning that the list is empty - in that case, do not print anything!

Input Format

You have to complete the void reversePrint(SinglyLinkedListNode* head) method which takes one argument - the head of the linked list. You should NOT read any input from stdin/console.

The first line of input contains , the number of test cases.
The input of each test case is as follows:

The first line contains an integer , denoting the number of elements in the list.
The next n lines contain one element each, denoting the elements of the linked list in the order.

Output Format

Complete the reversePrint function in the editor below and print the elements of the linked list in the reverse order, each in a new line.

  For your reference:

  SinglyLinkedListNode {
      int data;
      SinglyLinkedListNode next;
  }

 */

//Approach: This is a singly linked list and can only be traversed forward.
//By creating a stack, we can print the last item first and pop elements until the stack is empty

function reversePrint(head) {
  let stack = [];

  while (head) {
    stack.push(head.data);
    head = head.next;
  }

  while (stack.length >= 1) {
    console.log(stack.pop());
  }
}

//O(n) space since the stack is as big as the list
//O(n) time as we need to traverse the entire list to complete our stack
