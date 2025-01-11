var user = {
  name: "Vishal",
  address: {
    primary: {
      house: "109",
      street: {
        main: "21",
        cross: "32",
      },
    },
  },
};

function flattenObject(obj, prefix = "", result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

const flattenedUser = flattenObject(user);
console.log(flattenedUser);
