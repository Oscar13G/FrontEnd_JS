// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     if (!promises.length) resolve(promises);

//     let promiseResults = [];
//     promises.forEach((prom) => {
//       prom
//         .then((result) => {
//           promiseResults.push(result);
//           if (promiseResults.length === promises.length)
//             resolve(promiseResults);
//         })
//         .catch((error) => reject(error));
//     });
//   });
// }

// function soon(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(value + 1), 1000);
//   });
// }
// // Test cases
// promiseAll([]).then((results) => {
//   console.log("Expected result []: ", results);
// });

// promiseAll([soon(1), soon(2), soon(3)]).then((results) => {
//   console.log("Expected result [1, 2, 3]: ", results);
// });

// promiseAll([soon(1), Promise.reject("X"), soon(3)])
//   .then((results) => {
//     console.log("We should not get here");
//   })
//   .catch((error) => {
//     console.log("Expected error X: ", error);
//   });
