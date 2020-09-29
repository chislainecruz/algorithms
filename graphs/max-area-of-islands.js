/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
*/

const maxAreaOfIsland = (grid) => {
  //approach: Similar as num of island, instead we want to calculate largest island
  if (!grid.length) {
    return 0;
  }

  let max = 0;
  let n = grid.length;
  let m = grid[0].length;

  //traverse our graph
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let area; //keep track of our area locally as we need it to re-set for every gropu of islands
      if (grid[row][col] === 1) {
        area = dfs(row, col);
      }
      if (area > max) {
        //ensure we always have our max updated when area is greater than it
        max = area;
      }
    }
  }
  return max;

  function dfs(row, col) {
    //make sure the indexes are not out of bounds, or not anything but land
    if (row >= n || col >= m || row < 0 || col < 0 || grid[row][col] !== 1) {
      return 0;
    }

    grid[row][col] = 2; //change value so we avoid re-visiting
    let area = 1;

    //call dfs with neighbors
    area += dfs(row - 1, col); //top
    area += dfs(row + 1, col); // bottom
    area += dfs(row, col - 1); //left
    area += dfs(row, col + 1); //right

    return area;
  }
};

//O(n * m) time complexity - for loops
//O(n * m) space for the recursive calls - 5 times per node (when visited, and by it's 4 neighbors)
