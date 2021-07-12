// JS is a programming language, embed logic in your apps

// console.log('Hello...') // Testing the app

// Displaying outputs
// alert('Alert Occured!')
// console.warn('This is a warning')
// console.error('This is an error')

// JS BASICS
// Variables & constants -> variableName = variableValue(constant)

// DataTypes - Primitive DataType -  Number, String, Boolean, Null, Undefined & Symbols

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
console.log(str.length);

// Chang the case
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// Sub-String
console.log(str.substr(7))
console.log(str.substr(13))         // startIndex (inc) till the end
console.log(str.substring(3, 12));  // startIndex(inc), endIndex(exc)

// Split
// const diffProgLanguages = str.split(', ');       // Return you with an 'Array'

// console.log(diffProgLanguages);
// console.log(diffProgLanguages[4]);

// indexOf - returns the index value of alphabet, return -1 if the alphabet doesn't exist
console.log('Index of i : ' + str.indexOf('z'));

// String Concatination (Merging the strings) & String Literals
const myLuvkyNumber = 5
console.log('My lucky number is ' + myLuvkyNumber + ', this ia an example');

// Strings - '', "", ``
console.log(`My lucky number is ${myLuvkyNumber}, this ia an example`);


// ARRAYS IN JAVASCRIPT