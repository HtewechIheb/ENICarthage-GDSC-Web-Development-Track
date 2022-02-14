console.log('*** Inheritance ***');

class Person {
    constructor(identityCardNumber, firstName, lastName) {
        this.identityCardNumber = identityCardNumber;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    salute() {
        console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
    }
}

class Student extends Person {
    constructor(identityCardNumber, firstName, lastName, average) {
        super(identityCardNumber, firstName, lastName);
        this.average = average;
    }

    study() {
        console.log('I am studying.');
    }

    salute() {
        console.log(`Hello, I am ${this.firstName} ${this.lastName} and I am a student.`);
    }
}

class Teacher extends Person {
    constructor(identityCardNumber, firstName, lastName, subject) {
        super(identityCardNumber, firstName, lastName);
        this.subject = subject;
    }

    teach() {
        console.log('I am teaching.');
    }
}

class Supervisor extends Person {
    constructor(identityCardNumber, firstName, lastName, role) {
        super(identityCardNumber, firstName, lastName);
        this.role = role;
    }

    supervise() {
        console.log('I am supervising.');
    }
}

const jerry = new Teacher(64932487, 'Jerry', 'Doe', 'Physics');

console.log(jerry.identityCardNumber);
console.log(jerry.firstName);
console.log(jerry.lastName);
console.log(jerry.subject);

jerry.salute();
jerry.teach();

console.log('***************************************');
/***************************************/

const luke = new Student(68932157, 'Luke', 'Stoltman', 15);
luke.salute();