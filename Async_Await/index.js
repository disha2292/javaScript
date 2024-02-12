// async function getdata() {
//     return "hello";
// }
// ================================================================
// function myFunction() {
//     return Promise.resolve("Hello");
// }
/*
async: The async keyword is used to define an asynchronous function. It returns a Promise.
await: The await keyword can only be used inside an async function. It pauses the execution of the async function until the Promise is resolved, and then returns the resolved value.

Promise: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.



*/


// function resolvedPromise() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("something");
//         }, 2000);

//     });
// }

// async function myAsyncFunction() {

//     console.log("calling");
//     let result = await resolvePromise();
//     console.log(result);

// }
// myAsyncFunction();


function someAsyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("something");
        }, 2000);
    })
}
async function myAsyncFunction() {
    try {
        // asynchronous operation
        let result = await someAsyncOperation();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myAsyncFunction();