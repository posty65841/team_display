const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")

const inquirer = require("inquirer")
const fs = require("fs")

const allPeople = []
const genhtml = require ("./src/genhtml")



// const generateHTML = ({ name, id, email, github, officeNumber, school }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${id}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${email}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;



function generateEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'what are you for the company ',
        choices: ["Manager", "Engineer", "Intern", "quit"]
      },
    ])
  
      .then((answers) => {

      if (answers.role === "Manager") {

        console.log(answers)
        genManager()

      }

      else if (answers.role === "Engineer") {
        console.log(answers)

        genEngineer()

      }
      else if (answers.role === "Intern") {
        console.log(answers)

        genIntern()

      }
      else {
        console.log("team made ")
        genCard();



      }
    });

}





function genManager() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'What is your office number?',
    },
  ]).then(response => {
    let manager = new Manager(response.name, response.id, response.email, response.officeNum)

    allPeople.push(manager)
    // insert add new member function here**
    generateEmployee()
})
}


function genEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username?',
    },

  ]).then(response => {
    let engineer = new Engineer(response.name, response.id, response.email, response.github)

    allPeople.push(Engineer)
    
    generateEmployee()
})
}

function genIntern() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school did you attend ?',
    },
  ]).then(response => {
    let intern = new Intern(response.name, response.id, response.email, response.school)

    allPeople.push(Intern)
    // insert add new member function here**
    generateEmployee()
})
}

function genCard(){
  fs.writeFile('generate-index.html', genhtml(allPeople), (err) =>
          err ? console.log(err) : console.log('you did it yayyyyyy')
        );

}

generateEmployee();
















