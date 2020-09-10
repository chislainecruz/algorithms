/*
You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

For example, given an array of [1, 2, 3, 4] and a target value of 1, we have three values meeting the condition: 2-1 = 1 , 3-2 = 1, and 4-3 = 1.

Function Description

Complete the pairs function below. It must return an integer representing the number of element pairs having the required difference.

pairs has the following parameter(s):

k: an integer, the target difference
arr: an array of integers

*/

// Approach: Match every number with another and check for the absolute value of their difference. If it matches k, increment the count of pairs. Return count of pairs.
function pairs(k, arr) {
  let foundPairs = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        foundPairs++;
      }
    }
  }
  return foundPairs;
}
//O(n^2) time complexity
//O(1) space

//------------Another solution------------

function pairs(k, arr) {
  let foundPairs = 0;
  let diff = [];

  for (let i = 0; i < arr.length; i++) {
    diff.push(arr[i] + k, arr[i] - k);
  }
  let index = 0;
  while (index < diff.length) {
    if (arr.includes(diff[index])) {
      foundPairs++;
    }
    index++;
  }

  console.log(diff);
  return foundPairs / 2;
}
//O(n) time complexity
//O(n) space

//-------------The better approach (as it passed all test cases and did not time out)

// Approach: Two pointers and sort the array. Then check for the differences and depending on the value, you'll increment a pointer.
function pairs(k, arr) {
  let foundPairs = 0;
  let i = 0; //right pointer
  let j = 1; //left pointer
  let sortedArr = arr.sort((a, b) => a - b);
  while (j < sortedArr.length) {
    //so we don't go out of bounds
    let diff = sortedArr[j] - sortedArr[i]; // b/c array is sorted, this number will be positive

    if (diff === k) {
      //we found a pair
      foundPairs++;
      j++; //advanced left pointer
    } else if (diff > k) {
      i++; //if diff is greater than the target, check a larger number against it
    } else {
      j++; //otherwise, if it's less, keep the smaller and increment the larger            number
    }
  }
  return foundPairs;
}
//O(n) time complexity
//O(n) space
