//javascript is dynamically typed language.
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

stored in stack 
*/

// let num = 46;
// let newNum = num;

// num = 11; ----> //11//46

// console.log(num);
// console.log(newNum);
//46
//46


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