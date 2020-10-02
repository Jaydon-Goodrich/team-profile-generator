const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const { writeNewFile, copyFile } = require('./write-new-file');

const generateCards = function (array) {
    return `
        ${array.filter(({ office }) => office).map(({name, id, email, office}) => {
            return `
            <div class="card">
                <h2>${name}</h2>
                <h4>Manager</h4>
                <p>ID: ${id}</p>
                <p>Email: <a href = "mailto: ${email}">${email}</a></p>
                <p>Office: ${office}</p>
            </div>
            `
        })}
        ${array.filter(({ github }) => github).map(({name, id, email, github}) => {
            return `
            <div class="card">
                <h2>${name}</h2>
                <h4>Engineer</h4>
                <p>ID: ${id}</p>
                <p>Email: <a href = "mailto: ${email}">${email}</a></p>
                <p>GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
            </div>
            `
        })}
        ${array.filter(({ school }) => school).map(({name, id, email, school}) => {
            return `
            <div class="card">
                <h2>${name}</h2>
                <h4>Intern</h4>
                <p>ID: ${id}</p>
                <p>Email: <a href = "mailto: ${email}">${email}</a></p>
                <p>School: ${school}</p>
            </div>
            `
        })}
    `

}

const createPage = function (array) {
    const fileContent = 
    `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./style.css">
    </head>

    <body>
        <h1>MY TEAM</h1>
        <div class="container">
            ${generateCards(array)}
        </div>

    </body>

    </html>
    `

    writeNewFile(fileContent);
    copyFile();
}

module.exports = createPage;
