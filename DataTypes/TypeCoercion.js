/*
JavaScript is a weakly typed language. This means that you can often use a value of one type where another type is expected, and the language will convert it to the right type for you. 


*/

let x;

// Coerced to a string
// x = 5 + '5';
// x = 5 * '5';
// x = 5 + null;
// x = Number(null);

// x = Number(true);
// x = Number(false);

// // true is coerced to a 1
// x = 5 + true;

// // false is coerced to 0 (falsy)
// x = 5 + false;

// // Undefined is coerced to 0 (falsy)
x = 5 + undefined;


console.log(x);

// x = 5 + Number('5');

// // Coerced to a number


// // null is coerced to 0 as it is a `falsy` value




// console.log(x, typeof x);

// let str = "5";
// let num = str * 2; // Implicit conversion of str to a number
// console.log(num); // Output: 10
