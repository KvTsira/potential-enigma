// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require('util');
const createReadMe = require("./utils/generateMarkdown")
const writeAsync = util.promisify(fs.writeFile);

//create array of questions
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is a project title?',
        validate: (value) =>{ if(value){return true} else {return 'please provide a value to continue'}},
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your github name?',
        validate: (value) =>{ if(value){return true} else {return 'please provide a value to continue'}},
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value) =>{ if(value){return true} else {return 'please provide a value to continue'}},
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe this project?',
        default: 'Project description',
    },

    {
        type: 'input',
        name: 'installation ',
        message: 'How would you install this project?',
        default: 'The following is the default installation instruction',
    },
    {
        type: 'input',
        name: 'usage ',
        message: 'How would you use this project',
        default: 'Can be used however you like',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What kind of testing was completed?',
        default: 'I did unit testing',
    },
    {   // list of license
        type: 'list',
        name: 'licensing',
        message: 'What License is this used with?',
        choices: ['MIT','IBM','ISC','N/A']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should people do if they want to contribute to your project?',
        default: 'Reach out on Github or via email with your plan.',
    },
    {   // check multiple options
        type: 'checkbox',
        name: 'languages',
        message: 'What language(s) did you use to create your project?',
        choices: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'React', 'Python', 'C', 'C#', 'TypeScript', 'Other'],
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
    }
]


function askUser() {
    return inquirer.prompt(questions)
};

async function init() {
    try {
        const answers = await askUser();
        const buildContent = createReadMe(answers);
        fs.writeFile('./README.md',buildContent, function(err) {
            if(err) {
                console.log ('coud not create a file');
            } else{
                console.log('README.md successfully created in the written folder.');
            }
        });
        //writeAsync('./README.md', buildContent);
        //console.log('README.md successfully created in the written folder.');
    } catch (err) {
        console.log(err);
    }
}


init();




