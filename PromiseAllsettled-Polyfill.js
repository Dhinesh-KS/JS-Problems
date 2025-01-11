/* 💡"JavaScript-with-JC"
👉 Promise.allSettled() and Its Polyfill
Promise.allSettled() returns a promise that gets resolved when all passed promises are settled ( either fulfilled or rejected ) and in result 
it gives an array of objects having status and the value/reason of each promise.

💡 Note :- If passed empty [], returns empty [].
👉 We can create our own custom allSettled( Polyfill of allSettled ), Check out the code below.👇 
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1st Promise resolved!");
  }, 1000);
});

const p2 = Promise.resolve("2nd Promise resolved!");

const p3 = 3;

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let status = true;
    if (!status) {
      resolve("4th Promise resolved!");
    } else {
      reject("4th Promise rejected!");
    }
  }, 2000);
});

Promise.allSettled([p1, p2, p3, p4]).then((result) => {
  console.log("result", result);
});

// Using Promise.allSettled() with await
(async () => {
  const result = await Promise.allSettled([p1, p2, p3, p4]);
  console.log("result", result);
})();

// 💡 Polyfill of Promise.allSettled()

Promise.customAllSettled = function (promises) {
  return new Promise((resolve) => {
    let result = [];
    let settledCount = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          result[i] = { status: "fulfilled", value: res };
          settledCount++;
          if (settledCount === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          result[i] = { status: "rejected", error: err };
          settledCount++;
          if (settledCount === promises.length) {
            resolve(result);
          }
        });
    }
  });
};

Promise.customAllSettled(promises).then((res) => console.log(res));

// 👉 1) Using simple for loop
Promise.customAllSettled = function (promisesArray) {
  // 👇 return a new promise
  return new Promise((resolve) => {
    const result = [];

    // 👇 to check how many promises are settled
    let settledCount = 0;

    // 👇 if passed as empty [] then return empty []
    if (promisesArray.length === 0) {
      resolve(result);
    }

    // 👇 if all the promises are settled,
    //resolve and return the result array
    function resolveFinalResult() {
      settledCount++;
      if (settledCount === promisesArray.length) {
        resolve(result);
      }
    }

    for (let i = 0; i < promisesArray.length; i++) {
      Promise.resolve(promisesArray[i])
        .then((response) => {
          // 👇 if promise passes store its status and increment the count
          result[i] = { status: "fulfilled", value: response };
          resolveFinalResult();
        })
        .catch((error) => {
          // 👇 if promise fails store its status and increment the count
          result[i] = { status: "rejected", reason: error };
          resolveFinalResult();
        });
    }
  });
};

Promise.customAllSettled([p1, p2, p3, p4]).then((result) => {
  console.log("result custom", result);
});

// Using Promise.allSettled() with await
(async () => {
  const result = await Promise.customAllSettled([p1, p2, p3, p4]);
  console.log("result custom", result);
})();

/* Output 👇
[
  { status: 'fulfilled', value: '1st Promise resolved!' },
  { status: 'fulfilled', value: '2nd Promise resolved!' },
  { status: 'fulfilled', value: 3 },
  { status: 'rejected', reason: '4th Promise rejected!' }
]
*/

// 👉 2) Using map method and promise.all()
Promise.customAllSettled2 = function (promisesArray) {
  const transformedpromises = promisesArray.map((promise) => {
    return Promise.resolve(promise)
      .then((value) => {
        return {
          status: "fulfilled",
          value,
        };
      })
      .catch((reason) => {
        return {
          status: "rejected",
          reason,
        };
      });
  });
  return Promise.all(transformedpromises);
};

Promise.customAllSettled2([p1, p2, p3, p4]).then((result) => {
  console.log("result custom using map", result);
});

// Using Promise.allSettled() with await
(async () => {
  const result = await Promise.customAllSettled2([p1, p2, p3, p4]);
  console.log("result custom using map", result);
})();

/* Output 👇
[
  { status: 'fulfilled', value: '1st Promise resolved!' },
  { status: 'fulfilled', value: '2nd Promise resolved!' },
  { status: 'fulfilled', value: 3 },
  { status: 'rejected', reason: '4th Promise rejected!' }
]
*/
