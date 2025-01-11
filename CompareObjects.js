function shallowCompare(obj1, obj2) {
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  )
    return false;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key of Object.keys(obj1)) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

const obj1 = { a: 1, b: 2, c: { d: "1" } };
const obj2 = { a: 1, b: 2, c: { d: "1" } };

console.log(shallowCompare(obj1, obj2));
