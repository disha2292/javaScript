// const people = [
//     { firstName: "John", lastName: "Doe", age: 30 },
//     { firstName: "Jane", lastName: "Smith", age: 25 },
//     { firstName: "Michael", lastName: "Johnson", age: 40 },
//     { firstName: "Emily", lastName: "Davis", age: 35 },
// ];

// function getPeopleWithAgeOver25(people) {
//     return people
//         // .filter(person => person.age > 25)
//         .filter(people => people.age > 25);
//     // .map(person => `${person.firstName} ${person.lastName} (${person.age})`);
// }

// const result = getPeopleWithAgeOver25(people);
// console.log(result);


// function getPeopleWithAgeOver25(people) {

//     console.log(people.filter(people => people.age > 25));

// }


// getPeopleWithAgeOver25(people);
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum); // Output: 15





const users = [
    { fname: 'abc', lname: 'xyz', age: 35 },
    { fname: 'abc1', lname: 'xyz1', age: 29 },
    { fname: 'abc2', lname: 'xyz2', age: 39 }
];

function getFullNameAndAge(users) {
    const filteredUsers = users.filter(user => user.age > 30);
    const fullNames = filteredUsers.map(user => `${user.fname} ${user.lname}`);
    console.log(fullNames);
}

getFullNameAndAge(users);
// funtion isAgeOver30(user) {
//     return user.age > 30;
// }

// function getFullNameAndAge(user) {
//     return { fullName: user.fname + ' ' + user.lname, age: user.age };
// 

// const fullNameAndAgeOver30 = users
//     .filter(isAgeOver30)
//     .map(getFullNameAndAge);

// console.log(fullNameAndAgeOver30);


// const array1 = [5, 12, 8, 130, 44];

// let index = 2;

// console.log(`An index of ${index} returns ${array1.at(index)}`);
// // Expected output: "An index of 2 returns 8"

// index = -3;

// console.log(`An index of ${index} returns ${array1.at(index)}`);
// // Expected output: "An index of -2 returns 130"


// console.log(array1.at(6));

// console.log(array1.length);


// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]


const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1);

// console.log(iterator1.next().value);
// // Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // Expected output: Array [1, "b"]