/*
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.



Example 1:

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]

*/

var flatten = function (head) {
  if (!head) {
    return;
  }
  let curr = head;

  while (curr) {
    if (curr.child) {
      flatten(curr.child);
      rewire(curr);
    }
    curr = curr.next;
  }
  return head;
};

function rewire(parent) {
  //curr.next will be it's child
  // point child pointer to null
  // previous pointer to the child will be its parent
  //bc: there are no more nodes to evaluate
  let next = parent.next;
  parent.next = parent.child;
  parent.next.prev = parent;
  parent.child = null;

  let curr = parent.next;
  while (curr.next) {
    curr = curr.next;
  }
  if (next) {
    curr.next = next;
    curr.next.prev = curr;
  }
}
