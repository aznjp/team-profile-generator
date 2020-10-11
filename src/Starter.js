// A function is created to then pull the assigned information out to then be made into new card div's 

const teamGeneration = (teamArray) => {
    const managerCard = (manager) => {
        return `
        <div class="card shadow" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <p class="card-text manager"><i class="fas fa-address-card"></i> Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
     `;
    };
    const engineerCard = (engineer) => {
        return `
        <div class="card shadow" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <p class="card-text"> <i class="fas fa-atom"/></i> Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">Github: ${engineer.getGithub()}</li>
        </ul>
        </div>
     `;
    };
    const internCard = (intern) => {
        return `
        <div class="card shadow" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
        </div>
     `;
    };


    // Once the information is pulled from the teamArray from the other file it will filter out the information 
    // and then map it back to each of the constants above before pushing it into a new array
    const employeeCard = [];

    employeeCard.push(
        teamArray
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => managerCard(manager))
    );

    employeeCard.push(
        teamArray
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => engineerCard(engineer))
    );

    employeeCard.push(
        teamArray
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => internCard(intern))
    );

    return employeeCard.join("");

};

//  Once they are pushed into that new array it will then be added to string in array and called in template below prior to pushing out the module
module.exports = teamArray => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Team Profile Generator
    </title>


    <!-- Bootstrap CSS  -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <!-- Font Awesome CSS Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
</head>

<body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center"> Team Profile </span>
    </nav>

    <div class="container">

        <div class="d-flex justify-content-around">

            <!-- Insert the cards into this area -->
            ${teamGeneration(teamArray)}

        </div>

    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>
</body>

</html>
`;
}