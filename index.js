const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ jobTitle, name  }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Myteam</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container" bg >
    <h1 class="display-4" text-align:center > MY TEAM</h1>
</div>
</div>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${jobTitle}</h5>
    
    <p class="card-text">${name}</p>
    
  </div>
</div>

</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is you email?',
    },
    {
      type: 'list',
      name: 'jobTitle',
      message: 'what is your job title ?',
      choices: ["Manager", "Enginner","Inturn" ],
    },
   
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
   
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });