console.log('*** Date Manipulation ***');

let currentDate = new Date();
console.log(currentDate);

let dateVariable = new Date("2022-02-10");
console.log(dateVariable);

console.log('***************************************');
/***************************************/

console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

console.log('***************************************');
/***************************************/

currentDate.setFullYear(2000);
console.log(currentDate.getFullYear());

currentDate.setMonth(8);
console.log(currentDate.getMonth());

currentDate.setDate(25);
console.log(currentDate.getDate());

currentDate.setHours(14);
console.log(currentDate.getHours());

currentDate.setMinutes(35);
console.log(currentDate.getMinutes());

currentDate.setSeconds(50);
console.log(currentDate.getSeconds());

console.log('***************************************');
/***************************************/

console.log(currentDate.toString());
console.log(currentDate.toUTCString());
console.log(currentDate.toLocaleString('en-US'));
