const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")

const inquirer = require("inquirer")
const fs = require("fs")

const allPeople = []
const genhtml = require ("./src/genhtml")






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

    allPeople.push(engineer)
    
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

    allPeople.push(intern)
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
