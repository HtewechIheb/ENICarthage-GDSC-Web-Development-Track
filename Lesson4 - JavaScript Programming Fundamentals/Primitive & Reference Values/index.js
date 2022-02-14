console.log('*** Primitive & Reference Values ***');

let x = 10;
let y = x;

console.log(x);
console.log(y);

x = 50;

console.log(x);
console.log(y);

console.log('***************************************');
/***************************************/

let firstArray = [5, 16, 'Hello', false];
let secondArray = firstArray;

console.log(firstArray);
console.log(secondArray);

firstArray[0] = 1000;

console.log(firstArray);
console.log(secondArray);

let firstObject = {
    fullName: 'John Doe',
    age: 30
};
let secondObject = firstObject;


console.log(firstObject);
console.log(secondObject);

firstObject.fullName = 'Mark Smith';

console.log(firstObject);
console.log(secondObject);

console.log('***************************************');
/***************************************/

let numbers = [123, -150, 88, 30];
console.log(numbers);

function changeNumber(param) {
    param[1] = 300;
}

changeNumber(numbers);
console.log(numbers);

let person = {
    fullName: 'Dean',
    age: 45
}
console.log(person);

function changeName(param) {
    param.fullName = 'Brian';
}

changeName(person);
console.log(person);