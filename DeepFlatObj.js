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

const flattenedUser1 = flattenObject(user);
console.log(flattenedUser1);
// {
//     "name": "Vishal",
//     "address.primary.house": "109",
//     "address.primary.street.main": "21",
//     "address.primary.street.cross": "32"
//   }

function flattenObjectWithKeyword(
  obj,
  keyword = "_",
  prefix = "",
  result = {}
) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}${keyword}${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flattenObjectWithKeyword(obj[key], keyword, newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

const user = {
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

const flattenedUser2 = flattenObjectWithKeyword(user, "_");
console.log(flattenedUser2);

// {
//     "name": "Vishal",
//     "address_primary_house": "109",
//     "address_primary_street_main": "21",
//     "address_primary_street_cross": "32"
//  }
