/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:

MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3

*/

/*
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.nums = [];
};

/*
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.nums.length >= this.size) {
    this.nums.shift(); //O(n)
  }
  this.nums.push(val);
  return this.nums.reduce((curr, acc) => curr + acc, 0) / this.nums.length; //O(n)
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

//O(n) time complexity where n is the length of the elements
//O(N) space complexity where N is the size of the moving window
