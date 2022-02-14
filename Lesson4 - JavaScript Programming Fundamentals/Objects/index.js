console.log('*** Objects ***');

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40,
    hobbies: ['Gaming', 'Reading', 'Powerlifting'],

    eat: function () {
        console.log('I am eating.');
    },
    drink: function () {
        console.log('I am drinking.');
    },
    sleep: function () {
        console.log('I am sleeping.');
    }
}

console.log(person.firstName);

person.firstName = 'Jane';
console.log(person.firstName);

// person['firstName'] = 'Jane';
// console.log(person['firstName']);

person.eat();

person.eat = function () {
    console.log('I am eating a large pizza.');
}
person.eat();

// person['eat'] = function () {
//     console.log('I am eating a large pizza.');
// }
// person['eat']();

console.log('***************************************');
/***************************************/

const anotherPerson = {
    firstName: 'Mark',
    lastName: 'Smith',
    age: 22,
    hobbies: ['Reading', 'Hiking'],

    get fullName() {
        return `${this.firstName} ${this.lastName} `;
    },

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },

    eat: function () {
        console.log('I am eating.');
    },
    drink: function () {
        console.log('I am drinking.');
    },
    sleep: function () {
        console.log('I am sleeping.');
    }
}

console.log(anotherPerson.fullName); // --> Mark Smith

anotherPerson.fullName = 'Bob Thompson';

console.log(anotherPerson.fullName); // --> Bob Thompson

console.log(anotherPerson.firstName); // --> Bob

console.log(anotherPerson.lastName); // --> Thompson