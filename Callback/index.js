/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

*/
// function iWillPassCallbackFunction(callback) {
//     setTimeout(function() {
//         console.log("i am a timer");
//     }, 5000);
//     callback();

// }

// function iAmCallbackFunction() {
//     console.log("i am a callback function");
// }

// iWillPassCallbackFunction(iAmCallbackFunction);

function iWillPassCallbackFunction(callback) {
    return function() {
        setTimeout(function() {
            console.log("i am a timer");
            callback(); // Call the callback function inside the setTimeout
        }, 5000);
    };
}

function iAmCallbackFunction() {
    console.log("i am a callback function");
}

const wrappedCallback = iWillPassCallbackFunction(iAmCallbackFunction);
wrappedCallback(); // Call the returned function


// console.log("i have nothing to do with what's happening");

// console.log("start");

// setTimeout(function disha() {
//     console.log("disha");
// }, 3000);

// console.log("end");


// const disha = function() {
//     console.log("i will come after 3 seconds");
// }

// setTimeout(disha, 3000);

// const disha = () => {
//     console.log("disha");
// };

// setTimeout(disha, 3000);



// setTimeout(function disha() {
//     console.log("disha");
// }, 3000);


//Arrow function
// setTimeout(() => {
//     console.log("disha");
// }, 3000);


// function calculator(a, b, sum) {

//     sum(a, b);

// }

// // setTimeout({function sum(a, b) {
// //         console.log(a + b);}
// // }, 3000)

// calculator(3, 5, sum);

// setTimeout(function() {
//     sum(3, 5);
// }, 3000);

// function sum(a, b) {
//     console.log(a + b);
// }





//  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

// setTimeout(function greet() {
//     console.log('Hello world');
// }, 2000)

// function sayName(name) {

//     console.log('Hello' + ' ' + name);
// }

// sayName("disha")


// // Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);

// setTimeout(function greet() {
//     console.log('Hello world');
// }, 2000)

// function sayName(name) {

//     console.log('Hello' + ' ' + name);
// }
// greet('john');


// console.log("start");

// setTimeout(function disha() {
//     console.log("disha");
// }, 3000);

// console.log("end");
// Define the main function that takes two numbers (a and b) and a callback function
// function calculate(a, b, callback) {
//     // Perform the sum of a and b
//     const sum = a + b;

//     // Perform the multiplication of a and b
//     const multiplication = a * b;

//     // Call the callback function with the results multiplied by 2
//     callback(sum * 2, multiplication * 2);
// }

// // Define the callback function
// function callbackFunction(sum, multiplication) {
//     console.log( sum);
//     console.log( multiplication);
// }


function sum(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

function calculator(a,b,callback){
    let sumandmul= callback(a,b);

    return sumandmul*2;
}


console.log(calculator(4,2,sum));




// Call the main function with two numbers and the callback function


// function sum(a, b) {

//     console.log(a + b);
// }

// function calculate(a, b, callback) {
//     callback(a, b);
// }
// calculate(3, 4, sum);





// "Consider an e-commerce website with a large dataset. If the website were synchronous, it would have to wait for this data to load completely before proceeding with other tasks, potentially causing delays and hindering user interaction. In synchronous programming, tasks are executed sequentially on the main thread, meaning that while one task is being processed, other tasks have to wait their turn. By implementing asynchronous functionality, we leverage the power of JavaScript's event-driven model, allowing tasks such as data fetching and processing to occur asynchronously in the background, freeing up the main thread to handle other tasks like rendering the user interface. This approach prevents the blocking of other events and ensures that the website remains responsive and interactive, providing a seamless user experience."
