function hasCycle(obj, visited = new Set()) {
  // Check if the input is an object and not null
  if (obj && typeof obj === "object") {
    // Check if the object has already been visited (indicating a cycle)
    if (visited.has(obj)) {
      return true; // A cycle is detected
    }
    // Mark the current object as visited by adding it to the 'visited' set
    visited.add(obj);

    // Iterate over all properties of the object
    for (let key in obj) {
      // Check if the property belongs to the object itself (not inherited)
      if (obj.hasOwnProperty(key)) {
        // Recursively check if any property of the object has a cycle
        if (hasCycle(obj[key], visited)) {
          return true; // A cycle is detected in one of the properties
        }
      }
    }
    // Remove the current object from the 'visited' set after checking all its properties
    visited.delete(obj);
  }
  // If no cycle is found, return false
  return false;
}

// Create an object with a cycle (self-referencing)
let objWithCycle = {};
objWithCycle.self = objWithCycle; // This creates a circular reference

// Create an object without a cycle
let objWithoutCycle = { a: 1, b: 2, c: 3 };

// Check if the objects have cycles
console.log(hasCycle(objWithCycle)); // Output: true (because it has a cycle)
console.log(hasCycle(objWithoutCycle)); // Output: false (no cycle)
