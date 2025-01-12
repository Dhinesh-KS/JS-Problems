// To solve the problem of checking if a string has valid parentheses in JavaScript, you can use a stack-based approach.
// This problem involves determining if every opening bracket ((, {, [) has a corresponding closing bracket (), }, ]) in the correct order.

// Steps to Solve:
// Use a Stack: Push each opening bracket onto the stack. For each closing bracket, check if it matches the top of the stack.
// Map Brackets: Use a mapping to pair each closing bracket with its corresponding opening bracket.
// Stack Operations: Push and pop from the stack as you iterate through the string. If the stack is empty when you encounter a closing
// bracket or the final stack is not empty, the parentheses are not valid.

function isValidParentheses(str) {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of str) {
    if (Object.values(bracketMap).includes(char)) stack.push(char);
    else {
      if (
        Object.keys(bracketMap).includes(char) &&
        stack.pop() !== bracketMap[char]
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
