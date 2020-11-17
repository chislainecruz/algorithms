/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1
Example 5:

Input: nums = [-2147483647]
Output: -2147483647

*/

/*
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0]
  let maxSum = [nums[0]]
  //dp keeps a memo on the max sum up to that index

  for (let i = 1; i < nums.length; i++){
      let contSum = maxSum[maxSum.length - 1] + nums[i]

      if (contSum > nums[i]){
          maxSum.push(contSum) //constant time
      } else {
      maxSum.push(nums[i])
      }

  }
  return Math.max(...maxSum)

};
*/

//O(n) time
//O(n) space

//better way -> improve space complexity by modifying the input array

var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let max = nums[0];

  //dp keeps a memo on the max sum up to that index

  for (let i = 1; i < nums.length; i++) {
    let contSum = nums[i - 1] + nums[i];

    if (contSum > nums[i]) {
      nums[i] = contSum; //constant time
    }
    if (nums[i] > max) max = nums[i];
  }
  return max;
};

//O(n) time
//O(1) space
