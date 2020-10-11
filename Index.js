const inquirer = require('inquirer')
const fs = require('fs')

const path = require("path");
const outputDir = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDir, "index.html");
const starterHTML = require('./src/Starter')

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



let teamArray = []

const teamQuestions = [{
        type: 'input',
        message: 'What is your name?',
        name: 'Name',
        validate: function(name) {
            if (isNaN(name)) {
                return true;
            } else {
                console.log("     Please enter valid name")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your id?',
        name: 'Id',
        validate: function(numbers) {
            if (numbers > 0 && numbers < 999) {
                return true;
            } else {
                console.log("    Please enter valid id number")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',
        validate: function(email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'What is your role?',
        name: "Role",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

const managerQuestion = {
    type: 'input',
    message: 'What is your office number?',
    name: 'OfficeNumber',
    validate: function(numbers) {
        if (numbers > 0 && numbers < 999) {
            return true;
        } else {
            console.log("    Please enter valid id number")
            return false;
        }
    }
};
const engineerQuestion = {
    type: 'input',
    message: 'What is your Github Profile?',
    name: 'Github',
    validate: function(github) {
        if (github) {
            return true;
        } else {
            console.log('Please enter a github account!');
            return false;
        }
    }
};
const internQuestion = {
    type: 'input',
    message: "What is your school's name?",
    name: 'School',
    validate: function(school) {
        if (school) {
            return true;
        } else {
            console.log('Please enter a real school!');
            return false;
        }
    }
};

const end = {
    type: 'confirm',
    message: "Do you want to add another employee?",
    name: 'End'
};


async function createEmployee() {
    try {
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

        });
    } catch (error) {
        console.log(error)
    }
};

function createManager(answers) {
    inquirer.prompt(managerQuestion).then(function(manager) {
        // console.log(manager);
        // console.log(answers);
        let { Name, Id, Email } = answers;
        let newManager = new Manager(Name, Id, Email, manager.OfficeNumber);
        teamArray.push(newManager)
        endQuestions();
    })
};

function createEngineer(answers) {
    inquirer.prompt(engineerQuestion).then(function(engineer) {
        let { Name, Id, Email } = answers;
        let newEngineer = new Engineer(Name, Id, Email, engineer.Github);
        teamArray.push(newEngineer)
        endQuestions();
    })
};

function createIntern(answers) {
    inquirer.prompt(internQuestion).then(function(intern) {
        let { Name, Id, Email } = answers;
        let newIntern = new Intern(Name, Id, Email, intern.School);
        teamArray.push(newIntern)
        endQuestions();
    })
};

function endQuestions() {
    inquirer.prompt(end).then(function(answers) {
        if (answers.End === false) {
            console.log("ended")
            renderHTML();
        } else {
            console.log("continue")
            createEmployee();
        }
    })
};

// This function will use an if statement to make sure there is an output directory and then make the directory thereafter
// Once it has been made the function for starterHTML will then move all of that information through the template in src folder 
// and output it into the directory "dist" as an "index.html"
function renderHTML() {
    // console.log(teamArray)
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(outputPath, starterHTML(teamArray), "utf-8");
};

createEmployee();