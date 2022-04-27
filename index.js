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
    }

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
    }

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
        }

        function buildYourTeam() {

        }