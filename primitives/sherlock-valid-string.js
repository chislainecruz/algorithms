/*
Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string s, determine if it is valid. If so, return YES, otherwise return NO.

For example, if s=abc, it is a valid string because frequencies are {a: 1, b: 1, c: 1}. So is s=abcc because we can remove one c and have 1 of each character in the remaining string. If s=abccc however, the string is not valid as we can only remove 1 occurrence of c. That would leave character frequencies of {a: 1, b: 1, c: 2}.

Function Description

Complete the isValid function in the editor below. It should return either the string YES or the string NO.

isValid has the following parameter(s):

s: a string
Input Format

A single string .

Sample Input 0

aabbcd
Sample Output 0

NO
*/

function isValid(s) {
  let letterMap = {}; //O(n) space

  //O(n) time
  for (let i = 0; i < s.length; i++) {
    if (letterMap[s[i]]) {
      letterMap[s[i]] = letterMap[s[i]] + 1;
    } else {
      letterMap[s[i]] = 1;
    }
  }
  let count = letterMap[s[0]];
  let removals = 0;
  for (let letter in letterMap) {
    //O(n) time
    if (letterMap[letter] !== count) {
      if (removals < 1) {
        removals++;
      } else {
        return "NO";
      }
    }
  }
  return "YES";
}
//O(2n) time complexity - simplified to O(n)
//O(n) space
