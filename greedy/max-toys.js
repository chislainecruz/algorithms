/*
Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.

Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example, if prices = [1,2,3,4] and Mark has k = 7 to spend, he can buy items 1,2,3 for 6, or 3,4 for 7 units of currency. He would choose the first group of 3 items.

Function Description

Complete the function maximumToys in the editor below. It should return an integer representing the maximum number of toys Mark can purchase.

maximumToys has the following parameter(s):

prices: an array of integers representing toy prices
k: an integer, Mark's budget

*/

// Approach: sort input array and then iterate over it
//beginning from the first index, (cheaptest toy) check its price is less than or equal to the budget
//if it is, add to the toy count, reduce the cost from the budget, and increment your index
//as sson as the toy's cost is higher than the budget, break out of loop and return the number of toys purchased
function maximumToys(prices, k) {
  let sortedPrices = prices.sort((a, b) => a - b); //O(n log(n)) time
  let pointer = 0;
  let toys = 0;

  while (pointer < prices.length) {
    //O(n) time
    if (sortedPrices[pointer] <= k) {
      toys++;
      k -= sortedPrices[pointer];
      pointer++;
    } else {
      break;
    }
  }
  return toys;
}

//O(n log(n)) time complexity
// O(n) space for sorted array
