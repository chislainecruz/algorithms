/*
 A palindrome is a sequence that reads the same forwards and backward.

Given an integer as input, write a function that tests if it is a palindrome.

Example 1:
Input: 9232
Output: false

Example 2:
Input: 12321
Output: true

Example 3:
Input: 1
Output: true

Example 4:
Input: -121
Output: false

Note
A negative number cannot be a palindrome due to the - sign
*/

//Approach: Two pointers

const isPalindrome = (x) => {
  //create num as a string to iterate it
  let string = x.toString();
  //pointer 1
  let length = string.length;
  //if its just one digit, return true
  if (length === 1) {
    return true;
    //if there are 2 characters, we need to check if one of those is a negative sign. If it is, return false bc its just one negative number
  } else if (length === 2 && string.indexOf("-") !== -1) {
    return false;
  }
  //pointer 2
  let i = 0;

  //while the pointers are not passing each other
  while (i < length - 1) {
    if (string[i] !== string[length - 1]) {
      return false;
    }
    i++;
    length--;
  }
  return true;
};

//O(n) time
//O(n) space
