console.log('*** Arrays ***');

const arr = ['Karim', 'Mohamed', 'Chaima', 'Jamel', 'Samira'];
console.log(arr[0]);

arr[0] = 'Iheb';
console.log(arr[0]);

console.log('***************************************');
/***************************************/

let countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
console.log(countries.length);

countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
countries.push('Italy');
console.log(countries);

countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
countries.pop();
console.log(countries);

countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
countries.unshift('Italy');
console.log(countries);

countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
countries.shift();
console.log(countries);

countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
console.log(countries.indexOf('USA'));
console.log(countries.indexOf('Turkey'));

countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
countries.splice(1, 2, 'Lebanon', 'Kuwait');
console.log(countries);

countries.splice(2, 2);
console.log(countries);

countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
countries.sort();
console.log(countries);

countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
countries.reverse();
console.log(countries);

const todo = ['Take out the trash ', ' Clean the room ', ' Do the laundry'];
const todoString = todo.join('-');
console.log(todoString);