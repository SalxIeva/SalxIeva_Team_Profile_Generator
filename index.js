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


// create a manager function
// prompt for managers details
// add the manager to the team array

// create a engineer function
// prompt for engineer details
// add the engineer to the team array

// create an intern function
// prompt for intern details
// add intern to the team array 

// create a function to start generator by first prompting user for managers details
//  add team members to the array