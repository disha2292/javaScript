/* 
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom

doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);


*/

// function doSomething() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("did something");
//             resolve("something");
//         }, 2000);
//     });
// }


// // Create a new Promise
// const myPromise = new Promise((resolve, reject) => {
//     // Perform an asynchronous operation here
//     // If successful, call resolve with the result
//     // If there's an error, call reject with an error object
// });

// // Consuming the promise
// myPromise.then((result) => {
//     // Handle the successful resolution
// }).catch((error) => {
//     // Handle any errors that occurred
// });


const myPromise = new Promise(function disha(resolve, reject) {

    resolve("hahah");
});
console.log(myPromise);