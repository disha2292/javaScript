// // async function getdata() {
// //     return "hello";
// // }
// // ================================================================
// // function myFunction() {
// //     return Promise.resolve("Hello");
// // }
// /*
// async: The async keyword is used to define an asynchronous function. It returns a Promise.
// await: The await keyword can only be used inside an async function. It pauses the execution of the async function until the Promise is resolved, and then returns the resolved value.

// Promise: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.



// */


// // function resolvedPromise() {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve("something");
// //         }, 2000);

// //     });
// // }

// // async function myAsyncFunction() {

// //     console.log("calling");
// //     let result = await resolvePromise();
// //     console.log(result);

// // }
// // myAsyncFunction();


// function someAsyncOperation() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("something");
//         }, 2000);
//     })
// }
// async function myAsyncFunction() {
//     try {
//         // asynchronous operation
//         let result = await someAsyncOperation();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// myAsyncFunction();


// async function sum(a, b) {
//     return a + b;
// }

// async function mul(a, b) {
//     return a * b;
// }

// async function calculator(a, b, callback) {
//     const sumandmul = await callback(a, b);

//     return sumandmul * 2;
// }

// async function main() {
//     const result = await calculator(4, 2, sum);
//     console.log(result); // Output: 12
// }

// main();


// const p = new Promise((resolve, reject) => {
//     resolve("promise resolved");
// });


// async function getdata() {

//     return "hello";
// }

// const data = getdata();

// data.then((res) => console.log(res));
// p.then((res) => console.log(res));


// async function handlePromise() {
//     const val = await p;
//     console.log(val);
// }

// handlePromise();

// const p = new Promise((resolve, reject) => {
//     resolve("promise resolved");
// })


// async function getdata() {

//     return p;
// }

// const data = getdata();

// data.then((res) => console.log(res));


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("haha i am being resolved");
    }, 5000);
});

// js will wait
// p.then((res) => console.log(res));
// console.log("hello world");

//will js wait?  yesssssssssss

async function waitornot() {

    console.log("hello disha");
    let a = await p;
    console.log("should i come first?");
    console.log(a);

    let b = await p;
    console.log("should i come first?");
    console.log(b);
}

waitornot();