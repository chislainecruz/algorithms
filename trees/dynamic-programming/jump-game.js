/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.



Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/

var canJump = function (nums) {
  //BCR - O(n) need to look at every index at worst case [1,1,1,1]

  // let's approach this from the target index, and check for a valid path
  //remember our paths, initialize our memo table to 0, meaning no good path
  let memo = [];
  while (memo.length < nums.length - 1) {
    memo.push(0);
  }
  //the last index must be good because we're standing on it
  memo.push(1);

  //iterate over all elements
  for (let i = nums.length - 2; i >= 0; i--) {
    let maxJump = i + nums[i];
    for (let j = i + 1; j <= maxJump; j++) {
      if (memo[j] === 1) {
        memo[i] = 1;
        break;
      }
    }
  }
  return memo[0] === 1;
};
//O(n^2) time
// O(n) space

//we can achieve an O(n) time solution by using a greedy approach
