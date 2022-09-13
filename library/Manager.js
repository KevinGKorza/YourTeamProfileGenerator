//Creation of Manager class extended from the employee class
//Creation of constructor that includes name, id, email, and office number
//getName, getId, getEmail, getRole function

const Employee = require('./Employee');
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        Employee (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.getOfficeNumber
    }
};

module.exports = Manager;
