/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

const generate = (numRows) => {
  if (numRows === 0) {
    return [];
  } else if (numRows === 1) {
    return [[1]];
  }
  let result = [];
  result.push([1], [1, 1]);

  for (let i = 2; i < numRows; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j] + result[i - 1][j - 1];
    }
    row.push(1);
    result.push(row);
  }
  return result;
};
