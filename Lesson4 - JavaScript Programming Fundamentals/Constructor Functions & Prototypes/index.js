console.log('*** Constructor Functions & Prototypes ***');

function Employee(firstName, lastName, role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
}

Employee.prototype.checkIn = function () {
    console.log(`${this.firstName} ${this.lastName} has checked in.`);
}

Employee.prototype.checkOut = function () {
    console.log(`${this.firstName} ${this.lastName} has checked out.`);
}

const john = new Employee('John', 'Doe', 'Manager');

john.checkIn();
john.checkOut();