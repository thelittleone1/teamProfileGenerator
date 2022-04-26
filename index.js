const inquirer = require("inquirer");
const fs = require("fs");


for ( var i = 0; i < 6 ; i++ ) {
function buildATeam() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your team name?",
            name: "teamName",
        },
        {
            type: "input",
            message: "What is your team members name?",
            name: "nameOfMember",
        },
        {
            type: "list",
            message: "What is their role?",
            name: "employeeRole",
            choices: ["Manager", "Engineer", "Intern" ],
        },
        {
            type: "input",
            message: "What is the employee ID number?",
            name: "employeeID",
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "employeeEmail",
        },
        {
            type: "input",
            message: "What is your office number or what is your github?",
            name: "employeeData",
        },
        {
            type: "checkbox",
            message: "Do you want to keep building your team?",
            name: "keepBuildingTeam",
            choices: ["Yes", "No"],
        },
    ])
    }
} 
buildATeam();