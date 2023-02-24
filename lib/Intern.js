// let the const variable employee equal the value of the Employee.js file
const Employee = require("./Employee");
//this is an extension of the employee file only, 
//create the class 'Intern' and use it to extend the 'Employee' class
class Intern extends Employee {
  //create a constructor whose value is the properties of the 'Employee' class and any extra properties required
    constructor(name, id, email, school) {
            //add super with values of the properties from the class 'Employee'
    super(name, id, email)
     // add a property value for school name as required
    this.school = school;
  }

 // methods from class 'Employee' will carry forward so create only extra methods needed to extend 
  getSchool() {
    return this.school
  };
// redefine getRole method to intern
  getRole() {
    return "Intern"
  };
};

// Export Intern (this class should be an extension now of the class Employee)
module.exports = Intern;