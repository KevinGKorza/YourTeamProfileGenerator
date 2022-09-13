//Creation of Intern class 
//Creation of constructor that includes name, id, email, and school
//getSchool (the school of the intern) and getRole (the job of the intern) function

const Employee = require('./Employee');
class Intern extends Employee {
    constructor (name, id, email, school) {
        Employee (name, id, email);
        this.school = school;
    }
    getSchool () {
        return this.school;
    }
    getRole(){
        return "Intern";
    }
};

module.exports = Intern;
