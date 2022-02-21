// Including packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("./utils");
const generateMarkDown = require("./utils/generateMarkdown");


// Creating an array of questions for user input using Inquirer
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your name?' 
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?' 
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your Email Address?' 
    },
    {
        type: 'input',
        name: 'Project Description',
        message: 'Give a brief description about your project' 
    },
     
    {
        type: 'input',
        name: 'What does the user need to install to run this app ?',
        message: 'Installation' 
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Commands needed to run the tests?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Give license is being used ?',
        choices:['MIT','APACHE 2.0','GPl-v3','None'] 
    },

  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
