//Creation of Engineer class 
//Creation of constructor that includes name, id, email, and github
//getGithub (the github of person) and getRole (the job of the person) function

const Employee = require("./Employee");
class Engineer extends Employee {
    constructor (name, id, email, github) {
        Employee (name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole() {
        return "Engineer";
    }

};

module.exports = Engineer;
