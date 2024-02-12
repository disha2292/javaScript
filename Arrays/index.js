// // Using array literal notation
// let fruits = ['apple', 'banana', 'orange'];

// // Using Array constructor
// let numbers = new Array(1, 2, 3, 4, 5);


// //accesssing elements
// console.log(fruits[0]); // Output: 'apple'

// //forEach method

// fruits.forEach(function(element) {
//     console.log(element);
// });

// //destructing assignment
// let [first, second] = fruits;
// console.log(first); // Output: 'apple'
// console.log(second); // Output: 'banana'

// //spread assignment
// console.log(...fruits); // Output: 'apple banana orange'


// let digits = new Array(1, 2, 3, 4, 5);

// digits[8] = 34;

// console.log(digits);

// console.log(digits.length);

//[ 1, 2, 3, 4, 5, <3 empty items>, 34 ]
//9


function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3, 4, 5];

console.log(sum(...numbers)); // Output: 6