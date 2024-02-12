const people = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "Jane", lastName: "Smith", age: 25 },
    { firstName: "Michael", lastName: "Johnson", age: 40 },
    { firstName: "Emily", lastName: "Davis", age: 35 },
];

function getPeopleWithAgeOver25(people) {
    return people
        .filter(person => person.age > 25)
        .map(person => `${person.firstName} ${person.lastName} (${person.age})`);
}

const result = getPeopleWithAgeOver25(people);
console.log(result);



const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 15



const users = [
    { fname: 'abc', lname: 'xyz', age: 35 },
    { fname: 'abc1', lname: 'xyz1', age: 29 },
    { fname: 'abc2', lname: 'xyz2', age: 39 }
];

function isAgeOver30(user) {
    return user.age > 30;
}

function getFullNameAndAge(user) {
    return { fullName: user.fname + ' ' + user.lname, age: user.age };
}

const fullNameAndAgeOver30 = users
    .filter(isAgeOver30)
    .map(getFullNameAndAge);

console.log(fullNameAndAgeOver30);