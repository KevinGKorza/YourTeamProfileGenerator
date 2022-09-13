//Creation of employee class 
//Creation of constructor that includes name, id, and email
//getName (the name of person), getId (the id of person), getEmail (the email of person), getRole (the job of the person) function

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
};

module.exports = Employee;
