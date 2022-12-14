const generateAllPeople = allPeople => {
    const html = [];


    const genManager = manager => {
        return `

    <div class="card employee-card mr-4 ml-4 mb-3  ">
    <div class="card-header text-center">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
`;
    };

    const genEngineer = engineer => {
        return `

<div class="card employee-card mr-4 ml-4 mb-3 ">
                <div class="card-header text-center">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                        <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                    </ul>
                </div>
            </div>
`
    };

    const genIntern = intern => {
        return `
        
        <div class="card employee-card mr-4 ml-4 mb-3  ">
        <div class="card-header text-center">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fa fa-graduation-cap mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
                </div>
        </div>
    
        
        `
    }

    html.push(allPeople
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => genManager(manager))
            );
            html.push(allPeople
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => genEngineer(engineer))
            );
            html.push(allPeople
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => genIntern(intern))
            );

            return html.join("");
    
}


module.exports = allPeople => {
    return`

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        
        <body>
        <div class="container-fluid">
        <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading" style="background-color: #e3f2fd;">
        <h1 class="text-center">All Employees</h1>
        </div>
        </div>
        </div>
        <div class="container-fluid" >
        <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
        ${generateAllPeople(allPeople)}
        </div>
        </div>
        </div>

        
    </body>
    </html>

        `
}