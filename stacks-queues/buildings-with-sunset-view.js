/*
Compute Buildings With A Sunset View
We are given an array buildings of integers. Each item represents the height of a building on a skyline from left to right.

Here are the details:
The sun sits on the far left
A building is "blocked" from seeing the sun if there is a building to its left that is >= in height than itself

You should:
Return a revised list of the buildings with "blocked" buildings excluded
Maintain the relative order of the buildings as they stood in buildings
Represent each building by its original index in buildings (rather than by its value)

Example 1:
Input: [11, 12, 13, 14, 15]
Output: [0, 1, 2, 3, 4]
Explanation: No building is blocked. All buildings stay.

Example 2:
Input:  [7, 4, 8, 2, 9]
Output: [0, 2, 4]

Explanation:
Building at index 1 (value 4) is blocked by building at index 0 (value 7) because 7 >= 4.

Building at index 3 (value 2) is blocked by building at index 2 (value 8) because 8 >= 2.

Constraints:
buildings[i] >= 0

*/

const getBuildingsWithAView = (buildings) => {
  //create a stack of buildings' index to return
  let sunset = [];
  //keep track of the tallest building that could block the sunset
  //initialize to -1 since other buldings' height could be 0
  let tallest = -1;

  //iterate through the array of buildings
  for (let i = 0; i < buildings.length; i++) {
    //if the current building is taller than the tallest so far, add its index to the stack
    if (buildings[i] > tallest) {
      sunset.push(i);
      //reassign the tallest to the current
      tallest = buildings[i];
    }
  }
  return sunset;
};

//O(n) space. Worst case scenario we have an array as long as the original
//O(n) time. We iterate through the entire array
