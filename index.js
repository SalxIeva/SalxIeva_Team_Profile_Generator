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
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
        // add the manager to the team array
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
    });

}

startGenerator();

// create a engineer function
// function createEngineer() {
//     // prompt for engineer details
//     // add the engineer to the team array

// }

// create an intern function
// function createIntern() {
//     // prompt for intern details
//     // add intern to the team array 

// }
