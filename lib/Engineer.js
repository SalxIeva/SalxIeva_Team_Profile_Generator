// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");


// create engineer class
// extend emplyee class
class Engineer extends Employee {
    // add a constructor for the engineer class
    constructor(name, id, email, github) {
        // call the constructor of the employee class
        super(name, id, email);
        // add GitHub username property
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    // return engineer
    getRole() {
        return 'Engineer';
    }
}

// export engineer class
module.exports = Engineer;