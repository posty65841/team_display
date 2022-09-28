const inquirer = require('inquirer');
const fs = require('fs');

`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title >Myteam</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container" bg >
  <h1  class= "text-center"  > MY TEAM</h1>
  </div>
  </div>
  <div class="card justify " style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${jobTitle}</h5>
    <p class="card-text">${email}</p>
    <p class="card-text">${idNum}</p>
    <p class="card-text">${name}</p>
        
  </div>
  </div>
  </body>
  </html>`


inquirer
.prompt([
  {  type: 'list',
  name: 'jobTitle',
  message: 'what is your job title ?',
  choices: ["Manager", "Engineer","Intern" ],
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
  {     type: 'input',
  name: 'name',
  message: 'What is your name?',
},


{
  type: 'input',
  name: 'idNum',
  message: 'what is your id number',
},

])










//   GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated