/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

*/
function iWillPassCallbackFunction(callback) {
    setTimeout(function() {
        console.log("i am a timer");
    }, 5000);
    callback();

}

function iAmCallbackFunction() {
    console.log("i am a callback function");
}

iWillPassCallbackFunction(iAmCallbackFunction);

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


function calculator(a, b, sum) {

    sum(a, b);

}

// setTimeout({function sum(a, b) {
//         console.log(a + b);}
// }, 3000)

calculator(3, 5, sum);

setTimeout(function() {
    sum(3, 5);
}, 3000);

function sum(a, b) {
    console.log(a + b);
}




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