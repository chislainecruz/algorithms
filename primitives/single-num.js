/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4
*/
// if one num, we return that num

const singleNum = (nums) => {
  //O(n) runtime

  // O(n^2) time, O(1) space - nested for loop - checking for a single num
  // O(n) time, O(n) space - map keeping track of seen nums. For loop once, re-visit map for a value of 1
  // O(n log n) time, O(1) - sort the array, if the num we're on does not match the next, it is the unique num. Jump i otherwise

  if (nums.length === 1) return nums[0];

  //sort
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    if (element === nums[i + 1]) {
      i++;
    } else {
      return element;
    }
  }

  return "No unique number found";
};
