const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const employeeTeam = [];

let responses;

const runApplication = async () => {

    const questions = [
    {
        type: `input`,
        name: `name`,
        message: `Enter the Manager's name: `
    },
    {
        type: `input`,
        name: `id`,
        message: `Enter the Manager's ID: `
    },
    {
        type: `input`,
        name: `email`,
        message: `Enter the Manager's email: `
    },
    {
        type: `input`,
        name: `officeNumber`,
        message: `Enter the Manager's Office Number: `
    }
    ]
    
   await inquirer.prompt(questions)
    .then(answers => {
        responses = answers;
        console.log(answers)
    });

    const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber);
    // console.log(manager)
    employeeTeam.push(manager);
    // console.log(employeeTeam);
    options();
}


const createEngineer = async () => {

    const engQuestions = [
    {
        type: `input`,
        name: `name`,
        message: `Enter the Engineer's Name: `
    },
    {
        type: `input`,
        name: `id`,
        message: `Enter the Engineer's ID: `
    },  {
        type: `input`,
        name: `email`,
        message: `Enter the Engineer's email: `
    },
    {
        type: `input`,
        name: `github`,
        message: `Enter the Engineer's GitHub Username: `
    }
]

    await inquirer.prompt(engQuestions)
        .then(answers => {
         responses = answers;
      });



    const engineer = new Engineer(responses.name, responses.id, responses.email, responses.github)
      console.log (engineer);
    employeeTeam.push(engineer);

    options();
}


const createIntern = async () => {

    const intQuestions = [
    {
        type: `input`,
        name: `name`,
        message: `Enter the Intern's Name: `
    },
    {
        type: `input`,
        name: `id`,
        message: `Enter the Intern's ID: `
    },  {
        type: `input`,
        name: `email`,
        message: `Enter the Intern's email: `
    },
    {
        type: `input`,
        name: `school`,
        message: `Enter the Intern's School: `
    }
]

    await inquirer.prompt(intQuestions)
        .then(answers => {
         responses = answers;
      });



    const intern = new Intern(responses.name, responses.id, responses.email, responses.school)
      console.log (intern);
    employeeTeam.push(intern);

    options();
}


const options = async () => {
   
    const optionQuestions = [
        {
            type: `list`,
            name: `optionList`,
            message: `Please select one of the options below: `,
            choices: [`Add an engineer`, `Add an intern`, `Finish building the team`]
        }]
        
   
        const compile = () => { 
            if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }  
      
          const htmlContent = render(employeeTeam);
          fs.writeFileSync(outputPath, htmlContent);
          console.log(`HTML file generated at: ${outputPath}`);
        
    };
        
    await inquirer.prompt(optionQuestions)
            .then(answers => {
                responses = answers;
            })

    if (responses.optionList === `Add an engineer`){
        console.log(`logged`)
        createEngineer();
    } else if (responses.optionList === `Add an intern`){
        createIntern();
    } else if (responses.optionList === `Finish building the team`){
        compile();
    }

}

runApplication();