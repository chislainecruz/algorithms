/*
Given a string s, find the length of the longest substring without repeating characters.


Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0


*/

const lengthOfLongestSubstring = (s) => {
  if (!s) return 0;
  if (s.length === 1) return 1;

  let map = {};
  let longestSubstr = "";
  let lastIndx = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char]) {
      if (i - lastIndx > longestSubstr.length) {
        longestSubstr = s.slice(lastIndx, i);
      }
      map = {};
      i = lastIndx;
      lastIndx++;
    } else {
      map[char] = 1;
    }
  }
  if (longestSubstr.length < Object.keys(map).length) {
    return Object.keys(map).length;
  }
  return longestSubstr.length;
};

//Time complexity : O(2n) = O(n). In the worst case each character will be visited twice
