/*
You are given a string with 3 types of tokens, each with an "open" type and "closed" type.

A string is "balanced" if all open tokes of a certain type are closed appropriately.

Given a string s, return true if it is balanced, return false otherwise.

Opening tokens:
An open parenthesis (
An open bracket [
An open brace {

Closing tokens:
A closing parenthesis )
A closing bracket ]
A closing brace }

Example 1:
Input: "()"
Output: true

Example 2:
Input: "())"
Output: false
Explanation: There is 1 unmatched closing paren

Example 3:
Input: "((([[)))"
Output: false
Explanation: There are 2 unmatched closing braces

Constraints:
A token can only close the corresponding opening token of its same type
The string will be well-formed (only contain the tokens discussed and no other types of characters)
*/

const isValid = (s) => {
  //match the sets of opening and closing tokens
  const tokens = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  //keep track of all the open tokens in a stack, as the order matters
  let stack = [];

  //loop through the string
  for (let i = 0; i < s.length; i++) {
    //if the character is an opening token, put it in the stack, and continue iterating
    if (tokens.hasOwnProperty(s[i])) {
      stack.push(s[i]);
    } else if (stack.length === 0) {
      //if we get to this point, the character must be a closing token.
      //check if the stack is empty, and if it is, it is not balanced => return false
      return false;
    } else {
      //if we get here, the token is a closing one, and the stack is not empty
      //we now check if the last character on the stack (opening) matches the corresponding closing one. (string[i])
      if (tokens[stack.pop()] !== s[i]) {
        //if they're not equal, it is not balanced
        return false;
      }
    }
  }
  //if we finished iterating and haven't return false, AND if the stack is empty, the string is balanced
  return stack.length === 0;
};
