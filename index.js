// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'What\'s the instalation process?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the application used for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What lisenses does your project have?',
        choices: ['MIT', 'ISC', 'GNU', 'MOZILLA'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who are the contributers to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What kind of tests were ran on this application?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your repo?',
    },
    



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(function(data){
        console.log(data)
        fs.writeFileSync('./dist/readme.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
