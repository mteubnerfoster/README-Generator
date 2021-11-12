// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// File system interaction
const fs = require('fs');
// Path
const path = require('path');
// Reference to generate.js
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the author name.'
    }, {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub URL of the author.'
    }, {
        type: 'input',
        name: 'projectName',
        message: 'Enter the project name (should match the repository name).'
    }, {
        type: 'input',
        name: 'projectDescription',
        message: 'Give a brief 1-2 sentence description of the project.'
    }, {
        type: 'input',
        name: 'general',
        message: 'Give a detailed explanation of the project and its requirements.'
    }, {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions for the application.'
    }, {
        type: 'input',
        name: 'installation',
        message: 'Give instructions on installing the application.'
    }, {
        type: 'input',
        name: 'contribute',
        message: 'Explain how to contribute to the project.'
    }, {
        type: 'input',
        name: 'questions',
        message: 'Provide an email for users to send inquiries to.'
    }, {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: [
            'MIT',
            'Apache',
            'BSD',
            'Mozilla',
            'None'
        ],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log('inquiry response: ', responses);
        writeToFile('generatedREADME.md', generateMarkdown({...responses}));
    })

}

// Function call to initialize app
init();
