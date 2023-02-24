//use const employee to filter in info from employee section
const Employee = require("./Employee");
// add 'extends Employee' to ensure the class Manager is an extension of the class Employee
class Manager extends Employee {
    //make sure the constructor contains the properties from the employee class then add your extra property to extend
  constructor(name, id, email, officePhone) {
    //add the previous properties as a value of super
    super(name, id, email)
    //add the extra property required 
    this.officePhone = officePhone;
  }

  // add this method only as you are inheriting the methods from class Employee
  getOfficePhone() {
    return this.officePhone
  };
// reset this method to over write the response of 'employee' with a response of manager
  getRole() {
    return "Manager"
  };
};

// Export the manager file
module.exports = Manager;