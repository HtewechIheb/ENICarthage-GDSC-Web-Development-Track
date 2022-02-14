console.log('*** Variables & Types ***');

const firstName = 'John';
var age = 23;
let isStudent = true;

console.log(firstName);
console.log(age);
console.log(isStudent);

console.error('This is an error message!');
console.warn('This is a warning!');

console.log('***************************************');
/***************************************/

let myVariable;

console.log(typeof myVariable);

myVariable = 'John';
console.log(typeof myVariable);

myVariable = 23;
console.log(typeof myVariable);

myVariable = true;
console.log(typeof myVariable);

/* undefined can be assigned to a variable explicitly */
myVariable = undefined;
console.log(typeof myVariable);

myVariable = null;
console.log(typeof myVariable);

console.log('***************************************');
/***************************************/

const day = '23';

console.log(typeof day);
console.log(day);

const dayNumber = Number(day);

console.log(typeof dayNumber);
console.log(dayNumber);

console.log('***************************************');
/***************************************/

const year = 2022;

console.log(typeof year);
console.log(year);

const yearString = String(year);

console.log(typeof yearString);
console.log(yearString);

console.log('***************************************');
/***************************************/

const on = true;
const off = false;

console.log(typeof on);
console.log(on);
console.log(typeof off);
console.log(off);

const onNumber = Number(on);
const offNumber = Number(off);

console.log(typeof onNumber);
console.log(onNumber);
console.log(typeof offNumber);
console.log(offNumber);

console.log('***************************************');
/***************************************/

const isMarried = false;

console.log(typeof isMarried);
console.log(isMarried);

const isMarriedString = String(isMarried);

console.log(typeof isMarriedString);
console.log(isMarriedString);

console.log('***************************************');
/***************************************/

let x = 0;

console.log(typeof x);
console.log(x);

let xBoolean = Boolean(x);

console.log(typeof xBoolean);
console.log(xBoolean);

x = -1000;

console.log(typeof x);
console.log(x);

xBoolean = Boolean(x);

console.log(typeof xBoolean);
console.log(xBoolean);

x = 500;

console.log(typeof x);
console.log(x);

xBoolean = Boolean(x);

console.log(typeof xBoolean);
console.log(xBoolean);

console.log('***************************************');
/***************************************/

let text = "";

console.log(typeof text);
console.log(text);

let textBoolean = Boolean(text);

console.log(typeof textBoolean);
console.log(textBoolean);

text = "true";

console.log(typeof text);
console.log(text);

textBoolean = Boolean(text);

console.log(typeof textBoolean);
console.log(textBoolean);

text = "false";

console.log(typeof text);
console.log(text);

textBoolean = Boolean(text);

console.log(typeof textBoolean);
console.log(textBoolean);

text = "Hello World!";

console.log(typeof text);
console.log(text);

textBoolean = Boolean(text);

console.log(typeof textBoolean);
console.log(textBoolean);

console.log('***************************************');
/***************************************/

let regularComparison = (false == 0);
console.log(regularComparison);

regularComparison = ("0" == 0);
console.log(regularComparison);

regularComparison = ("200" == 200);
console.log(regularComparison);


let strictComparison = (false === 0);
console.log(strictComparison);

strictComparison = ("0" === 0);
console.log(strictComparison);

strictComparison = ("200" === 200);
console.log(strictComparison);