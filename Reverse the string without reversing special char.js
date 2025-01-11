function reverseWithoutSpecialChars(str) {
  // Convert the string into an array to manipulate characters
  const strArr = str.split("");

  // Use two pointers to reverse only the alphabetic characters
  let left = 0;
  let right = strArr.length - 1;

  while (left < right) {
    // Check if the left character is a special character
    if (!isAlphabet(strArr[left])) {
      left++; // Move the left pointer to the right
    }
    // Check if the right character is a special character
    else if (!isAlphabet(strArr[right])) {
      right--; // Move the right pointer to the left
    }
    // Swap the alphabetic characters
    else {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
      left++;
      right--;
    }
  }

  // Join the array back into a string and return
  return strArr.join("");
}

// Helper function to check if a character is an alphabetic character
function isAlphabet(char) {
  return /[a-zA-Z]/.test(char);
}

// Example usage
const input = "a,b$c";
const output = reverseWithoutSpecialChars(input);
console.log(output); // Output: "c,b$a"

// Explain the core logic and why it works:
// Two-Pointer Technique:
// "I will use a two-pointer approach, one starting from the beginning (left) and one from the end (right) of the string."
// Handling Special Characters:
// "If either of the pointers points to a special character, I will move that pointer inward until it points to an alphabetic character."
// Swapping:
// "When both pointers point to alphabetic characters, I will swap them and then move both pointers inward."
// Completion:
// "I continue this process until the pointers meet or cross, ensuring only alphabetic characters are reversed."

// Code Explanation:
// Go through the code step by step to demonstrate your understanding:
// "Here’s how the code implements this logic:"
// split and join: "I convert the string to an array to easily manipulate individual characters, and then join it back into a string at the end."
// isAlphabet Function: "This helper function checks if a character is alphabetic using a regular expression."
// Pointer Movement: "Using a while loop, I adjust the pointers based on whether the characters are alphabetic or special, and swap characters when appropriate."
