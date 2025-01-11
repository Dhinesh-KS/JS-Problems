// To find the union of two sorted arrays in JavaScript, you can use a two-pointer approach,
// which efficiently traverses both arrays to combine them into a single sorted array with unique elements.

// arr1 = [1, 2, 3, 4, 5]
// arr2 = [1, 2, 3, 8, 9]
// output = [ 1, 2, 3, 4, 5, 8, 9 ]
function DSA6() {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 3, 8, 9];

  // first, using set
  console.log([...new Set([...arr1, ...arr2])]); // [ 1, 2, 3, 4, 5, 8, 9 ]

  // second, using concat
  const unionR = arr1.concat(
    arr2.filter((num) => {
      return !arr1.includes(num);
    })
  );
  console.log("unionR", unionR); // [ 1, 2, 3, 4, 5, 8, 9 ]

  // third, using while loop
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  console.log("result", result); // [ 1, 2, 3, 4, 5, 8, 9 ]
}

// Explanation:
// Two-Pointer Approach: Two pointers i and j are used to traverse arr1 and arr2 respectively.
// Comparison: Elements at arr1[i] and arr2[j] are compared:
// If arr1[i] is smaller, it is added to the result array, and i is incremented.
// If arr2[j] is smaller, it is added to the result array, and j is incremented.
// If they are equal, one of them is added, and both pointers are incremented.
// Skip Duplicates: The function skips consecutive duplicate elements to ensure unique values in the result.
// Remaining Elements: After the main loop, any remaining elements in either array are added to the result array while skipping duplicates.
// This approach ensures that the union of the two sorted arrays is computed efficiently with a time complexity of O(n + m), where n and m are the lengths of the two arrays.
