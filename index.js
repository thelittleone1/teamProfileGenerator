// Required Files and constants

// Const for classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

// Cost for Temperate Literals of classes
const boilderPlateTemplate = require("./src/restOfTheHTML");
const engineerTemplate = require("./src/engineer-template");
const internTemplate = require("./src/intern-template");
const managerTemplate = require("./src/manager-template");

// Node stuff I need 
const inquirer = require("inquirer");
const fs = require("fs");

// Empty Array to hold team
const team = [];

// Empy Individual Arrays 
const managerArray = [];
const engineerArray = [];
const interArray = [];

// Function that launches the program, and promts you to add a manager
function buildATeam() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your managers name?",
            name: "nameOfManager",
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
            message: "What is your office number?",
            name: "employeeData",
        },
        {
            type: "checkbox",
            message: "Do you want to keep building your team?",
            name: "keepBuildingTeam",
            choices: ["Add Engineer", "Add Intern", "Team Complete"],
        },
    ])
    .then(function(answers) {
        const manager = new Manager(answers.nameOfManager, answers.employeeID, answers.employeeEmail, answers.employeeData);
        team.push(manager);
        
        if (answers.keepBuildingTeam == "Add Engineer") {
            buildAEngineer();
        } 
        
        if (answers.keepBuildingTeam == "Add Intern") {
            buildAIntern();
        } // Else for team complete end program 
    })
    }

// Function to add an engineer
function buildAEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your engineers name?",
            name: "nameOfEngineer",
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
            message: "What is your github username?",
            name: "employeeData",
        },
        {
            type: "checkbox",
            message: "Do you want to keep building your team?",
            name: "keepBuildingTeam",
            choices: ["Add Engineer", "Add Intern", "Team Complete"],
        },
    ])
    .then(function(answers) {
        const engineer = new Engineer(answers.nameOfEngineer, answers.employeeID, answers.employeeEmail, answers.employeeData);
        team.push(engineer);

        if (answers.keepBuildingTeam == "Add Engineer") {
            buildAEngineer();
        } 
        
        if (answers.keepBuildingTeam == "Add Intern") {
            buildAIntern();
        } // Else for team complete end program 
    })
    }

    // Function to add an intern 
    function buildAIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your interns name?",
                name: "nameOfIntern",
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
                message: "What is your school name?",
                name: "employeeData",
            },
            {
                type: "checkbox",
                message: "Do you want to keep building your team?",
                name: "keepBuildingTeam",
                choices: ["Add Engineer", "Add Intern", "Team Complete"],
            },
        ])
        .then(function(answers) {
            const intern = new Intern(answers.nameOfIntern, answers.employeeID, answers.employeeEmail, answers.employeeData);
            team.push(intern);

            if (answers.keepBuildingTeam == "Add Engineer") {
                buildAEngineer();
            } 
            
            if (answers.keepBuildingTeam == "Add Intern") {
                buildAIntern();
            } // Else for team complete end program 
        })
        }

        function buildYourTeam() {

        }

        function renderHTML() {
            fs.writeFile("./dist/newHTML", finalHTML)
        }

        buildATeam();