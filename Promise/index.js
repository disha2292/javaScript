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


// const myPromise = new Promise(function disha(resolve, reject) {

//     resolve("hahah");
// });
// console.log(myPromise);

//1.Write a function that returns a promise which resolves after a random delay (between 1 to 5 seconds) with a message "Promise resolved after [delay] seconds".


// function disha() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             let error = true; // Set error to false to simulate successful completion

//             if (error) {
//                 reject("errorrrr");
//                 // resolve("Promise resolved after 3 seconds");
//             } else {
//                 resolve("Promise resolved after 3 seconds");
//                 // reject("errorrrr");
//             }
//         }, 3000);
//     });
// }

// disha()
//     .then((what) => {
//         console.log(what); // Output: "Promise resolved after 3 seconds"
//     })
//     .catch((error) => {
//         console.error(error); // This won't be executed in this case
//     });



//  Create a function that takes an array of numbers and returns a promise that resolves with the sum of all numbers in the array.

// const array = [1, 2, 3, 4, 5]

// function sumOfArray(array) {
//     return new Promise((resolve, reject) => {

//         let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             sum += array[i];
//         }
//         resolve(sum);
//     });
// }

// sumOfArray(array).then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


// Write a function that takes a number as input and returns a promise. If the number is even, the promise should resolve with the message "Even number", otherwise, it should reject with the message "Odd number".

// const input = prompt('Please enter a number :  ');

// let input = 6;

// function evenOrOdd(input) {

//     return new Promise((resolve, reject) => {
//         if (input % 2 == 0) {
//             resolve("Even number");
//         } else {
//             reject("Odd number");
//         }



//     });
// }

// evenOrOdd(input).then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     })





// Write a function that takes two numbers as input and returns a promise. The promise should resolve with the result of dividing the first number by the second number if the second number is not zero. If the second number is zero, the promise should reject with an error message.


let a = 5;
let b = 0;

function zeroOrNot(a, b) {

    return new Promise((resolve, reject) => {
        if (b !== 0) {
            resolve(a / b);
        } else {
            reject("b is zero broo");
        }
    });
};

zeroOrNot(a, b).then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })



const myPromise = new Promise((resolve, reject) => {
    // Perform asynchronous operation here
    // For this exercise, let's divide two numbers
    const a = 10;
    const b = 5;

    // Check if b is not zero
    if (b !== 0) {
        resolve(a / b); // Resolve with the result of division
    } else {
        reject("Error: Division by zero"); // Reject with an error message
    }
});

// Consuming the promise
myPromise
    .then((result) => {
        console.log("Result:", result); // Output: Result: 2
    })
    .catch((error) => {
        console.error(error); // Output: Error: Division by zero
    });