const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamArray = []

const teamQuestions = [{
        type: 'input',
        message: 'What is your name?',
        name: 'Name'
    },
    {
        type: 'input',
        message: 'What is your id?',
        name: 'Id'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email'
    },
    {
        type: 'list',
        message: 'What is your role?',
        name: "Role",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

const managerQuestion = {
    type: 'input',
    message: 'What is your office number?',
    name: 'OfficeNumber'
}
const engineerQuestion = {
    type: 'input',
    message: 'What is your Github Profile?',
    name: 'Github'
}
const internQuestion = {
    type: 'input',
    message: "What is your school's name?",
    name: 'School'
}

const end = {
    type: 'confirm',
    message: "Do you want to add another employee?",
    name: 'End'
}

function createEmployee() {
    inquirer.prompt(teamQuestions).then(function(answers) {
        switch (answers.Role) {
            case "Manager":
                // code block
                createManager(answers)
                break;
            case "Engineer":
                // code block
                createEngineer(answers)
                break;
            case "Intern":
                // code block
                createIntern(answers)
                break;
        }

    })
}

function createManager(answers) {
    inquirer.prompt(managerQuestion).then(function(manager) {
        console.log(manager);
        console.log(answers);
        let { Name, Id, Email } = answers;
        let newManager = new Manager(Name, Id, Email, manager.officeNumber);
        teamArray.push(newManager)
        endQuestions();
    })
}

function createEngineer(answers) {
    inquirer.prompt(engineerQuestion).then(function(engineer) {
        let { Name, Id, Email } = answers;
        let newEngineer = new Engineer(Name, Id, Email, engineer.github);
        teamArray.push(newEngineer)
        endQuestions();
    })
}

function createIntern(answers) {
    inquirer.prompt(internQuestion).then(function(intern) {
        let { Name, Id, Email } = answers;
        let newIntern = new Intern(Name, Id, Email, intern.school);
        teamArray.push(newIntern)
        endQuestions();
    })
}

function endQuestions() {
    inquirer.prompt(end).then(function(answers) {
        if (answers.end == true) {
            renderHTML();
        } else {
            createEmployee();
        }
    })
}

function renderHTML() {
    console.log(teamArray)
}