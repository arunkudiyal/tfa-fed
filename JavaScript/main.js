// JS is a programming language, embed logic in your apps

// console.log('Hello...') // Testing the app

// Displaying outputs
// alert('Alert Occured!')
// console.warn('This is a warning')
// console.error('This is an error')

// JS BASICS
// Variables & constants -> variableName = variableValue(constant)

// DataTypes - Primitive DataType -  Number, String, Boolean, Null, Undefined & Symbols
// Non-Primitive DataTypes - Array, Objects & ArrayOfObjects, JSON 

a = 20
b = 'Technology for All'
c = false
d = undefined
e = null

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);  // null --> object ?????

// DECLARATION OF A VARIABLE - let, var, const (ES6)

// 1. var keyword is GLOBAL in nature
// 2. let(ES6) keyword is used for scoping
// 3. const(ES6) keyword

var anyValue = 'Hi, I am a Data'
// console.log(anyValue)

let anotherValue = 25
// console.log(anotherValue)

const myName = 'Arun'
// myName = 'Some other Name' - DONT 

// You cannot just declare a const value, you have to declare and define the value then & there itself
// const constantValue
// constantValue = 'New Value' // DONT


// STRINGS & STRING METHODS

const str = 'This is a String'

// Find the length of the String
// console.log(str.length);

// Chang the case
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// Sub-String
// console.log(str.substr(7))
// console.log(str.substr(13))         // startIndex (inc) till the end
// console.log(str.substring(3, 12));  // startIndex(inc), endIndex(exc)

// Split
// const diffProgLanguages = str.split(', ');       // Return you with an 'Array'

// console.log(diffProgLanguages);
// console.log(diffProgLanguages[4]);

// indexOf - returns the index value of alphabet, return -1 if the alphabet doesn't exist
// console.log('Index of i : ' + str.indexOf('z'));

// String Concatination (Merging the strings) & String Literals
const myLuvkyNumber = 5
// console.log('My lucky number is ' + myLuvkyNumber + ', this ia an example');

// Strings - '', "", ``
// console.log(`My lucky number is ${myLuvkyNumber}, this ia an example`);


// ARRAYS IN JAVASCRIPT - Collection of Items
// 2 ways Array - 1. Using Array Contrsuctor

// const names = new Array('Dipti', 'Priya', 'Srija', 'Arun', 'Vamsi')
// console.log(names)
// // Access the data from the Array
// console.log(names[3]);

// ES6 - Use of [ ] symbol

// const courses = ['Data Science', 'FSD', 'Machine Learning', 'Data Structures']
// console.log(courses);
// // Access 
// console.log(courses[1]);

// // Contain multiple data types in a single Array
// const items = [10, 10.5, 'Arun', true, null, undefined]
// console.log(items);


// OBJECTS IN JS - { key: value }
const user = {
    firstName: 'Harry',
    lastName: 'Potter',
    age: 22,

    // include Arrays inside of an object
    hobbies: ['Magic', 'Getting in trouble', 'Wandering'],
    role: 'Student',
    isCool: true,

    // include objects within object
    address: {
        street: '5th Avenue',
        city: 'London',
        country: 'United Kingdoms'
    }
}

// console.log(user);

// Access the values from the Object
// console.log(`Hi, my name is ${user.firstName} ${user.lastName}. I am ${user.age} years old. I am a ${user.role}. My hobbies are ${user.hobbies[0]}, ${user.hobbies[2]}. I live in ${user.address.city}`);


// ARRAY OF OBJECTS ->  [ {}, {}, {}, {} ]

// const employees = [
//     {
//         emp_id: 1001,
//         designation: 'SDE',
//         company: 'Wipro',
//         yearsOfExp: 3,
//         skiils: ['C', 'C++', 'Java'],
//         location: {
//             officeLoaction: 'Mumbai',
//             pin: 12345
//         }
//     }, 
//     {
//         emp_id: 1023,
//         designation: 'Tester',
//         company: 'Facebook',
//         yearsOfExp: 3,
//         skiils: ['Mocha', 'JUnit'],
//         location: {
//             officeLoaction: 'Hyderabad',
//             pin: 12342
//         }
//     }, 
//     {
//         emp_id: 1021,
//         designation: 'SME',
//         company: 'Apple',
//         yearsOfExp: 5,
//         skiils: ['JS', 'React', 'Angular'],
//         location: {
//             officeLoaction: 'Bangalore',
//             pin: 12323
//         }
//     }, 
//     {
//         emp_id: 1065,
//         designation: 'Content Designer',
//         company: 'Netflix',
//         yearsOfExp: 2,
//         skiils: ['Wordpress', 'Photoshop'],
//         location: {
//             officeLoaction: 'Delhi',
//             pin: 12001
//         }
//     }
// ]

// console.log(employees);

// Accessing the ArrayOfObjects

// 1. I want the emp_id of each employee
// console.log(`${employees[0].emp_id}, ${employees[1].emp_id}, ${employees[2].emp_id}, ${employees[3].emp_id}`);

// // 2. One skill from each employee
// console.log(`${employees[0].skiils[0]}, ${employees[1].skiils[0]}, ${employees[2].skiils[0]}, ${employees[3].skiils[0]}`);

// // 3. Office Loaction of all employees
// console.log(`${employees[0].location.officeLoaction}, ${employees[1].location.officeLoaction}, ${employees[2].location.officeLoaction}, ${employees[3].location.officeLoaction}`);


// CONDITIONALS - if, else
// if(employees[0].yearsOfExp < 3) {
//     console.log('Not fit for JOB');
// } else {
//     console.log('Fit for the JOB');
// }

// Short hand -> condition ? true : false
// employees[1].yearsOfExp > 3 ? console.log('FIT FOR JOB') : console.log('NOT FIT FOR JOB'); 

// if, else-if, else

// AGE TRACKER - < 18 [KID], >=18 TEEN <30, >=30 ADULT
// const age = 30
// if(age < 18) {
//     console.log('Hey, you are a KID')
// } else if(age >= 18 && age < 30) {
//     console.log('Hey, you are TEEN')
// } else {
//     console.log('Hey you are an ADULT')
// }


// *** FUN STUFF ***

// const answer = 10 / 0
// console.log(answer)             // Infinity

// const answer1 = 20 / 'Arun'
// console.log(answer1);           // NaN

// const answer2 = 'Hi' / 'Arun'
// console.log(answer2);           // NaN

// const values = ['🥚', '🐓']
// // Sort the values
// const output = values.sort()
// console.log(output);

// if(11 === 11) {
//     console.log('They are same');
// } else {
//     console.log('They are NOT same');
// }


// JSON - JS Object Notation
// console.log(employees);

// // stringify() - Convert ArrayOfObjects into JSON
// const jsonData = JSON.stringify(employees)
// console.log(jsonData);

// // parse() - Convert JSON into ArrayOfObject
// const arrayOfObjects = JSON.parse(jsonData)
// console.log(arrayOfObjects);


// var, let & const
// age > 30 - half the age : double the age

// const age = 30
// if(age > 30) {
//     const newAge = age / 2
//     console.log(newAge)
// } else {
//     const newAge = age * 2
//     console.log(newAge)
// }

// console.log(newAge);


// LOOPS

// 1. Basic Loops - for() & while()
// 2. Higher Order Array Methods - for-of, for-in, map, filter, reduce

// Print numbers from 1 to 15

// for(initialization; condition; inc/dec)
// for(let i=1; i <= 15; i++) {
//     console.log(`Value is ${i}`);
// } 

// Table of 5 
// for(let i=5; i <= 50; i=i+5) {
//     console.log(`5 x ${i/5} = ${i}`)
// }

// initilaization
// while(condition) {
//     inc/dec
// }

// let i = 1
// while(i <= 10) {
//     console.log(`The value is ${i}`)
//     i+=1
// }

// // Priniting the Table of 2
// let j = 2
// while(j <= 20) {
//     console.log(`2 x ${j/2} = ${j}`);
//     j+=2
// }


// Array of Object
const todos = [
    {
        id: 1,
        task: 'Meeting with the Team',
        isCompleted: true
    },
    {
        id: 2,
        task: 'Take out the Trash',
        isCompleted: false
    },
    {
        id: 3,
        task: 'Take my dog for a walk',
        isCompleted: true
    }
]

// const fruits = ['Apple', 'Mango', 'Banana', 'Pear', 'Watermelon']
// console.log(fruits.length);

// Length of the array
// console.log(todos.length);

// Agenda - 
// for(let i=0; i < todos.length; i++) {
//     console.log(todos[i].task);
// }

// 1. You are iterating on the whole array
// 2. If you don't wanna use array[index]

// for-of - for(let local of array) { ... }

// for(let todo of todos) {
//     // print only those tasks whose isCompleted is true
//     todo.isCompleted === true ? console.log(todo.task) : ''
// }


// *** FUNCTIONS ***
// Re-usable block of code that you can use anywhere in the code

// 1. Traditional Way
// 2. ES6 Way - New & Most Popular

// 1. function functionName(parameters) { ...bodyOfFunction }

function greet(name) {
    console.log(`Good evening ${name}`);
}

function add(a, b) {
    return (a + b)
}

// Calling the function
greet('Vaishnavi')

const result = add(10, 20)
console.log(`The result of 10 + 20 is ${result}`);