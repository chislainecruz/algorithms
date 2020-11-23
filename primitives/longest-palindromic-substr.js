/*
Given a string s, return the longest palindromic substring in s.


Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
*/
//O(n)time target

// O(n^3)
// traverse the string. for each char, find a matching one. If no, move on to next el
// if yes, keep pointers at each, and continue matching their next char, until they're no longer matching
//OR the pointers pass each other. To which then we return the palindrome which would be stored in a variable
// loop through the s
// when 2 matching letters are found, calc distance, (length of potential palindrome) and if longer than curr palindrome, proceed to validate
// validate can be it's own task or fn

//two pointers

const longestPalindrome = (s) => {
  if (!s.length || s.length === 1) return s;

  let palindrome = "";

  let i = 0;

  while (i < s.length) {
    //O(n)
    let j = s.length - 1;
    while (i < j) {
      // O(n)
      if (s[i] === s[j]) {
        if (j - i + 1 > palindrome.length) {
          // proceed to verify it's palindrome
          let potentialPalindrome = s.slice(i, j + 1);
          if (validatePalindrome(potentialPalindrome)) {
            //O(n)
            palindrome = potentialPalindrome;
          }
        }
      }
      j--;
    }
    i++;
  }

  function validatePalindrome(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  }

  if (!palindrome.length) return s[0];
  return palindrome;
};
