/*
A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].

Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Output Format

Print a single line of n space-separated integers denoting the final state of the array after performing d left rotations.

Sample Input

5 4
1 2 3 4 5
Sample Output

5 1 2 3 4
*/

function rotLeft(a, d) {
  if (d % a.length === 0) {
    return a;
  }
  while (d > 0) {
    a.push(a.shift());
    d--;
  }
  return a;
}
