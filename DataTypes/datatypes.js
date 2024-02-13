//javascript is dynamically typed and weakely typed language.
//Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.

// let a = 5;
// a = "disha";
// a = 'disha';
// a = `disha`;
// console.log(a); //disha

/*primitive types

a. Number: Represents numeric values. It includes integers, floats, and special numeric values like Infinity, -Infinity, and NaN (Not-a-Number). (typeof : Number)

b. String: Represents a sequence of characters. Strings are immutable. (typeof : string)

c. Boolean: Represents a logical value. It can be either true or false. (typeof : boolean)

d. Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. (typeof : undefined)

e. Null: Represents an intentional absence of any value. (typeof : object) 

f. Symbol: Introduced in ECMAScript 6, symbols are unique and immutable data types often used as object property keys. (typeof : symbol)

g. BigInt: Using BigInts in JavaScript allows for precise representation and manipulation of arbitrarily large whole numbers, enabling accurate calculations in scenarios such as cryptography and scientific research (typeof : BigInt)

Immutability is the state where values are immutable (that is, not able to be changed). A value is immutable when altering it is impossible. Primitive data types are immutable, as we discussed above.

stored in stack memory
*/

// let num = 46;
// let newNum = num;

// // num = 11; ---->
// //11//46
// num = 11;
// console.log(num);
// console.log(newNum);
// //46
// //46


// let intern1 = "disha";
// let intern2 = "jay";


// intern1 = "khushi";

// console.log(intern1);
// console.log(intern2);



// let num = 46;
// let newNum = 56;

// console.log(num);
// console.log(newNum);
//46
//56

// let student1 = "Halina";

// let student2 = student1;

// console.log(student1);
// console.log(student2);


// student1 = "Brookes"

// console.log(student1);

// console.log(student2)

//Brookes
//Halina

/*
Composite Data Types ( non primitive types):
Composite data types are used to group multiple values and treat them as a single unit. They are passed by reference.

a. Object: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be of any data type, including other objects.

b. Array: Represents an ordered collection of values. Arrays can hold values of any data type, including other arrays or objects.

c. Function: Functions are a special type of object that can be invoked to perform a task. They can be assigned to variables, passed as arguments, and returned from other functions.

d. Date: Represents a date and time value.

e. RegExp: Represents a regular expression, used for pattern matching within strings.

f. Map, Set, WeakMap, WeakSet: Introduced in ECMAScript 6, these are specialized data structures for storing collections of data.

stored in heap memory
/*
Null in JavaScript means an empty value and is also a primitive type in JavaScript. The variable which has been assigned as null contains no value. Undefined, on the other hand, means the variable has been declared, but its value has not been assigned.

Both undefined and null are falsy by default. So == returns true. But when we use the strict equality operator (===) which checks both type and value, since undefined and null are of different types (from the typeof Operator section), the strict equality operator returns false
*/

/*
The Number type has only one value with multiple representations: 0 is represented as both -0 and +0 (where 0 is an alias for +0). In practice, there is almost no difference between the different representations; for example, +0 === -0 is true. However, you are able to notice this when you divide by zero:

console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity

NaN ("Not a Number") is a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.
*/


// String
// const firstName = 'disha';

// console.log(firstName);

// // Number
// const age = 30;
// const temp = 98.9;

// // Boolean
// const hasKids = true;

// // Null
// const aptNumber = null;

// // Undefined
// // let score;
// const score = undefined;
// console.log(score);

// // Symbol
// const id = Symbol('id');
// console.log(id);

// BigInt
// const n = 9007199254740991 n;

// Reference Types

// const numbers = [1, 2, 3, 4];

// const person = {
//     name: 'Brad',
// };

// function sayHello() {
//     console.log('Hello');
// }

// const output = sayHello;

// console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3