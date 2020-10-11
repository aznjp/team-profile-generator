// A function is created to then pull the assigned information out to then be made into new card div's 

const teamGeneration = (teamArray) => {
    const managerCard = (manager) => {
        return `
        <div class="col-4 mb-4">
        <div class="card shadow">
          <div class="card-body text-center" style = "background-color:darkcyan">
            <h5 class="card-title text-white">${manager.getName()}</h5>
            <p class="card-text text-white"><i class="fas fa-address-card"></i> Manager</p>
          </div>

          <div>
            <ul class="list-group list-group-flush text-center">
              <li class="list-group-item" style = "background-color:lightcyan">ID: ${manager.getId()}</li>
              <li class="list-group-item" style = "background-color:lightcyan">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item" style = "background-color:lightcyan">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
        </div>
     `;
    };
    const engineerCard = (engineer) => {
        return `
        <div class="col-4 mb-4">
        <div class="card shadow">
          <div class="card-body text-center" style = "background-color:darkcyan">
            <h5 class="card-title text-white">${engineer.getName()}</h5>
            <p class="card-text text-white"> <i class="fas fa-atom"/></i> Engineer</p>
          </div>

          <div>
            <ul class="list-group list-group-flush text-center">
              <li class="list-group-item" style = "background-color:lightcyan">ID: ${engineer.getId()}</li>
              <li class="list-group-item" style = "background-color:lightcyan">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item" style = "background-color:lightcyan">Github: <a href="${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
          </div>
        </div>
        </div>
     `;
    };
    const internCard = (intern) => {
        return `
        <div class="col-4 mb-4">
        <div class="card shadow">
          <div class="card-body text-center" style = "background-color:darkcyan">
            <h5 class="card-title text-white">${intern.getName()}</h5>
            <p class="card-text text-white"><i class="fas fa-user-graduate"></i> Intern</p>
          </div>

          <div>
            <ul class="list-group list-group-flush text-center">
              <li class="list-group-item" style = "background-color:lightcyan">ID: ${intern.getId()}</li>
              <li class="list-group-item" style = "background-color:lightcyan">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item" style = "background-color:lightcyan">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
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
    <nav class="navbar navbar-dark bg-dark justify-content-center mb-5">
        <span class="h1 text-white"> Team Profile </span>
    </nav>

    <div class = "container">
      <div class="card-deck justify-content-center">

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