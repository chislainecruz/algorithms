/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/

//approach: check for their lengths, if they're  not the same, return false
//loop through one of the strings... if one of the elements is not found on the other string, return false
// otherwise, remove it from the other string so that we take into account duplicate letters
//if we manage to get through the entire loop, return true
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (!t.includes(s[i])) {
      return false;
    } else {
      t = t.slice(0, t.indexOf(s[i])) + t.slice(t.indexOf(s[i]) + 1, t.length);
    }
  }
  return true;
};

//O(n || m) time complexity
//O(1) space
