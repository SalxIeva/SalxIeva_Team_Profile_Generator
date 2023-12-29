const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// create an array to store team members
//  add team members to the array
const teamMembers = [];

// create a function to start generator by first prompting user for managers details
function startGenerator() {
    createManager();
}

// create a manager function
function createManager() {
    // prompt for managers details
    // add validator
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
            validate: answer => {
                if (answer.match(/^[a-zA-Z ]+$/)) {
                    return true;
                }
                return "Please enter a valid name (only letters and spaces).";
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?",
            validate: answer => {
                if (answer.match(/^[1-9]\d*$/)) {
                    return true;
                }
                return "Please enter a positive number.";
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
            validate: answer => {
                if (answer.match(/\S+@\S+\.\S+/)) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: answer => {
                if (answer.match(/^[1-9]\d*$/)) {
                    return true;
                }
                return "Please enter a positive number.";
            }
        }
        // add the manager to the team array
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
    });

}

startGenerator();

// create a engineer function
function createEngineer() {
    // prompt for engineer details
    // add validator
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer.match(/^[a-zA-Z ]+$/)) {
                    return true;
                }
                return "Please enter a valid name (only letters and spaces).";
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?",
            validate: answer => {
                if (answer.match(/^[1-9]\d*$/)) {
                    return true;
                }
                return "Please enter a positive number.";
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
            validate: answer => {
                if (answer.match(/\S+@\S+\.\S+/)) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's gitHub username?",
            validate: answer => {
                if (answer.length < 1) {
                    return "Please enter a GitHub username.";
                }
                return true;
            }
        }
        // add the engineer to the team array
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
    });

}
// createEngineer();

// create an intern function
function createIntern() {
    // prompt for intern details
    // add validator
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate: answer => {
                if (answer.match(/^[a-zA-Z ]+$/)) {
                    return true;
                }
                return "Please enter a valid name (only letters and spaces).";
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?",
            validate: answer => {
                if (answer.match(/^[1-9]\d*$/)) {
                    return true;
                }
                return "Please enter a positive number.";
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
            validate: answer => {
                if (answer.match(/\S+@\S+\.\S+/)) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            validate: answer => {
                if (answer.length < 1) {
                    return "Please enter a school name.";
                }
                return true;
            }
        }
        // add the intern to the team array
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
    });

}

// create add team members function, so that once manager is created it calls to add other team members, by selecting: engineer, intern or finish
