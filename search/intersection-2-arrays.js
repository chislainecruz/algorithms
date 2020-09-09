/*
Intersection of 2 Sorted Arrays
Given two sorted arrays, return a new array that represents their intersection.

Example 1:
Input:
[1,2,3,5]
[1,2]

Output:
[1,2]

Example 2:
Input:
[1,2,2,3]
[1,1,4]

Output:
[1]

Constraints
Each element in the result must be unique.
*/
const intersection = (nums1, nums2) => {
  let point1 = 0;
  let point2 = 0;
  let answer = [];

  while (point1 < nums1.length && point2 < nums2.length) {
    if (nums1[point1] === nums2[point2]) {
      answer.push(nums1[point1]);
      point1++;
      point2++;
    } else if (nums1[point1] > nums2[point2]) {
      point2++;
    } else {
      point1++;
    }
  }
  return answer;
};
