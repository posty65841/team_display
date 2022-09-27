const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ jobTitle, name, email, idNum }) =>
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
    {
    type: 'list',
    name: 'jobTitle',
    message: 'what is your job title ?',
    choices: ["Manager", "Engineer","Intern" ],
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },

   
    {
      type: 'input',
      name: 'idNum',
      message: 'what is your id number',
    },
   
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });