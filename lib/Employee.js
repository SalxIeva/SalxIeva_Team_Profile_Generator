// TODO: Write code to define and export the Employee class

// add employee class
class Employee {
    // add constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}
// add same properties for all employees: name, ID, email 

// export employee
module.exports = Employee;