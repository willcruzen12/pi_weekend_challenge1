console.log('script.js is sourced');
//global variables
var employees = [];

var addEmployee = function() {
  console.log('in addEmployee');
  //get input
  //create employee object
  var newEmployee = {
    name: document.getElementById('firstName').value + ' ' +
          document.getElementById('lastName').value,
    idNum: document.getElementById('empId').value,
    title: document.getElementById('empTitle').value,
    annualSalary: document.getElementById('empSalary').value
  } //end newEmployee object
  console.log('newEmployee', newEmployee);
    // push employee to employees array
    employees.push(newEmployee);
    console.log('employees:', employees);

    //calculate total salary and avg monthly Salary
    clearInputs();
    calculateSalaryInfo();
    displayEmployees();
};
var totalSalaries = 0;
var averageSalary = 0;
var monthlySalaryCost = 0;
var calculateSalaryInfo = function() {
  console.log('in calculateSalaryInfo');
  //for each employee, add salary to totalSalaries
  for(var i = 0; i < employees.length; i++) {
    //add this employees salary
    totalSalaries += Number(employees[i].annualSalary);
  }
  console.log('totalSalaries:', totalSalaries);
  averageSalary = totalSalaries / employees.length;
  console.log('averageSalary:', averageSalary);
  monthlySalaryCost = totalSalaries / 12;
  console.log('monthlySalaryCost:', monthlySalaryCost);
};

var clearInputs = function() {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('empId').value = '';
  document.getElementById('empTitle').value = '';
  document.getElementById('empSalary').value = '';
};

var displayEmployees = function(){
  var outputDiv = document.getElementById('empList').innerHTML;
  outputDiv.innerHTML = '';
  //loop through employees
  for (var i = 0; i < employees.length; i++) {
    var outputText = '<p>Employee ' + employees[i].idNum + ': ' + employees[i].name + ', '
       + employees[i].title + '<br>' + 'Annual Salary: $' + employees[i].annualSalary + '</p>';
       outputDiv.innerHTML += outputText;
  }
  //total salaries
  outputText = '<p>Total Salaries: $' + totalSalaries + '</p>';
  outputDiv.innerHTML += outputText;
  //avg salaries
  outputText = '<p>Average Annual Salary: $' + averageSalary + '</p>';
  outputDiv.innerHTML += outputText;
  //monthly costs
  outputText = '<p>Monthly Salary Cost: $' + monthlySalaryCost + '</p>';
  outputDiv.innerHTML += outputText;
};// end displayEmployees

var terminateEmployee = function(index) {
  console.log('in terminateEmployee' , index);
  console.log('terminated:', employees[index]);
  employees.splice(index, 1);
  //recalculate and update
  calculateSalaryInfo();
};// end terminateEmployee
