// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// create intern class
// extend emplyee class
class Intern extends Employee {
    // create a constructor for the intern class
    constructor(name, id, email, school) {
        // call the constructor of the employee class
        super(name, id, email);
        // add school property
        this.school = school;
    }
    // add methods
    getSchool() {
        return this.school;
    }
    // return intern
    getRole() {
        return 'Intern';
    }
}

// export intern class
module.exports = Intern;