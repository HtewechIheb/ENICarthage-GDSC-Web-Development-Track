console.log('*** Functions ***');

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 3));

// const add = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(5, 3));

console.log('***************************************');
/***************************************/

const substract = (num1, num2) => {
    const result = num1 - num2;
    return result;
}
console.log(substract(10, 3));

const toUpper = text => {
    const result = text.toUpperCase();
    return result;
}
console.log(toUpper('hello there!'));

const log = text => console.log(text);
log('Javascript Functions.');

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(7, 6));