// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const util = require("util");

const fs = require("fs");



// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        
        name:"Title",
        
        message: "What is the title of your project?",
    },
    {
        type:"input",
        
        name:"Description",
        
        message: "What is your project about? Provide a short description explaining your project."
    },
    {
        type:"input",
        
        name:"Installation",
        
        message:"What are the steps required to install your project?",
    },
    {
        type:"input",
        
        name:"Usage",
        
        message:"How is your app used? Provide instructions and examples for use.",
    },
    {
        
        type:"input",
        
        name:"Contributing",
        
        message:"List any collaborators/third party assets used:",
    },
    {
        
        type:"list",
        
        name:"License",
        
        message:"What license is being used?",
        
        choices: ["MIT", "None"],
    },
    {
        
        type:"input",
        
        name: "Test",
        
        message: "What command should be used to run tests?",
        
        default: "npm test"
    },
    {
        type:"input",
        
        name:"GitHub",
        
        message: "Enter GithHub username.",
        },
    {
        
        type:"input",
        
        name:"Email",
        
        message: "Enter email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        
        console.log(fileName);
        
        console.log(data);
        if (err) {
          return console.log(err);
        } else {
          console.log("ReadMe has been created");
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("./Demonstration/ReadMe.md", generatorMarkdown(data));
        console.log(data);
      });
}

// Function call to initialize app
init();

