/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

//Approach: The pattern is that the possible combinations of a step
// is calculated by the sum of the 2 steps before it
// 1 = 1 ; 2 = 2; 3 = 2 + 1
// base cases being 1 and 2

// the below approach works for small numbers. Time complexity grows exponentially and will time-out

/*
var climbStairs = function(n) {
  if (n === 1) return 1
  if (n === 2) return 2

  return climbStairs(n - 1) + climbStairs(n - 2)
};
*/
// O(2^n)

// To solve this issue, we need to cache results

/*
var climbStairs = function(n) {
  let cache = new Map()
  cache.set(1, 1)
  cache.set(2, 2)
  return findWays(n)

  function findWays (num){

      if (cache.has(num)) {
       return cache.get(num)
      }
      cache.set(num, findWays(num - 1) + findWays(num - 2))
     return cache.get(num)
  }

};
*/

//O(n) time
//O(n) space

// we can do better and achieve a constant space.
// we only need to keep track of the prev two nums, so no need to remember all numbers

var climbStairs = function (n) {
  if (n < 3) {
    return n;
  }

  let first = 1;
  let second = 2;
  let result;

  for (let i = 3; i <= n; i++) {
    result = first + second;
    first = second;
    second = result;
  }
  return result;
};
