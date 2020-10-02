const Employee = require('./Employee');

//Manager class declaration
//Inherit from Employee
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);

        this.office = office;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;