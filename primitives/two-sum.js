/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

//Approach: Create a hash table to store the indexes and values, providing constant lookup time

var twoSum = function (nums, target) {
  let map = new Map();
  let sumIndex = [];

  //iterate through the entire array
  nums.forEach((num, i) => {
    //if we find the number we need already in the hash map, add to the sumIndex array
    if (map.has(num)) {
      sumIndex.push(map.get(num), i);
      return sumIndex;
    } else {
      //otherwise, add to hash map
      let difference = target - num;
      map.set(difference, i);
    }
  });
  return sumIndex; //indexes of both numbers adding to target
};
//O(n) space because we're creating a hash table
//O(n) time because we have to traverse the array once to find all numbers
