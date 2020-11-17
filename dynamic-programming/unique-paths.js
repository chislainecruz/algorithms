/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Example 2:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
Example 3:

Input: m = 7, n = 3
Output: 28
Example 4:

Input: m = 3, n = 3
Output: 6
*/

/*
var uniquePaths = function(m, n) {
  //check
  if (m < 0 || n < 0) return 0

  //base case
  if (m === 1) return 1
  if (n === 1) return 1


  return uniquePaths(m -1, n) + uniquePaths(m, n -1)
};
*/
//runtime is too long to pass all test cases

// memoization to stop re-calculating answers we've seen -> a grid

var uniquePaths = function (m, n) {
  let grid = [];

  //create a grid with all 1's -> only the first row and col will remain with 1's
  for (let i = 0; i < n; i++) {
    grid.push([]);
    for (let j = 0; j < m; j++) {
      grid[i].push(1);
    }
  }

  //visit the inner cells and re-write their value with the sum of the cell on top and left
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  //return the last value in the the grid, as this holds all possible paths
  return grid[n - 1][m - 1];
};

// O(M x N) time complexity
// O(M x N) space
