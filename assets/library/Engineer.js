// let the const variable employee equal the value of the Employee.js file
const Employee = require("./Employee");
//this is an extension of the employee file only, 
//create the class 'Engineer' and use it to extend the 'Employee' class
class Engineer extends Employee {
    //create a constructor whose value is the properties of the 'Employee' class and any extra properties required
  constructor(name, id, email, github) {
    //add super with values of the properties from the class 'Employee'
    super(name, id, email)
    // add a property value for github as required
    this.github = github;
  }

  // methods from class 'Employee' will carry forward so create only extra methods needed to extend 
  getGithub() {
    return this.github
  };
// redefine getRole method to engineer
  getRole() {
    return "Engineer"
  };
};

// Export engineer (this class should be an extension now of the class Employee)
module.exports = Engineer; 
