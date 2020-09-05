/*
Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
Example 3:

Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
*/

//approach: Memoization **
//keep track of the frequency of the letters in the count array
//iterate over the string and check if it's either the first iteration OR if the letter we are on is the same as the previous one, make the count 1
//otherwise, it means it is equal to the one right before, so increment the count
//and since we're incrementing it, check if the count is the same as our k
//if so, delete that out of our string.
//now let's go back to the index right before the deletion to re-evaluate
//if we reach the end, return the string
var removeDuplicates = function (s, k) {
  let count = [];
  let copy = s;
  for (let i = 0; i < copy.length; i++) {
    if (i === 0 || copy.charAt(i) !== copy.charAt(i - 1)) {
      count[i] = 1;
    } else {
      count[i] = count[i - 1] + 1;
      if (count[i] === k) {
        copy = copy.slice(0, i - k + 1) + copy.slice(i + 1);
        i = i - k;
      }
    }
  }
  return copy;
};

//O(n) time complexity -> looping through the string
//O(n) space since we're creating a copy of the string and an array affected by input
