// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee")

// create manager class
// extend employee class
class Manager extends Employee {
    // create a constructor for the manager class
    constructor(name, id, email, officeNumber) {
        // call the constructor of the employee class
        super(name, id, email);
        // add office number property
        this.officeNumber = officeNumber;
    }

    // add methods
    getOfficeNumber() {
        return this.officeNumber;
    }
    // return manager
    getRole() {
        return 'Manager';
    }
}

// export manager class
module.exports = Manager;