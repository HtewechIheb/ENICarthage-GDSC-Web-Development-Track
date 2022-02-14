console.log('*** String Manipulation ***');

console.log('Hello World!');
console.log("Hello World!");

console.log('***************************************');
/***************************************/

const clubName = 'GDSC';
const schoolName = 'ENICarthage';
console.log("We are students of " + schoolName + " and our club's name is " + clubName);
console.log(`We are students of ${schoolName} and our club's name is ${clubName}`);

console.log('***************************************');
/***************************************/

const country = 'Tunisia';
console.log(country.length);

console.log('***************************************');
/***************************************/

let fact = 'The earth is round.';
console.log(fact.toUpperCase());
fact = 'THE SUN RISES FROM THE EAST.';
console.log(fact.toLowerCase());

const error = 'Login Failed! Please Verify Your Credentials.';
console.log(error.indexOf('Failed'));
console.log(error.indexOf('What'));

const warning = 'Warning! You Only Have One Remaining Login Attempt.';
console.log(warning.substring(0, 7));

const query = 'name=john;email=john@gmail.com;age=40';
console.log(query.split(';'));

const info = 'My name is John, my friend is also called John.';
console.log(info.replaceAll('John', 'Bob'));

