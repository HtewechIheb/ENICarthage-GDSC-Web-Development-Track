console.log('*** Higher Order Array Methods ***');

let numbers = [100, 50, -25, 17];
numbers.forEach(number => console.log(number));

numbers = [12, 75, 31, 16];

const newNumbers = numbers.map(number => number * 100);
newNumbers.forEach(newNumber => console.log(newNumber));

numbers = [20, 17, 73, 84];

const evenNumbers = numbers.filter(number => number % 2 === 0);
evenNumbers.forEach(newNumber => console.log(newNumber))

console.log('***************************************');
/***************************************/

let countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
console.log(countries.find(country => country === 'USA'));
console.log(countries.find(country => country.length === 5));

countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
console.log(countries.findIndex(country => country === 'USA'));
console.log(countries.findIndex(country => country.length === 5));