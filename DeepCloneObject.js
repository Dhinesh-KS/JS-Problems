//dev.to/iamcymentho/efficient-deep-cloning-of-objects-in-javascript-a-comprehensive-guide-2dei

function cloneDeep(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) copy[key] = cloneDeep(obj[key]);
  }
  return copy;
}

const clonedObj = cloneDeep(obj1);
clonedObj.a = 2;
clonedObj.c.d = "2";

console.log(obj1, clonedObj);

// deepclone
//dev.to/sanderdebr/deep-equality-checking-of-objects-in-vanilla-javascript-5592
function deepCompare(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  )
    return false;
  const keysA = Object.keys(obj1);
  const keysB = Object.keys(obj2);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key)) return false;
    if (typeof obj1[key] === "function" || typeof obj2[key] === "function") {
      if (obj1[key].toString() !== obj2[key].toString()) return false;
    } else {
      if (!deepCompare(obj1[key], obj2[key])) return false;
    }
  }
  return true;
}

const obj1 = { name: "Peter", stats: { points: 45, isActive: true } };
const obj2 = { name: "Peter", stats: { points: 45, isActive: false } };

console.log(deepCompare(obj1, obj2));

// Purpose: This block handles the comparison of non-function values, such as numbers, strings, objects, arrays, or any other non-function data types.

// Recursive Comparison: The deepCompare function is called recursively with obj1[key] and obj2[key] as arguments. This means the function will perform a deep comparison on the values corresponding to the current key.

// Checking for Equality: The !deepCompare(obj1[key], obj2[key]) condition checks whether the result of the recursive comparison is false. If it is false, that means the sub-properties or nested objects are not equal.

// Return false if Unequal: If any of the recursive comparisons returns false, the overall function immediately returns false. This ensures that if any part of the objects is not deeply equal, the whole comparison returns false.

// Continue if Equal: If the recursive call returns true, the function continues to the next key in the loop. This process ensures that all keys and values are checked for deep equality.
