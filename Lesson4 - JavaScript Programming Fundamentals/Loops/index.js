console.log('*** Loops ***');

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

console.log('***************************************');
/***************************************/

let j = 0;
do {
    console.log(j);
    j++;
}
while (j < 10);

console.log('***************************************');
/***************************************/

for (let k = 0; k < 10; k++) {
    console.log(k);
}

console.log('***************************************');
/***************************************/

const car = {
    make: 'Cheverolet',
    model: 'Camaro',
    color: 'Blue',
    isUsed: false
}

for (let key in car) {
    console.log(key);
}

for (let key in car) {
    console.log(`${key} : ${car[key]}`);
}

console.log('***************************************');
/***************************************/

const countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];

for (let country of countries) {
    console.log(country);
}