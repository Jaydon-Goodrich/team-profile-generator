const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const createPage = require('./src/create-page');
const writeNewFile = require('./src/write-new-file');

let empArray = [];

const addManager = function(){
inquirer
    .prompt([{
        type: 'text',
        name: 'name',
        message: 'What is the name of your manager?'
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is the employee ID of your manager?'
    },
    {
        type: 'text',
        name: 'email',
        message: "What is your manager's email?"
    },
    {
        type: 'text',
        name: 'office',
        message: 'What is the office number of your manager?'
    }
    ])
    .then(({ name, id, email, office  }) => {
        var manager = new Manager(name, id, email, office);
        empArray.push(manager);
        getNext();
    });
}

const addEngineer = function(){
    inquirer
    .prompt([{
        type: 'text',
        name: 'name',
        message: 'What is the name of your engineer?'
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is the employee ID of your engineer?'
    },
    {
        type: 'text',
        name: 'email',
        message: "What is your engineer's email?"
    },
    {
        type: 'text',
        name: 'github',
        message: 'What is GitHub username of your engineer?'
    }
    ])
    .then(({ name, id, email, github  }) => {
        var engineer = new Engineer(name, id, email, github);
        empArray.push(engineer);
        getNext();
    });
}

const addIntern = function(){
    inquirer
    .prompt([{
        type: 'text',
        name: 'name',
        message: 'What is the name of your intern?'
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is the employee ID of your intern?'
    },
    {
        type: 'text',
        name: 'email',
        message: "What is your intern's email?"
    },
    {
        type: 'text',
        name: 'school',
        message: "What is name of your intern's school?"
    }
    ])
    .then(({ name, id, email, school  }) => {
        var intern = new Intern(name, id, email, school);
        empArray.push(intern);
        getNext();
    });
}

const getNext = function(){
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do next?',
            name: 'action',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish']
        })
        .then(({ action }) => {
            if(action === 'Add an Engineer'){
                addEngineer();
            }
            else if(action === 'Add an Intern'){
                addIntern();
            }
            else{
                createPage(empArray)
            }
        })
}


addManager();
