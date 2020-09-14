/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.


Note: You may assume the string contains only lowercase English letters.
*/
//Approach: Hash map counting the num of occurrences for each letter

var firstUniqChar = function (s) {
  let map = new Map(); //O(1) space
  let letter;

  for (let i = 0; i < s.length; i++) {
    //O(n) time
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let [key, value] of map.entries()) {
    // O(n) time
    console.log(key, value);
    if (value === 1) {
      letter = key;
      break;
    }
  }
  if (!map.size) return -1;
  return s.indexOf(letter);
};

//O(n) time && O(1) space
