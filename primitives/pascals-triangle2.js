/*
Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
*/

const getRow = (rowIndex) => {
  if (rowIndex === 0) {
    return [1];
  } else if (rowIndex === 1) {
    return [1, 1];
  }
  let triangle = [[1], [1, 1]];

  for (let i = 2; i <= rowIndex; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle[rowIndex];
};
