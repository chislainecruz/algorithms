/* Find Merge Point of 2 Linked Lists

Given pointers to the head nodes of 2 linked lists that merge together at some point, find the Node where the two lists merge. It is guaranteed that the two head Nodes will be different, and neither will be NULL.

In the diagram below, the two lists converge at Node x:

[List #1] a--->b--->c
                     \
                      x--->y--->z--->NULL
                     /
     [List #2] p--->q
Complete the int findMergeNode(SinglyLinkedListNode* head1, SinglyLinkedListNode* head2) method so that it finds and returns the data value of the Node where the two lists merge.

Test Case 0
Answer: 2

 1
  \
   2--->3--->NULL
  /
 1
Test Case 1
Answer: 3

1--->2
      \
       3--->Null
      /
     1
*/

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/
// Approach: find the length of both lists
//the the longer list and advance the pointer by the difference of the lengths
// the next node will be the merge point

function findMergeNode(headA, headB) {
  let headALength = length(headA);
  let headBLength = length(headB);
  let diff;
  let toAdvance;
  let other;

  if (headALength > headBLength) {
    diff = headALength - headBLength;
    toAdvance = headA;
  } else if (headALength < headBLength) {
    diff = headBLength - headALength;
    toAdvance = headB;
    other = headA;
  } else {
    toAdvance = headA;
    other = headB;
  }
  while (diff > 0) {
    toAdvance = toAdvance.next;
    diff--;
  }
  return toAdvance.next.data;
}

const length = (list) => {
  let count = 0;
  while (list) {
    count++;
    list = list.next;
  }
  return count;
};

//O(1) space
//O(n) time
