// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let addEmpolyees = true;
  let employees = [];

  //Get user input to create and return an array of employee objects

  while (addEmpolyees) {
    let firstName = prompt('Enter First Name');
    let lastName = prompt('Enter Last Name');
    let salary = prompt('Enter Salary');
    
    //converts string to float value and checks if number
    salary = parseFloat(salary);
    if (Number.isNaN(salary)) {
      salary = 0.00
    }
    
    //pushes input variables to array
    employees.push({
      firstName,
      lastName,
      salary,
      });

    addEmpolyees = confirm("Add another employee?");
  }
  //returns array to calling function 
  return employees;
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let average = 0;

  // loop to add employee salaries
  for (let i = 0; i < employeesArray.length; i++) {
    average += employeesArray[i].salary;
  }

  //divides sum by the number of employees
  average /= employeesArray.length;

  //convert value to currency format
  average = average.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  });

//displays the value in the console
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${average}.`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  
  //Select and display a random employee
  let max = employeesArray.length;
  let randomInteger = Math.floor(Math.random() * max)
  let randomEmployee = employeesArray[randomInteger]
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
