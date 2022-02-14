console.log('*** Classes ***');

class Employee {
    static nbEmployees = 0;

    static codeOfConduct() {
        console.log('All employees must be respectful to each other.');
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

    constructor(firstName, lastName, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        Employee.nbEmployees++;
    }

    checkIn() {
        console.log(`${this.firstName} ${this.lastName} has checked in.`);
    }

    checkOut() {
        console.log(`${this.firstName} ${this.lastName} has checked out.`);
    }
}

console.log('***************************************');
/***************************************/

const employees = [];

employees.push(new Employee('John', 'Doe', 'Manager'));
employees.push(new Employee('Jane', 'Doe', 'Developer'));
employees.push(new Employee('Mark', 'Jackson', 'Recruiter'));

console.log(employees);

console.log('***************************************');
/***************************************/

const john = new Employee('John', 'Doe', 'Manager');
const jane = new Employee('Jane', 'Doe', 'Developer');

console.log(jane.lastName);
jane.lastName = 'Smith';
console.log(jane.lastName);

console.log(Employee.nbEmployees);
console.log(Employee.codeOfConduct());

const manager = new Employee('John', 'Doe', 'Manager');
console.log(manager.fullName);

manager.fullName = 'Jake Smith';
console.log(manager.fullName);
console.log(manager.firstName);
console.log(manager.lastName);